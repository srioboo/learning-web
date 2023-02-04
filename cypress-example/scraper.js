const puppet = require("puppeteer");

async function scrapper(url) {
  const browser = await puppet.launch();

  const page = await browser.newPage();

  await page.goto(url);

  const [el] = await page.$x('//*[@id="subsub02"]/div/div[4]/a[1]');
  const link = await el.getProperty("href");
  const linkData = await link.jsonValue();

  //const [el] = await page.$x('//*[@id="subsub02"]/div/div[4]/a[1]');
  const text = await el.getProperty("text");
  const rawText = await text.jsonValue();

  console.log({ linkData, rawText });

  browser.close();
}

scrapper("https://www.mayoral.com/es/espana");
