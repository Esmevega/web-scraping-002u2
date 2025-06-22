const getArticlesFromRSS = require("./src/Scraping");
const Json = require("./src/json");
const Csv = require("./src/Csv");
const Excel = require("./src/Excel");
const Txt = require("./src/Txt");
const Pdf = require("./src/Pdf");

(async () => {
  const data = await getArticlesFromRSS();
  console.log(data);
  console.log("Artículos extraídos:", data.length);

  Json(data);
  Csv(data);
  Excel(data);
  Txt(data);
  Pdf(data);
})();
