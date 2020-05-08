const {describe, it, after, before } = require('mocha');


const Page = require('../lib/loginPage');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => {});

(async function example() {
  try {
      describe('Log in Page', async function () {
          this.timeout(50000);
          let driver, page;

          beforeEach(async () => {
              page = new Page();
              driver = page.driver;
              await page.visit('/web/login');
          });

          afterEach(async () => {
              await page.quit();
          });

          it('find the input box and log in button', async () => {
              const result = await page.findInputAndButton();
              console.log(result);
          });

          it('add username, password and click login button', async () => {
              const result2 = await page.submitBtnAndLogIn();
              console.log(result2);
          });
      });
  } catch (ex) {
      console.log (new Error(ex.message));
  } finally {

  }
})();