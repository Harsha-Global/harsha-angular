var fs = require("fs");
var helpers = require("./helpers");
jsonfile = __dirname + "/data.json";

//GET api/tasks
function gettasks(req, res) {
  console.log(req.method, req.url);
  tasks = JSON.parse(
    fs.readFileSync(jsonfile, "utf8")
  ).tasks;
  console.log("Response: ", tasks);
  res.send(helpers.toCamel(tasks));
}

//POST api/tasks
function posttasks(req, res) {
  console.log(req.method, req.url);
  tasks = JSON.parse(fs.readFileSync(jsonfile)).tasks;
  req.body.taskID = Math.max.apply(Math, tasks.map(function (o) { return o.taskID; })) + 1;
  tasks.push(req.body);
  console.log("Response: ", tasks);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      tasks: tasks,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
}

//PUT api/tasks
function puttasks(req, res) {
  console.log(req.method, req.url);
  tasks = JSON.parse(fs.readFileSync(jsonfile)).tasks;
  tasks = tasks.map((task) =>
    task.taskID == req.body.taskID
      ? req.body
      : task
  );
  console.log("Response: ", tasks);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      tasks: tasks,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
}

//DELETE api/tasks
function deletetasks(req, res) {
  console.log(req.method, req.url);
  tasks = JSON.parse(fs.readFileSync(jsonfile)).tasks;
  tasks = tasks.filter(
    (task) =>
      task.taskID != req.query.taskID
  );
  console.log("Response: ", tasks);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      tasks: tasks,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
}

//GET /api/tasks/search/:searchby/:searchtext
function searchtasks(req, res) {
  console.log(req.method, req.url);
  console.log(req.params);
  tasks = JSON.parse(
    fs.readFileSync(jsonfile, "utf8")
  ).tasks;
  req.params.searchtext = (req.params.searchtext || "").toUpperCase();
  req.params.searchby = helpers.toCamelCase(req.params.searchby || "");
  console.log(req.params);
  tasks = tasks.filter((task) => {
    value = (task[req.params.searchby] || "").toUpperCase();
    return value.indexOf(req.params.searchtext) >= 0;
  });

  console.log("Response: ", tasks);
  res.send(helpers.toCamel(tasks));
}


//GET /api/tasks/searchbytaskid/:taskID
function searchBytaskID(req, res) {
  console.log(req.method, req.url);
  console.log(req.params);
  tasks = JSON.parse(fs.readFileSync(jsonfile, "utf8")).tasks;
  console.log(req.params);
  tasks = tasks.find((task) => {
    return task["taskID"] == req.params.taskID;
  });
  console.log("Response: ", tasks);
  if (tasks) {
    res.send(helpers.toCamel(tasks));
  } else {
    res.send(tasks);
  }
}

exports.gettasks = gettasks;
exports.posttasks = posttasks;
exports.puttasks = puttasks;
exports.deletetasks = deletetasks;
exports.searchtasks = searchtasks;
exports.searchBytaskID = searchBytaskID;
