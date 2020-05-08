const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

let o = new chrome.Options();
o.addArguments('disable-infobars');
o.setUserPreferences({ credential_enable_service: false });


var Page = function() {
    this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

    // visit a webpage
    this.visit = async function(theUrl) {
        return await this.driver.get(theUrl);
    };

    // quit current session
    this.quit = async function() {
        return await this.driver.quit();
    };

    // wait and find a specific element with it's id
    this.findById = async function(id) {
        return await this.driver.findElement(webdriver.By.id(id));
    };

    // wait and find a specific element with it's name
    this.findByName = async function(name) {
        return await this.driver.findElement(webdriver.By.name(name));
    };

    this.findByClassName = async function(c) {
        return await this.driver.findElement(webdriver.By.className(c));
    };

    // fill input web elements
    this.write = async function (el, txt) {
        return await this.driver.findElement(webdriver.By.id(el)).sendKeys(txt);
    };
};

module.exports = Page;