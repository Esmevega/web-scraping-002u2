const fs = require("fs");

function Txt(data, path = "articulos.txt") {
  const text = data.map(a =>
    `Título: ${a.title}\nResumen: ${a.summary}\nAutor: ${a.author}\nFecha: 
    ${a.date}\nURL: ${a.url}\nImagen: ${a.image}\n\n`
  ).join("");
  fs.writeFileSync(path, text, "utf-8");
}

module.exports = Txt;
