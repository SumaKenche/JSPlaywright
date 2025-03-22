import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/loginPage';

// Wikipedia login credentials (replace with valid credentials for testing)
const username = 'Jsplayground';
const password = 'Happy2Code';

// Wikipedia articles to be used for the test
const article1 = 'Gen AI';
const article2 = 'Hawaii';
let firstArticle;
let secondArticle;

async function loginToWikipedia(page, username, password) {

    const Login = new LoginPage(page);
    await Login.gotoLoginPage();
    await Login.login(username, password);
    /*
    // Navigate to Wikipedia login page
    await page.goto('https://en.wikipedia.org/w/index.php?title=Special:UserLogin');
    await page.fill('#wpName1', username);
    await page.fill('#wpPassword1', password);
    await page.click('#wpLoginAttempt');
    await expect(page).toHaveURL(/.*Main.*Page.*///);

}
test.describe.serial('Wikipedia Watchlist Tests', () => {
    test('Add two pages to your watchlist', async ({ page }) => {
        try {
            // Navigate to Wikipedia login page
            await loginToWikipedia(page, username, password);



            //Add first article to the watchlist

            await page.fill('.cdx-text-input__input', article1);
            await page.click('.cdx-button.cdx-search-input__end-button');
            await page.waitForTimeout(2000);
            //get the page title
            firstArticle = await page.locator('.mw-page-title-main').first().innerText();
            //click star button
            await page.click('.vector-icon.mw-ui-icon-wikimedia-star');


            //Add second article to the watchlist
            await page.fill('.cdx-text-input__input', article2);
            await page.click('.cdx-button.cdx-search-input__end-button');
            await page.waitForTimeout(2000);
            //get the page title
            secondArticle = await page.locator('.mw-page-title-main').first().innerText();
            //click star button
            await page.click('.vector-icon.mw-ui-icon-wikimedia-star');


            console.log('Successfully added two pages to watchlist');
        } catch (error) {
            console.error('Failed to add two pages to watchlist:', error);
            throw error;
        }

    });

    test('Removes one of the articles from your watchlist', async ({ page }) => {
        try {
            // Navigate to Wikipedia login page
            await loginToWikipedia(page, username, password);
            // goto watch list
            await page.click('.vector-icon.mw-ui-icon-watchlist.mw-ui-icon-wikimedia-watchlist');
            // go to view and edit watchlist
            await page.click('#ca-special-specialAssociatedNavigationLinks-link-1');
            //Selecting first article checkbox
            const element = await page.locator('#ooui-php-8 div div label:nth-of-type(1) span:nth-of-type(1) input');
            await element.click();
            //click Remove from list button
            const element2 = await page.locator('.oo-ui-inputWidget-input.oo-ui-buttonElement-button');
            await element2.scrollIntoViewIfNeeded();
            await element2.click();
            console.log('Successfully removed first article from watchlist');
        }
        catch (error) {
            console.error('Failed to remove first article from watchlist :', error);
            throw error;
        }
    });
    test('Makes sure that the second article is still present in the watchlist', async ({ page }) => {
        try {
            // Navigate to Wikipedia login page
            await loginToWikipedia(page, username, password);
            // goto watch list
            await page.click('.vector-icon.mw-ui-icon-watchlist.mw-ui-icon-wikimedia-watchlist');
            // go to view and edit watchlist
            await page.click('#ca-special-specialAssociatedNavigationLinks-link-1');
            // Go to the watchlist and verify the second article is still present
            // goto watch list
            await page.click('#ca-special-specialAssociatedNavigationLinks-link-1');
            const remainingArticleTitle = await page.locator('#ooui-php-7 > div > div > label > span:nth-of-type(2) > a').innerText();
            expect(remainingArticleTitle).toBe(secondArticle);
            console.log('Second article present in watchlist');
        }
        catch (error) {
            console.error('Second article not present in watchlist :', error);
            throw error;
        }
    });
    test('Goes to the article in the watchlist and makes sure that the title matches', async ({ page }) => {
        try {
            // Navigate to Wikipedia login page
            await loginToWikipedia(page, username, password);
            // goto watch list
            await page.click('.vector-icon.mw-ui-icon-watchlist.mw-ui-icon-wikimedia-watchlist');
            // go to view and edit watchlist
            await page.click('#ca-special-specialAssociatedNavigationLinks-link-1');
            //Visit the second article and verify the title
            await page.click('#ooui-php-7 > div > div > label > span:nth-of-type(2) > a');
            const articleNew = await page.locator('.mw-page-title-main').first().innerText();
            expect(articleNew).toBe(secondArticle);
            console.log('Successfully navigated to second article with matching title');
        }
        catch (error) {
            console.error('Failed to navigate to second article or title doesn\'t match :', error);
            throw error;
        }
    });
});
