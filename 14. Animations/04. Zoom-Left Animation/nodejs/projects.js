var fs = require("fs");
var helpers = require("./helpers");

//GET api/projects
function getProjects(req, res) {
  console.log(req.method, req.url);
  projects = JSON.parse(fs.readFileSync(jsonfile, "utf8")).projects;
  console.log("Response: ", projects);
  res.send(helpers.toCamel(projects));
}

//POST api/projects
function postProjects(req, res) {
  console.log(req.method, req.url);
  projects = JSON.parse(fs.readFileSync(jsonfile)).projects;

  if (req.body.clientLocationID)
    req.body.clientLocation = JSON.parse(fs.readFileSync(jsonfile)).clientLocations.find(c => c.clientLocationID == req.body.clientLocationID);


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
}

//PUT api/projects
function putProjects(req, res) {
  console.log(req.method, req.url);
  projects = JSON.parse(fs.readFileSync(jsonfile)).projects;
  clientLocations = JSON.parse(fs.readFileSync(jsonfile)).clientLocations;
  projects = projects.map((project) => {
    if (project.projectID == req.body.projectID) {
      if (req.body.clientLocationID) {
        req.body.clientLocation = clientLocations.find(
          (cl) => cl.clientLocationID == req.body.clientLocationID
        );
      }
      return req.body;
    } else {
      return project;
    }
  });
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
}

//DELETE api/projects
function deleteProjects(req, res) {
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
}

//GET /api/projects/search/:searchby/:searchtext
function searchProjects(req, res) {
  console.log(req.method, req.url);
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
}

//GET /api/projects/searchbyprojectid/:ProjectID
function getProjectByProjectID(req, res) {
  console.log(req.method, req.url);
  console.log(req.params);
  projects = JSON.parse(fs.readFileSync(jsonfile, "utf8")).projects;
  console.log(req.params);
  projects = projects.find((project) => {
    return project["projectID"] == req.params.ProjectID;
  });
  console.log("Response: ", projects);
  if (projects) {
    res.send(helpers.toCamel(projects));
  } else {
    res.send(projects);
  }
}

exports.getProjects = getProjects;
exports.postProjects = postProjects;
exports.putProjects = putProjects;
exports.deleteProjects = deleteProjects;
exports.searchProjects = searchProjects;
exports.getProjectByProjectID = getProjectByProjectID;
