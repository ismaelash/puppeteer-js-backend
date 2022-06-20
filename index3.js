// Get a screenshot of page
const puppeteer = require("puppeteer");

async function main() {
  const URL_SCREENSHOT =
    "https://www.kabum.com.br/produto/102652/mouse-gamer-sem-fio-logitech-g903-lightspeed-rgb-lightsync-design-ambidestro-personalizavel-hero-25k-compativel-powerplay-910-005671?gclid=CjwKCAjwyryUBhBSEiwAGN5OCO0XSDAdDecZDkkL-xvwsociBPo2PLajvtF-En7KPKbksRyxsB4kxRoCDlgQAvD_BwE";

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL_SCREENSHOT, {
    waitUntil: "load",
    timeout: 0,
  });
  setTimeout(async () => {
    await page.evaluate(`document.querySelector('header').remove()`);
    await page.screenshot({ path: "product.png" });
    await browser.close();
  }, 1000);
}

main();
