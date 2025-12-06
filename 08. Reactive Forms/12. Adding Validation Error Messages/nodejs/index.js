//express
var express = require("express");
var app = express();
var cors = require("cors");
var fs = require("fs");
var cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const jwt = require("jsonwebtoken");
var { randomBytes } = require("crypto");
var helpers = require("./helpers");
var users = require("./projects");
var clientlocations = require("./clientlocations");

app.listen(9090, startup);
function startup() {
  console.log("Server started at port 9090");
}
app.use(express.static(__dirname));

app.use(cors());

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  expressSession({
    secret: "Your_Secret_Key",
    resave: true,
    saveUninitialized: true,
  })
);

jsonfile = __dirname + "/data.json";

//jwt verification
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
}

//xsrf
function verifyXsrf(req, res, next) {
  //console.log("x-xsrf-token", req.headers["x-xsrf-token"]);
  if (!req.headers["x-xsrf-token"]) {
    res.sendStatus(401);
  }
  next();
}

//GET api/projects
app.get("/api/projects", [authenticateToken], users.getProjects);

//POST api/projects
app.post("/api/projects", [authenticateToken, verifyXsrf], users.postProjects);

//PUT api/projects
app.put("/api/projects", [authenticateToken], users.putProjects);

//DELETE api/projects
app.delete("/api/projects", [authenticateToken], users.deleteProjects);

//GET /api/projects/search/:searchby/:searchtext
app.get(
  "/api/projects/search/:searchby/:searchtext?",
  [authenticateToken],
  users.searchProjects
);

//GET /api/projects/searchbyprojectid/:ProjectID
app.get(
  "/api/projects/searchbyprojectid/:ProjectID",
  [authenticateToken],
  users.getProjectByProjectID
);

//GET api/clientlocations
app.get(
  "/api/clientlocations",
  [authenticateToken],
  clientlocations.getClientLocations
);

//POST api/clientlocations
app.post(
  "/api/clientlocations",
  [authenticateToken],
  clientlocations.postClientLocations
);

//PUT api/clientlocations
app.put(
  "/api/clientlocations",
  [authenticateToken],
  clientlocations.putClientLocations
);

//DELETE api/clientlocations
app.delete(
  "/api/clientlocations",
  [authenticateToken],
  clientlocations.deleteClientLocations
);

//POST /register
app.post("/register", function (req, res) {
  console.log(req.method, req.url);
  if (req.body.email && req.body.password) {
    users = JSON.parse(fs.readFileSync(jsonfile)).users;
    var newuser = {
      ...req.body,
      UserName: req.body.email,
      Email: req.body.email,
      Password: req.body.password,
      FirstName: req.body.firstName,
      LastName: req.body.lastName,
      Role: "Employee",
    };
    newuser.password = "";
    users.push(newuser);
    fs.writeFileSync(
      jsonfile,
      JSON.stringify({
        ...JSON.parse(fs.readFileSync(jsonfile)),
        users: users,
      }),
      "utf8"
    );
    console.log("Response: ", { ...newuser, Password: "" });
    //generate jwt token
    const token = helpers.generateAccessToken({
      userName: newuser.UserName,
      email: newuser.Email,
      role: newuser.Role,
    });

    //xsrf / csrf
    var xsrftoken = randomBytes(100).toString("base64");
    res.header("XSRF-REQUEST-TOKEN", xsrftoken);
    res.header("Access-Control-Expose-Headers", "XSRF-REQUEST-TOKEN");

    res.send(helpers.toCamel({ ...newuser, token: token, Password: "" }));
  }
  else {
    res.status(400);
    res.send({ message: "Email or Password or FirstName or LastName is blank" });
  }
});

//GET /api/getUserByEmail/:Email
app.get("/api/getUserByEmail/:Email", function (req, res) {
  console.log(req.method, req.url);
  console.log(req.params);
  users = JSON.parse(fs.readFileSync(jsonfile, "utf8")).users;
  users = users.find((project) => {
    return project["Email"] == req.params.Email;
  });
  console.log("Response: ", users);
  if (users) {
    res.send(helpers.toCamel(users));
  } else {
    res.send(users);
  }
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
    //generate jwt token
    const token = helpers.generateAccessToken({
      userName: user.UserName,
      email: user.Email,
      role: user.Role,
    });

    //xsrf / csrf
    var xsrftoken = randomBytes(100).toString("base64");
    res.header("XSRF-REQUEST-TOKEN", xsrftoken);
    res.header("Access-Control-Expose-Headers", "XSRF-REQUEST-TOKEN");

    res.send(helpers.toCamel({ ...user, token: token, password: "" }));
  }
  else {
    res.status(400);
    res.send({ message: "Username or password is incorrect" });
  }
});
