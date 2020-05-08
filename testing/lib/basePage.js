const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;
const proxy = require('selenium-webdriver/proxy');

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

let o = new chrome.Options();
o.addArguments('disable-infobars');
o.setUserPreferences({ credential_enable_service: false });


var Page = function() {

    if (process.env.SECURITY_MODE === 'true') {
        this.driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .setProxy(proxy.manual({http: 'localhost:8888'},{https: 'localhost:8888'}))
        .build();
    } else {
        this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    }

    this.baseUrl = function() {
        if (process.env.SECURITY_MODE === 'true') {
            return "http://odoo:8069";
        } else {
            return "http://localhost:8069";
        }
    }

    // visit a webpage
    this.visit = async function(theUrl) {
        return await this.driver.get(this.baseUrl() + theUrl);
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