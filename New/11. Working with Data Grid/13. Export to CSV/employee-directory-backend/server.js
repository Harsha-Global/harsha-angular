const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data', 'employees.json');

// Middleware
app.use(cors());
app.use(express.json());

// Helper: Read employees from file
function readEmployees()
{
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

// Helper: Write employees to file
function writeEmployees(employees)
{
  fs.writeFileSync(DATA_FILE, JSON.stringify(employees, null, 2));
}

// Helper: Filter employees based on query params
function filterEmployees(employees, query)
{
  let filtered = [...employees];

  // Full-text search (q)
  if (query.q)
  {
    const searchTerm = query.q.toLowerCase();
    filtered = filtered.filter(emp =>
      emp.firstName.toLowerCase().includes(searchTerm) ||
      emp.lastName.toLowerCase().includes(searchTerm) ||
      emp.email.toLowerCase().includes(searchTerm) ||
      emp.department.toLowerCase().includes(searchTerm) ||
      emp.designation.toLowerCase().includes(searchTerm) ||
      emp.location.toLowerCase().includes(searchTerm)
    );
  }

  // Filter by department
  if (query.department)
  {
    filtered = filtered.filter(emp => emp.department === query.department);
  }

  // Filter by status
  if (query.status)
  {
    filtered = filtered.filter(emp => emp.status === query.status);
  }

  // Filter by location
  if (query.location)
  {
    filtered = filtered.filter(emp => emp.location === query.location);
  }

  // Filter by join date range
  if (query.joinDateFrom)
  {
    const fromDate = new Date(query.joinDateFrom);
    filtered = filtered.filter(emp => new Date(emp.joinDate) >= fromDate);
  }

  if (query.joinDateTo)
  {
    const toDate = new Date(query.joinDateTo);
    filtered = filtered.filter(emp => new Date(emp.joinDate) <= toDate);
  }

  // Filter by salary range
  if (query.salaryMin)
  {
    const minSalary = parseFloat(query.salaryMin);
    filtered = filtered.filter(emp => emp.salary >= minSalary);
  }

  if (query.salaryMax)
  {
    const maxSalary = parseFloat(query.salaryMax);
    filtered = filtered.filter(emp => emp.salary <= maxSalary);
  }

  return filtered;
}

// Helper: Sort employees based on query params
function sortEmployees(employees, query)
{
  // Support single sort: ?_sort=salary&_order=desc
  // Support multi sort: ?_sort=department,salary&_order=asc,desc
  
  if (!query._sort)
  {
    return employees;
  }

  const sortFields = query._sort.split(',');
  const sortOrders = query._order ? query._order.split(',') : [];

  const sorted = [...employees].sort((a, b) =>
  {
    for (let i = 0; i < sortFields.length; i++)
    {
      const field = sortFields[i];
      const order = sortOrders[i] || 'asc';

      let valueA = a[field];
      let valueB = b[field];

      // Handle null/undefined
      if (valueA == null) valueA = '';
      if (valueB == null) valueB = '';

      // Handle dates
      if (field === 'joinDate')
      {
        valueA = new Date(valueA).getTime();
        valueB = new Date(valueB).getTime();
      }

      // Handle strings
      if (typeof valueA === 'string' && typeof valueB === 'string')
      {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }

      let comparison = 0;
      if (valueA > valueB) comparison = 1;
      if (valueA < valueB) comparison = -1;

      if (comparison !== 0)
      {
        return order === 'desc' ? -comparison : comparison;
      }
    }
    return 0;
  });

  return sorted;
}

// Helper: Paginate employees
function paginateEmployees(employees, query)
{
  const page = parseInt(query._page) || 1;
  const limit = parseInt(query._limit) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return {
    data: employees.slice(startIndex, endIndex),
    pagination: {
      currentPage: page,
      pageSize: limit,
      totalItems: employees.length,
      totalPages: Math.ceil(employees.length / limit)
    }
  };
}


// ===== ROUTES =====

// GET /employees - List with filtering, sorting, pagination
app.get('/employees', (req, res) =>
{
  try
  {
    let employees = readEmployees();

    // Apply filters
    employees = filterEmployees(employees, req.query);

    // Store total after filtering (before pagination)
    const totalFiltered = employees.length;

    // Apply sorting
    employees = sortEmployees(employees, req.query);

    // Apply pagination
    if (req.query._page)
    {
      const result = paginateEmployees(employees, req.query);
      
      // Set headers for total count (useful for client-side)
      res.set('X-Total-Count', totalFiltered.toString());
      res.set('Access-Control-Expose-Headers', 'X-Total-Count');
      
      return res.json(result);
    }

    // No pagination - return all (with total in header)
    res.set('X-Total-Count', totalFiltered.toString());
    res.set('Access-Control-Expose-Headers', 'X-Total-Count');
    res.json(employees);
  }
  catch (error)
  {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
});

// GET /employees/stats - Get statistics for filters
app.get('/employees/stats', (req, res) =>
{
  try
  {
    const employees = readEmployees();

    const stats = {
      total: employees.length,
      byDepartment: {},
      byStatus: {},
      byLocation: {},
      salaryRange: {
        min: Math.min(...employees.map(e => e.salary)),
        max: Math.max(...employees.map(e => e.salary))
      },
      joinDateRange: {
        earliest: employees.reduce((min, e) => e.joinDate < min ? e.joinDate : min, employees[0]?.joinDate),
        latest: employees.reduce((max, e) => e.joinDate > max ? e.joinDate : max, employees[0]?.joinDate)
      }
    };

    // Count by department
    employees.forEach(emp =>
    {
      stats.byDepartment[emp.department] = (stats.byDepartment[emp.department] || 0) + 1;
      stats.byStatus[emp.status] = (stats.byStatus[emp.status] || 0) + 1;
      stats.byLocation[emp.location] = (stats.byLocation[emp.location] || 0) + 1;
    });

    res.json(stats);
  }
  catch (error)
  {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

// GET /employees/export - Export all (with filters applied, no pagination)
app.get('/employees/export', (req, res) =>
{
  try
  {
    let employees = readEmployees();

    // Apply filters
    employees = filterEmployees(employees, req.query);

    // Apply sorting
    employees = sortEmployees(employees, req.query);

    // Return all filtered data (no pagination limit)
    res.json(employees);
  }
  catch (error)
  {
    console.error('Error exporting employees:', error);
    res.status(500).json({ error: 'Failed to export employees' });
  }
});

// GET /employees/:id - Get single employee
app.get('/employees/:id', (req, res) =>
{
  try
  {
    const employees = readEmployees();
    const id = parseInt(req.params.id);
    const employee = employees.find(emp => emp.id === id);

    if (!employee)
    {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.json(employee);
  }
  catch (error)
  {
    console.error('Error fetching employee:', error);
    res.status(500).json({ error: 'Failed to fetch employee' });
  }
});

// POST /employees - Create new employee
app.post('/employees', (req, res) =>
{
  try
  {
    const employees = readEmployees();

    const newEmployee = {
      id: Math.max(...employees.map(e => e.id), 0) + 1,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      department: req.body.department,
      designation: req.body.designation,
      salary: req.body.salary,
      joinDate: req.body.joinDate || new Date().toISOString().split('T')[0],
      status: req.body.status || 'active',
      location: req.body.location,
      managerId: req.body.managerId || null,
      avatar: req.body.avatar || `https://i.pravatar.cc/150?u=${Date.now()}`
    };

    employees.push(newEmployee);
    writeEmployees(employees);

    res.status(201).json(newEmployee);
  }
  catch (error)
  {
    console.error('Error creating employee:', error);
    res.status(500).json({ error: 'Failed to create employee' });
  }
});

// PUT /employees/:id - Update employee
app.put('/employees/:id', (req, res) =>
{
  try
  {
    const employees = readEmployees();
    const id = parseInt(req.params.id);
    const index = employees.findIndex(emp => emp.id === id);

    if (index === -1)
    {
      return res.status(404).json({ error: 'Employee not found' });
    }

    const updatedEmployee = {
      ...employees[index],
      ...req.body,
      id: id // Prevent id from being changed
    };

    employees[index] = updatedEmployee;
    writeEmployees(employees);

    res.json(updatedEmployee);
  }
  catch (error)
  {
    console.error('Error updating employee:', error);
    res.status(500).json({ error: 'Failed to update employee' });
  }
});

// DELETE /employees/:id - Delete employee
app.delete('/employees/:id', (req, res) =>
{
  try
  {
    const employees = readEmployees();
    const id = parseInt(req.params.id);
    const index = employees.findIndex(emp => emp.id === id);

    if (index === -1)
    {
      return res.status(404).json({ error: 'Employee not found' });
    }

    employees.splice(index, 1);
    writeEmployees(employees);

    res.json({ message: 'Employee deleted successfully' });
  }
  catch (error)
  {
    console.error('Error deleting employee:', error);
    res.status(500).json({ error: 'Failed to delete employee' });
  }
});

// DELETE /employees - Bulk delete
app.delete('/employees', (req, res) =>
{
  try
  {
    const { ids } = req.body; // Expect { ids: [1, 2, 3] }

    if (!ids || !Array.isArray(ids))
    {
      return res.status(400).json({ error: 'Invalid request. Expected { ids: [...] }' });
    }

    let employees = readEmployees();
    const initialCount = employees.length;

    employees = employees.filter(emp => !ids.includes(emp.id));
    writeEmployees(employees);

    const deletedCount = initialCount - employees.length;

    res.json({ message: `${deletedCount} employee(s) deleted successfully` });
  }
  catch (error)
  {
    console.error('Error bulk deleting employees:', error);
    res.status(500).json({ error: 'Failed to delete employees' });
  }
});

// GET /departments - List all departments
app.get('/departments', (req, res) =>
{
  const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'];
  res.json(departments);
});

// GET /locations - List all locations
app.get('/locations', (req, res) =>
{
  const locations = ['New York', 'San Francisco', 'London', 'Bangalore', 'Singapore'];
  res.json(locations);
});

// GET /designations - List all designations
app.get('/designations', (req, res) =>
{
  const designations = [
    'Software Engineer',
    'Senior Software Engineer',
    'Tech Lead',
    'Engineering Manager',
    'Product Manager',
    'Designer',
    'Senior Designer',
    'Marketing Specialist',
    'Marketing Manager',
    'Sales Representative',
    'Sales Manager',
    'HR Specialist',
    'HR Manager',
    'Accountant',
    'Finance Manager',
    'Operations Analyst',
    'Operations Manager'
  ];
  res.json(designations);
});


// Start server
app.listen(PORT, () =>
{
  console.log(`Employee Directory API running at http://localhost:${PORT}`);
  console.log('');
  console.log('Available endpoints:');
  console.log('  GET    /employees          - List employees (with filter, sort, pagination)');
  console.log('  GET    /employees/stats    - Get statistics');
  console.log('  GET    /employees/export   - Export filtered employees');
  console.log('  GET    /employees/:id      - Get single employee');
  console.log('  POST   /employees          - Create employee');
  console.log('  PUT    /employees/:id      - Update employee');
  console.log('  DELETE /employees/:id      - Delete employee');
  console.log('  DELETE /employees          - Bulk delete { ids: [...] }');
  console.log('  GET    /departments        - List departments');
  console.log('  GET    /locations          - List locations');
  console.log('  GET    /designations       - List designations');
  console.log('');
  console.log('Query parameters for /employees:');
  console.log('  ?q=search          - Full-text search');
  console.log('  ?department=X      - Filter by department');
  console.log('  ?status=X          - Filter by status (active, on-leave, terminated)');
  console.log('  ?location=X        - Filter by location');
  console.log('  ?joinDateFrom=X    - Filter by join date (from)');
  console.log('  ?joinDateTo=X      - Filter by join date (to)');
  console.log('  ?salaryMin=X       - Filter by salary (min)');
  console.log('  ?salaryMax=X       - Filter by salary (max)');
  console.log('  ?_sort=field       - Sort by field (comma-separated for multi-sort)');
  console.log('  ?_order=asc|desc   - Sort order (comma-separated for multi-sort)');
  console.log('  ?_page=1&_limit=10 - Pagination');
});
