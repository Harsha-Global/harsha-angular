var fs = require("fs");
var helpers = require("./helpers");
jsonfile = __dirname + "/data.json";

//GET api/tasks
function gettasks(req, res) {
  console.log(req.method, req.url);
  tasks = JSON.parse(
    fs.readFileSync(jsonfile, "utf8")
  ).tasks;

  projects = JSON.parse(fs.readFileSync(jsonfile)).projects;
  taskPriorities = JSON.parse(fs.readFileSync(jsonfile)).taskPriorities;
  users = JSON.parse(fs.readFileSync(jsonfile)).users;
  taskStatusDetails = JSON.parse(fs.readFileSync(jsonfile)).taskStatusDetails;

  taskStatuses = JSON.parse(
    fs.readFileSync(jsonfile, "utf8")
  ).taskStatuses;

  taskStatusDetails.forEach(taskStatusDetail => {
    taskStatusDetail.user = users.find(temp => temp.id == taskStatusDetail.userID);
    taskStatusDetail.taskStatus = taskStatuses.find(temp => temp.taskStatusID == taskStatusDetail.taskStatusID);
  });

  tasks.forEach(task => {
    task.project = projects.find(temp => temp.projectID == task.projectID);
    task.taskPriority = taskPriorities.find(temp => temp.taskPriorityID == task.taskPriorityID);
    task.assignedToUser = users.find(temp => temp.id == parseInt(task.assignedTo));
    task.createdByUser = users.find(temp => temp.id == task.createdBy);
    task.taskStatusDetails = taskStatusDetails.filter(temp => temp.taskID == task.taskID);
  });

  var groupedTasks = [];
  taskStatuses.forEach((taskStatus) => {
    var matchingTasks = tasks.filter(temp => temp.CurrentStatus == taskStatus.taskStatusName);
    if (matchingTasks.length > 0)
      groupedTasks.push({
        taskStatusName: taskStatus.taskStatusName,
        tasks: matchingTasks
      });
  });

  console.log("Response: ", groupedTasks);
  res.send(helpers.toCamel(groupedTasks));
}



//POST api/tasks
function posttasks(req, res) {
  console.log(req.method, req.url);
  tasks = JSON.parse(fs.readFileSync(jsonfile)).tasks;
  taskStatusDetails = JSON.parse(fs.readFileSync(jsonfile)).taskStatusDetails;


  var newTaskStatusDetail = {};
  if (tasks.length > 0)
    req.body.taskID = Math.max.apply(Math, tasks.map(function (o) { return o.taskID; })) + 1;
  else
    req.body.taskID = 1;

  if (taskStatusDetails.length > 0)
    newTaskStatusDetail.taskStatusDetailID = Math.max.apply(Math, taskStatusDetails.map(function (o) { return o.taskStatusDetailID; })) + 1;
  else
    newTaskStatusDetail.taskStatusDetailID = 1;

  req.body.CurrentStatus = "Holding";
  var d = `${new Date().getFullYear()}-${(new Date().getMonth() + 1)}-${new Date().getDate()}`;
  req.body.createdOn = d;
  req.body.lastUpdatedOn = d;
  req.body.createdOnString = d;
  req.body.lastUpdatedOnString = d;
  if (req.body.assignedTo != null && req.body.assignedTo != undefined)
    req.body.assignedTo = parseInt(req.body.assignedTo);
  req.body.currentTaskStatusID = 1;
  tasks.push(req.body);

  newTaskStatusDetail.taskID = req.body.taskID;
  newTaskStatusDetail.userID = req.body.createdBy;
  newTaskStatusDetail.taskStatusID = 1;
  newTaskStatusDetail.statusUpdationDateTime = d;
  newTaskStatusDetail.description = "Task Created";
  taskStatusDetails.push(newTaskStatusDetail);

  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      taskStatusDetails: taskStatusDetails,
    }),
    "utf8"
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


//PUT api/updatetaskstatus
function updateTaskStatus(req, res) {
  console.log(req.method, req.url);
  taskStatusDetails = JSON.parse(fs.readFileSync(jsonfile)).taskStatusDetails;
  var newTaskStatusDetail = {};
  var d = `${new Date().getFullYear()}-${(new Date().getMonth() + 1)}-${new Date().getDate()}`;

  newTaskStatusDetail.taskID = parseInt(req.body.taskID);
  newTaskStatusDetail.userID = parseInt(req.body.userID);
  //newTaskStatusDetail.userID is submitted by the angular app
  newTaskStatusDetail.taskStatusID = parseInt(req.body.taskStatusID);
  newTaskStatusDetail.statusUpdationDateTime = d;
  newTaskStatusDetail.description = req.body.description;
  taskStatusDetails.push(newTaskStatusDetail);

  console.log("Response: ", taskStatusDetails);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      taskStatusDetails: taskStatusDetails,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
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

  projects = JSON.parse(fs.readFileSync(jsonfile)).projects;
  taskPriorities = JSON.parse(fs.readFileSync(jsonfile)).taskPriorities;
  users = JSON.parse(fs.readFileSync(jsonfile)).users;
  taskStatusDetails = JSON.parse(fs.readFileSync(jsonfile)).taskStatusDetails;

  taskStatuses = JSON.parse(
    fs.readFileSync(jsonfile, "utf8")
  ).taskStatuses;

  taskStatusDetails.forEach(taskStatusDetail => {
    taskStatusDetail.user = users.find(temp => temp.id == taskStatusDetail.userID);
    taskStatusDetail.taskStatus = taskStatuses.find(temp => temp.taskStatusID == taskStatusDetail.taskStatusID);
  });

  tasks.project = projects.find(temp => temp.projectID == tasks.projectID);
  tasks.taskPriority = taskPriorities.find(temp => temp.taskPriorityID == tasks.taskPriorityID);
  tasks.assignedToUser = users.find(temp => temp.id == parseInt(tasks.assignedTo));
  tasks.createdByUser = users.find(temp => temp.id == tasks.createdBy);
  tasks.taskStatusDetails = taskStatusDetails.filter(temp => temp.taskID == tasks.taskID);

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
exports.searchBytaskID = searchBytaskID;
exports.updateTaskStatus = updateTaskStatus;
