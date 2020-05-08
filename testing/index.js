const webdriver = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

  async function example() {
    let driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

    try {
      await driver.get("localhost:8069/web/login");
      await driver.findElement(webdriver.By.id("login")).sendKeys("jd@example.com");  
      await driver.findElement(webdriver.By.id("password")).sendKeys("password");
      await driver.findElement(webdriver.By.className("btn")).click();
    } finally {
       await driver.getTitle();
    }
    
}

example();