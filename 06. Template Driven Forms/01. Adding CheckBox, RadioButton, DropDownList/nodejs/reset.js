var fs = require("fs");
jsonfile = __dirname + "/data.json";

data = {
  projects: [
    {
      projectID: 1,
      projectName: "Bug Tracking System",
      dateOfStart: "2023-05-07",
      teamSize: 6,
      active: true,
      status: "In Force",
      clientLocationID: 1,
      clientLocation: {
        clientLocationID: 1,
        clientLocationName: "Boston",
      },
    },
    {
      projectID: 2,
      projectName: "COVID-19 Tracker",
      dateOfStart: "2020-03-15",
      teamSize: 17,
      Active: false,
      status: "Support",
      clientLocationID: 2,
      clientLocation: {
        clientLocationID: 2,
        clientLocationName: "London",
      },
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
      Role: "Admin",
    },
  ],
  clientLocations: [
    {
      clientLocationID: 1,
      clientLocationName: "Boston",
    },
    {
      clientLocationID: 2,
      clientLocationName: "London",
    },
    {
      clientLocationID: 3,
      clientLocationName: "New Jersy",
    },
  ],
};
fs.writeFileSync(jsonfile, JSON.stringify(data), "utf8");
