# Employee Directory Backend

Node.js backend server for the Employee Directory Angular project.

## Setup

1. Install dependencies:
```bash
   npm install
```

2. Start the server:
```bash
   npm start
```

   Or with auto-reload (Node 18+):
```bash
   npm run dev
```

3. Server runs at: `http://localhost:3000`

## API Endpoints

### Employees

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /employees | List employees (with filters, sort, pagination) |
| GET | /employees/stats | Get statistics for filters |
| GET | /employees/export | Export filtered employees (no pagination) |
| GET | /employees/:id | Get single employee |
| POST | /employees | Create employee |
| PUT | /employees/:id | Update employee |
| DELETE | /employees/:id | Delete employee |
| DELETE | /employees | Bulk delete (body: { ids: [...] }) |

### Reference Data

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /departments | List all departments |
| GET | /locations | List all locations |
| GET | /designations | List all designations |

## Query Parameters for GET /employees

### Search
- `?q=john` - Full-text search across name, email, department, designation, location

### Filters
- `?department=Engineering` - Filter by department
- `?status=active` - Filter by status (active, on-leave, terminated)
- `?location=Bangalore` - Filter by location
- `?joinDateFrom=2022-01-01` - Filter by join date (from)
- `?joinDateTo=2023-12-31` - Filter by join date (to)
- `?salaryMin=50000` - Filter by salary (minimum)
- `?salaryMax=100000` - Filter by salary (maximum)

### Sorting
- `?_sort=salary&_order=desc` - Single column sort
- `?_sort=department,salary&_order=asc,desc` - Multi-column sort

### Pagination
- `?_page=1&_limit=10` - Paginated response

Response includes `X-Total-Count` header with total filtered count.

## Examples
```bash
# Get all employees
GET /employees

# Search for "john"
GET /employees?q=john

# Filter by department and status
GET /employees?department=Engineering&status=active

# Sort by salary descending
GET /employees?_sort=salary&_order=desc

# Multi-column sort (department asc, then salary desc)
GET /employees?_sort=department,salary&_order=asc,desc

# Pagination
GET /employees?_page=1&_limit=10

# Combined query
GET /employees?department=Engineering&_sort=salary&_order=desc&_page=1&_limit=10

# Export all filtered data
GET /employees/export?department=Engineering&status=active
```

## Data

The server uses `data/employees.json` as a file-based database with 100 employee records.

Employee fields:
- id, firstName, lastName, email, phone
- department, designation, salary
- joinDate, status, location
- managerId, avatar
