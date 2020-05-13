/* global driver */
var Page = require('./basePage');
const locator = require('../utils/locator');
const credentials = require('../utils/credentials');
const webdriver = require('selenium-webdriver');

let submitBtn, navMenu, employeesBtn, selectEmployee, editBtn, saveBtn;

Page.prototype.findInputAndButton = async function () {
    await this.findById(locator.usernameInputId);
    await this.findById(locator.passwordInput);
    submitBtn = await this.findByClassName(locator.submitBtn);
};

Page.prototype.submitBtnAndLogIn = async function () {
    await this.findInputAndButton();
    await this.write(locator.usernameInputId, credentials.username);
    await this.write(locator.passwordInput, credentials.password);
    return await submitBtn.click();
}

Page.prototype.navigateEmployeePage = async function () {
    navMenu = await this.findByCss(locator.navigation);
    employeesBtn = await this.findByCss(locator.employeesBtn);
    await navMenu.click();
    await employeesBtn.click();
};

Page.prototype.selectEmployee = async function () {
    await this.navigateEmployeePage();
    await this.findByCss(locator.search);
    await driver.findElement(webdriver.By.css(locator.search)).sendKeys('Smith, Brad\n');
    selectEmployee = await this.findByCss(locator.selectEmployee);
    await selectEmployee.click();
}

Page.prototype.editEmployee = async function () {
    await this.selectEmployee();
    editBtn = await this.findByCss(locator.editBtn);
    await editBtn.click();
    //Fields won't accept values
    // await this.findByCss(locator.emailField);
    // await driver.findElement(webdriver.By.css(locator.emailField)).sendKeys('Brad@example.com');
    saveBtn = await this.findByCss(locator.saveBtn);
    await saveBtn.click();
}
module.exports = Page;