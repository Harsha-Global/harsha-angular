const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

function toCamel(o) {
  var newO, origKey, newKey, value;
  if (o instanceof Array) {
    return o.map(function (value) {
      if (typeof value === "object") {
        value = toCamel(value);
      }
      return value;
    });
  } else {
    newO = {};
    for (origKey in o) {
      if (o.hasOwnProperty(origKey)) {
        newKey = (
          origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey
        ).toString();
        value = o[origKey];
        if (value) {
          if (
            value instanceof Array ||
            (value !== null && value.constructor === Object)
          ) {
            value = toCamel(value);
          }
          newO[newKey] = value;
        }
      }
    }
  }
  return newO;
}

function toCamelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

function generateAccessToken(userData) {
  return jwt.sign(userData, process.env.TOKEN_SECRET, { expiresIn: "18000s" });
}

exports.toCamel = toCamel;
exports.toCamelCase = toCamelCase;
exports.generateAccessToken = generateAccessToken;
