const {Given, Then, When, Before} = require('@cucumber/cucumber');

Given(/^I navigate to (.*)$/, function(url) {
  return browser.navigateTo(url);
});

Given(/^I login with ([a-zA-Z]*) user and ([a-zA-Z0-9]*) password$/, function (username, password) {
  browser.element.findByText('Sign In').click();

  browser.waitForElementVisible('div[id=username]');
  browser.element.find('div[id=username]').find('input').sendKeys(username + '\n');
  browser.waitForElementVisible('div[id=password]');
  browser.element.find('div[id=password]').find('input').sendKeys(password + '\n');

  browser.element.findByText('Log In').click();
});

Then(/^the url should contain (.*)$/, function (url_path) {
  browser.waitForElementVisible('div[class=shelf-container]');
  browser.assert.urlContains(url_path);
});

Then(/^I add (.*) to cart$/, function (item) {
  // browser.element.findByText(item);
  console.log(3);
});

Then(/^the subtotal should be ([0-9]*)$/, function (total) {
  console.log(4);
});

Then(/^I checkout the cart$/, function () {
  console.log(5);
});

Then(/^I should see (.*)$/, function (text) {
  console.log(6);
});
