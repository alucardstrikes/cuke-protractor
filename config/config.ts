
import { browser, Config } from "protractor";
import { Reporter } from "../utils/reporter";
export const config: Config = {
  // set to "custom" instead of cucumber.
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  framework: 'custom',
  baseUrl: "http://google.com",
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    browserName: 'firefox',
    acceptInsecureCerts: true,
  },

  // require feature files
  specs: [
    '../../features/*.feature' // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    tags: [],
    format: 'json:reports/json/cuke_report.json',
    require: [
      "../../typeScript/features/step_definitions/*.js", "../../typeScript/features/support/*.js"
    ]
  },

  onPrepare: function () {
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(5000);
    browser.manage().timeouts().pageLoadTimeout(100000);
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
  },
  onComplete: () => {
    Reporter.createHTMLReport();
  }
};