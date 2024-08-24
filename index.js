const puppeteer = require('puppeteer');
const $ = require('cheerio');
const CronJob = require('cron').CronJob;
const nodemailer = require('nodemailer');

const url = "https://www.ebay.com/sch/i.html?_from=R40&_nkw=bmw+m5&_sacat=0&_odkw=bmw&_osacat=0"

