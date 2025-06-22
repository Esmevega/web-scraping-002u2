const XLSX = require("xlsx");

function Excel(data, path = "articulos.xlsx") {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, "Articulos");
  XLSX.writeFile(wb, path);
}

module.exports = Excel;
