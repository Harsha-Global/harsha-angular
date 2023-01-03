//express
var express = require("express");
var app = express();
var cors = require("cors");
var fs = require("fs");
var helpers = require("./helpers");

app.listen(9090, startup);
function startup() {
  console.log("Server started at port 9090");
}
app.use(cors());
app.use(express.static(__dirname));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

jsonfile = __dirname + "/projects.json";

//GET api/projects
app.get("/api/projects", function (req, res) {
  console.log(req.method, req.url);
  projects = JSON.parse(fs.readFileSync(jsonfile, "utf8")).projects;
  console.log("Response: ", projects);
  res.send(helpers.toCamel(projects));
});

//POST api/projects
app.post("/api/projects", function (req, res) {
  console.log(req.method, req.url);
  projects = JSON.parse(fs.readFileSync(jsonfile)).projects;
  projects.push(req.body);
  console.log("Response: ", projects);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      projects: projects,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
});

//PUT api/projects
app.put("/api/projects", function (req, res) {
  console.log(req.method, req.url);
  projects = JSON.parse(fs.readFileSync(jsonfile)).projects;
  projects = projects.map((project) =>
    project.projectID == req.body.projectID ? req.body : project
  );
  console.log("Response: ", projects);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      projects: projects,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
});

//DELETE api/projects
app.delete("/api/projects", function (req, res) {
  console.log(req.method, req.url);
  projects = JSON.parse(fs.readFileSync(jsonfile)).projects;
  projects = projects.filter(
    (project) => project.projectID != req.query.ProjectID
  );
  console.log("Response: ", projects);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      projects: projects,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
});

//GET /api/projects/search/:searchby/:searchtext
app.get("/api/projects/search/:searchby/:searchtext?", function (req, res) {
  console.log(req.method, req.url);
  console.log(req.params);
  projects = JSON.parse(fs.readFileSync(jsonfile, "utf8")).projects;
  req.params.searchtext = (req.params.searchtext || "").toUpperCase();
  req.params.searchby = helpers.toCamelCase(req.params.searchby || "");
  console.log(req.params);
  projects = projects.filter((project) => {
    value = String(project[req.params.searchby] || "").toUpperCase();
    return value.indexOf(req.params.searchtext) >= 0;
  });

  console.log("Response: ", projects);
  res.send(helpers.toCamel(projects));
});

//POST /authenticate
app.post("/authenticate", function (req, res) {
  console.log(req.method, req.url);
  users = JSON.parse(fs.readFileSync(jsonfile, "utf8")).users;
  user = users.find(
    (user) =>
      user.UserName == req.body.UserName && user.Password == req.body.Password
  );
  if (user) {
    console.log("Response: ", user);
    res.send(helpers.toCamel({ ...user, password: "" }));
  }
  else {
    res.status(400);
    res.send({ message: "Username or password is incorrect" });
  }
});
