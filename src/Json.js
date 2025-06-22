const fs = require("fs");

function Json(data, path = "articulos.json") {
  fs.writeFileSync(path, JSON.stringify(data, null, 2), "utf-8");
}

module.exports = Json;
