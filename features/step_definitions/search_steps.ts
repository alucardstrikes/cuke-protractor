import { Given, When, Then } from "cucumber";
import { expect } from "chai";

Given('I Log into google', { timeout: 100 * 1000 }, async function () {
  await this.google_search.waitForPageUrlToLoad();
});

When('I search for {string}', { timeout: 100 * 1000 }, async function (searchString) {

  await this.google_search.searchGoogle(searchString);
});



Then('the search should give me more than {int} result', { timeout: 100 * 1000 }, async function (noOfResults) {
  let noOfResultsFound = await this.google_search.getNoResults();
  expect(noOfResultsFound).to.be.greaterThan(noOfResults, `Search returned only one or no results`);
});


