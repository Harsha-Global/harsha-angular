var fs = require("fs");
jsonfile = __dirname + "/projects.json";

data = {
  projects: [
    {
      projectID: 1,
      projectName: "Bug Tracking System",
      dateOfStart: "2023-05-07",
      teamSize: 6,
    },
    {
      projectID: 2,
      projectName: "COVID-19 Tracker",
      dateOfStart: "2020-03-15",
      teamSize: 17,
    },
  ],
  roles: [
    {
      id: 1,
      roleName: "Admin",
    },
    {
      id: 2,
      roleName: "Employee",
    },
  ],
  users: [
    {
      id: 1,
      UserName: "admin",
      Email: "admin@gmail.com",
      Password: "Admin123#",
      role: 1,
    },
  ],
};
fs.writeFileSync(jsonfile, JSON.stringify(data), "utf8");
