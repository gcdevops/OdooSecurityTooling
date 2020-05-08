var Page = require('./basePage');
const locator = require('../utils/locator');
const credentials = require('../utils/credentials');
const webdriver = require("selenium-webdriver");

const usernameInputSelector = locator.usernameInputId;
const passwordInputSelector = locator.passwordInput;
const submitSelectorBtn = locator.submitBtn;

let nameInput, pswdInput, submitBtn;

Page.prototype.findInputAndButton = async function () {
    nameInput = await this.findById(usernameInputSelector);
    pswdInput = await this.findById(passwordInputSelector);
    submitBtn = await this.findByClassName(submitSelectorBtn);
};

Page.prototype.submitBtnAndLogIn = async function(){
    await this.findInputAndButton();
    await this.write(usernameInputSelector, credentials.username);
    await this.write(passwordInputSelector, credentials.password);
    await submitBtn.click();
}

module.exports = Page;