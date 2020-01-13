
import { $, ElementFinder, element, by, browser, protractor, Key } from "protractor";

export class Google_HomePage {
    public img_googleLogo: ElementFinder = $("#hplogo");
    public txt_googleSearch: ElementFinder = element(by.css("input[name='q']"));
    public btn_googleSearch: ElementFinder = element(by.css("input[aria-label='Google Search']"));
    public lnk_backToHome: ElementFinder = element(by.css("a[title='Go to Google Home']"));

    public async searchGoogle(searchText: string) {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.visibilityOf(this.img_googleLogo), 10000);
        await this.txt_googleSearch.sendKeys(searchText + Key.ENTER);

    }
    public async getNoResults(): Promise<number> {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.elementToBeClickable(this.lnk_backToHome), 10000);
        let noOfSearchResults = await element.all(by.css("div.r")).asElementFinders_();
        return noOfSearchResults.length;
    }

    public async waitForPageUrlToLoad() {
        let EC = protractor.ExpectedConditions
        await browser.wait(EC.urlContains("google"), 20000, "Google is not loaded")
    }
}