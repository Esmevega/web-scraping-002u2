const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

async function scrapeMozillaHacks() {
  const browser = await puppeteer.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();

  await page.goto("https://hacks.mozilla.org/", { waitUntil: "networkidle2" });

  await new Promise(resolve => setTimeout(resolve, 5000));

  const articles = await page.evaluate(() => {
    const nodes = document.querySelectorAll("article");
    return Array.from(nodes).map(article => {
      const title = article.querySelector("h2")?.innerText.trim() || "";
      const summary = article.querySelector("p")?.innerText.trim() || "";
      const author = article.querySelector(".author")?.innerText.trim() || "";
      const date = article.querySelector("time")?.getAttribute("datetime") || "";
      const url = article.querySelector("a")?.href || "";
      const image = article.querySelector("img")?.src || null;
      return { title, summary, author, date, url, image };
    });
  });

  await browser.close();
  return articles;
}

module.exports = scrapeMozillaHacks;
