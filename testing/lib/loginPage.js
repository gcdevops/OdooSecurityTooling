var Page = require('./basePage');
const locator = require('../utils/locator');
const credentials = require('../utils/credentials');
const webdriver = require("selenium-webdriver");

const usernameInputSelector = locator.usernameInputId;
const passwordInputSelector = locator.passwordInput;
const submitSelectorBtn = locator.submitBtn;
const dropdownSelector = locator.dropdown;
const employeeSelector = locator.employeesBtn;

let submitBtn;

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
    await this.visit("http://localhost:8069/web#action=137&model=hr.employee&view_type=list&cids=&menu_id=95");
};

Page.prototype.editEmployee = async function(){
    console.log('Fix me');
    /**
     * Edit Employee not working
     * no such element: Unable to locate element:
     */
     
    // await this.findByClassName(dropdownSelector);
    // await this.findByCss(employeeSelector);
}

module.exports = Page;