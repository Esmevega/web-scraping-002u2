const PDFDocument = require("pdfkit");
const fs = require("fs");

function Pdf(data, path = "articulos.pdf") {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(path));
  data.forEach(article => {
    doc.fontSize(14).text(`Título: ${article.title}`);
    doc.fontSize(12).text(`Resumen: ${article.summary}`);
    doc.text(`Autor: ${article.author}`);
    doc.text(`Fecha: ${article.date}`);
    doc.text(`URL: ${article.url}`);
    if (article.image) doc.text(`Imagen: ${article.image}`);
    doc.moveDown();
  });
  doc.end();
}

module.exports = Pdf;
