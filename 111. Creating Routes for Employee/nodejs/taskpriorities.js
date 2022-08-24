var fs = require("fs");
var helpers = require("./helpers");
jsonfile = __dirname + "/data.json";

//GET api/taskPriorities
function getTaskPriorities(req, res) {
  console.log(req.method, req.url);
  taskPriorities = JSON.parse(
    fs.readFileSync(jsonfile, "utf8")
  ).taskPriorities;
  console.log("Response: ", taskPriorities);
  res.send(helpers.toCamel(taskPriorities));
}

//POST api/taskPriorities
function postTaskPriorities(req, res) {
  console.log(req.method, req.url);
  taskPriorities = JSON.parse(fs.readFileSync(jsonfile)).taskPriorities;
  req.body.taskPriorityID = Math.max.apply(Math, taskPriorities.map(function (o) { return o.taskPriorityID; })) + 1;
  taskPriorities.push(req.body);
  console.log("Response: ", taskPriorities);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      taskPriorities: taskPriorities,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
}

//PUT api/taskPriorities
function putTaskPriorities(req, res) {
  console.log(req.method, req.url);
  taskPriorities = JSON.parse(fs.readFileSync(jsonfile)).taskPriorities;
  taskPriorities = taskPriorities.map((taskPriority) =>
    taskPriority.taskPriorityID == req.body.taskPriorityID
      ? req.body
      : taskPriority
  );
  console.log("Response: ", taskPriorities);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      taskPriorities: taskPriorities,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
}

//DELETE api/taskPriorities
function deleteTaskPriorities(req, res) {
  console.log(req.method, req.url);
  taskPriorities = JSON.parse(fs.readFileSync(jsonfile)).taskPriorities;
  taskPriorities = taskPriorities.filter(
    (taskPriority) =>
      taskPriority.taskPriorityID != req.query.TaskPriorityID
  );
  console.log("Response: ", taskPriorities);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      taskPriorities: taskPriorities,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
}

//GET /api/taskPriorities/search/:searchby/:searchtext
function searchTaskPriorities(req, res) {
  console.log(req.method, req.url);
  console.log(req.params);
  taskPriorities = JSON.parse(
    fs.readFileSync(jsonfile, "utf8")
  ).taskPriorities;
  req.params.searchtext = (req.params.searchtext || "").toUpperCase();
  req.params.searchby = helpers.toCamelCase(req.params.searchby || "");
  console.log(req.params);
  taskPriorities = taskPriorities.filter((taskPriority) => {
    value = (taskPriority[req.params.searchby] || "").toUpperCase();
    return value.indexOf(req.params.searchtext) >= 0;
  });

  console.log("Response: ", taskPriorities);
  res.send(helpers.toCamel(taskPriorities));
}


//GET /api/taskPriorities/searchbyclientlocationid/:TaskPriorityID
function searchByTaskPriorityID(req, res) {
  console.log(req.method, req.url);
  console.log(req.params);
  taskPriorities = JSON.parse(fs.readFileSync(jsonfile, "utf8")).taskPriorities;
  console.log(req.params);
  taskPriorities = taskPriorities.find((taskPriority) => {
    return taskPriority["taskPriorityID"] == req.params.TaskPriorityID;
  });
  console.log("Response: ", taskPriorities);
  if (taskPriorities) {
    res.send(helpers.toCamel(taskPriorities));
  } else {
    res.send(taskPriorities);
  }
}

exports.getTaskPriorities = getTaskPriorities;
exports.postTaskPriorities = postTaskPriorities;
exports.putTaskPriorities = putTaskPriorities;
exports.deleteTaskPriorities = deleteTaskPriorities;
exports.searchTaskPriorities = searchTaskPriorities;
exports.searchByTaskPriorityID = searchByTaskPriorityID;
