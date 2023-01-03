var fs = require("fs");
var helpers = require("./helpers");
jsonfile = __dirname + "/data.json";

//GET api/countries
function getCountries(req, res) {
  console.log(req.method, req.url);
  countries = JSON.parse(fs.readFileSync(jsonfile, "utf8")).countries;
  //console.log("Response: ", countries);
  res.send(helpers.toCamel(countries));
}

exports.getCountries = getCountries;
