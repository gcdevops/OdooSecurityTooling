var Page = require('./basePage');
const locator = require('../utils/locator');
const credentials = require('../utils/credentials');
const webdriver = require("selenium-webdriver");

const usernameInputSelector = locator.usernameInputId;
const passwordInputSelector = locator.passwordInput;
const submitSelectorBtn = locator.submitBtn;
const searchSelector = locator.search;
const navSelector = locator.navigation
const employeePageSelector = locator.employeesBtn;

let submitBtn, navMenu, employeesBtn, searchField, selectEmployee, editBtn, emailField, saveBtn;

Page.prototype.findInputAndButton = async function () {
    await this.findById(usernameInputSelector);
    await this.findById(passwordInputSelector);
    submitBtn = await this.findByClassName(submitSelectorBtn);
};

Page.prototype.submitBtnAndLogIn = async function(){
    await this.findInputAndButton();
    await this.write(usernameInputSelector, credentials.username);
    await this.write(passwordInputSelector, credentials.password);
    return await submitBtn.click();
}

Page.prototype.navigateEmployeePage = async function () {
    // navMenu = await driver.wait(webdriver.until.elementLocated(webdriver.By.css(navSelector), 5000));
    navMenu = await this.findByCss(navSelector);
    employeesBtn = await this.findByCss(employeePageSelector);
    await navMenu.click();
    await employeesBtn.click();
};

Page.prototype.selectEmployee = async function(){
    await this.navigateEmployeePage();
    searchField = await this.findByCss(searchSelector);
    await driver.findElement(webdriver.By.css(searchSelector)).sendKeys('Smith, Brad\n');
    selectEmployee = await this.findByCss(locator.selectEmployee);
    await selectEmployee.click();
}

Page.prototype.editEmployee = async function(){
    await this.selectEmployee();
    editBtn = await this.findByCss(locator.editBtn);
    await editBtn.click();
    //Fields won't accept values
    // emailField = await this.findByCss(locator.emailField);
    // await driver.findElement(webdriver.By.css(emailField)).sendKeys('Brad@example.com');
    saveBtn = await this.findByCss(locator.saveBtn);
    await saveBtn.click();
}
module.exports = Page;