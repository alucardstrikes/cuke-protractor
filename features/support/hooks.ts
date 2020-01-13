import {  After, Status ,Before } from "cucumber";
import {  browser } from "protractor";
import { config } from "../../config/config";
import {setWorldConstructor,World} from "cucumber";
Before({ timeout: 100 * 2000 }, async () => {
    await browser.get(config.baseUrl);
});


After({ timeout: 100 * 1000 }, async function (scenario) {
  
    if (scenario.result.status === Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
    
        this.attach(screenShot, "image/png");
        
        // Log the spec to the console for protractor-flake to be able to rerun the failed specs
        console.log('Specs:', scenario.sourceLocation.uri);
    }
    return Promise.resolve();

});