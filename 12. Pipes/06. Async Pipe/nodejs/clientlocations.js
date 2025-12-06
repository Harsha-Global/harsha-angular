var fs = require("fs");
var helpers = require("./helpers");
jsonfile = __dirname + "/data.json";

//GET api/clientLocations
function getClientLocations(req, res) {
  console.log(req.method, req.url);
  clientLocations = JSON.parse(
    fs.readFileSync(jsonfile, "utf8")
  ).clientLocations;
  console.log("Response: ", clientLocations);
  res.send(helpers.toCamel(clientLocations));
}

//POST api/clientLocations
function postClientLocations(req, res) {
  console.log(req.method, req.url);
  clientLocations = JSON.parse(fs.readFileSync(jsonfile)).clientLocations;
  clientLocations.push(req.body);
  console.log("Response: ", clientLocations);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      clientLocations: clientLocations,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
}

//PUT api/clientLocations
function putClientLocations(req, res) {
  console.log(req.method, req.url);
  clientLocations = JSON.parse(fs.readFileSync(jsonfile)).clientLocations;
  clientLocations = clientLocations.map((clientLocation) =>
    clientLocation.clientLocationID == req.body.clientLocationID
      ? req.body
      : clientLocation
  );
  console.log("Response: ", clientLocations);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      clientLocations: clientLocations,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
}

//DELETE api/clientLocations
function deleteClientLocations(req, res) {
  console.log(req.method, req.url);
  clientLocations = JSON.parse(fs.readFileSync(jsonfile)).clientLocations;
  clientLocations = clientLocations.filter(
    (clientLocation) =>
      clientLocation.clientLocationID != req.query.ClientLocationID
  );
  console.log("Response: ", clientLocations);
  fs.writeFileSync(
    jsonfile,
    JSON.stringify({
      ...JSON.parse(fs.readFileSync(jsonfile)),
      clientLocations: clientLocations,
    }),
    "utf8"
  );
  res.send(helpers.toCamel(req.body));
}

//GET /api/clientLocations/search/:searchby/:searchtext
function searchClientLocations(req, res) {
  console.log(req.method, req.url);
  console.log(req.params);
  clientLocations = JSON.parse(
    fs.readFileSync(jsonfile, "utf8")
  ).clientLocations;
  req.params.searchtext = (req.params.searchtext || "").toUpperCase();
  req.params.searchby = helpers.toCamelCase(req.params.searchby || "");
  console.log(req.params);
  clientLocations = clientLocations.filter((clientLocation) => {
    value = (clientLocation[req.params.searchby] || "").toUpperCase();
    return value.indexOf(req.params.searchtext) >= 0;
  });

  console.log("Response: ", clientLocations);
  res.send(helpers.toCamel(clientLocations));
}

exports.getClientLocations = getClientLocations;
exports.postClientLocations = postClientLocations;
exports.putClientLocations = putClientLocations;
exports.deleteClientLocations = deleteClientLocations;
exports.searchClientLocations = searchClientLocations;
