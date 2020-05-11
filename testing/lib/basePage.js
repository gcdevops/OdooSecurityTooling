const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

let o = new chrome.Options();
o.addArguments('disable-infobars');
o.setUserPreferences({ credential_enable_service: false });

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(o).build();

var Page = function() {
    global.driver = driver;

    // visit a webpage
    this.visit = async function(theUrl) {
        return await driver.get(theUrl);
    };

    // quit current session
    this.quit = async function() {
        return await driver.quit();
    };

    // wait and find a specific element with it's id
    this.findById = async function(id) {
        return await driver.findElement(webdriver.By.id(id));
    };

    // wait and find a specific element with it's name
    this.findByName = async function(name) {
        return await driver.findElement(webdriver.By.name(name));
    };

    // wait and find a specific element with it's className
    this.findByClassName = async function(c) {
        driver.wait(webdriver.until.elementLocated(webdriver.By.className(c)), 10000)
        return await driver.findElement(webdriver.By.className(c));
    };

     // wait and find a specific element with it's css selector
    this.findByCss = async function(item) {
        driver.wait(webdriver.until.elementLocated(webdriver.By.css(item)), 10000)
        return await driver.findElement(webdriver.By.css(item));
    }

    // fill input web elements
    this.write = async function (el, txt) {
        return await driver.findElement(webdriver.By.id(el)).sendKeys(txt);
    };
};

module.exports = Page;