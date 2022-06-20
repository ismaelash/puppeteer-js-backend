// Verification if page is valid with status code
const puppeteer = require("puppeteer");

async function main() {
  const URL_SUCCESS =
    "https://www.moveisgruber.com.br/produto/cadeira-logan-em-madeira-macica-c-tela-freijo-76258";
  const URL_ERROR =
    "https://www.moveisgruber.com.br/produto/cadeira-alnitak-em-madeira-macica-champagne-76217";

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const response = await page.goto(URL_SUCCESS, {
    waitUntil: "load",
    timeout: 0,
  });

  console.log("status", response.ok());
  if (response.ok()) {
    console.log("page is valid");
  } else {
    console.log("page is invalid");
  }
}

main();
