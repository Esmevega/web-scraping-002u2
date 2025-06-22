const fs = require("fs");
const { Parser } = require("json2csv");

function Csv(data, path = "articulos.csv") {
  const parser = new Parser();
  const csv = parser.parse(data);
  fs.writeFileSync(path, csv, "utf-8");
}

module.exports = Csv;

