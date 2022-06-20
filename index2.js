// Verification if have a element on page
const puppeteer = require("puppeteer");

async function main() {
  const URL_WITH_ELEMENT =
    "https://www.moveisgruber.com.br/produto/cadeira-logan-em-madeira-macica-c-tela-freijo-76258";
  const URL_WITHOUT_ELEMENT =
    "https://www.moveisgruber.com.br/produto/cadeira-alnitak-em-madeira-macica-champagne-76217";

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL_WITH_ELEMENT, {
    waitUntil: "load",
    timeout: 0,
  });

  const element = await page.$(".detalhe-produto");
  console.log(element);

  if (element) {
    console.log("element found on page");
  } else {
    console.log("element not found on page");
  }
}

main();
