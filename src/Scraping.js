const Parser = require("rss-parser")
const parser = new Parser();

function extractImageFromContent(content) {
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
}

async function getArticlesFromRSS() {
  const feed = await parser.parseURL("https://hacks.mozilla.org/feed/");
  return feed.items.map(item => ({
    title: item.title,
    summary: item.contentSnippet,
    author: item.creator || item.author || "Desconocido",
    date: item.isoDate,
    url: item.link,
    image: extractImageFromContent(item["content:encoded"] || item.content || "")
  }));
}

module.exports = getArticlesFromRSS;
