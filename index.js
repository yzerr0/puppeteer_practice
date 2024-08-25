const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const CronJob = require('cron').CronJob;
const nodemailer = require('nodemailer');

const url = "https://www.ebay.com/sch/i.html?_from=R40&_nkw=bmw+m5&_sacat=0&_odkw=bmw&_osacat=0"

async function configureBrowser() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    return page;
}

async function checkPrice(page) {
    await page.reload();
    let html = await page.evaluate(() => document.body.innerHTML);
    const $ = cheerio.load(html);
    /*
    $('s-item').each(() => {
        let title = $(this).find('s-item__title').text();
        let price = $(this).find('s-item__price').text();
        console.log(title, price);
    });
    */
    let listings = $('.s-item__info').text()
    let prices = $('.s-item__price').text()
    console.log(listings);
    console.log(prices);
}

async function monitor() {
    let page = await configureBrowser();
    await checkPrice(page);
}

monitor();