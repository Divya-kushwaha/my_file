import { test, expect } from '@playwright/test';
import { LoginPage } from './page/Loginpage';

test('Loginpage using DOM', async ({ page }) => {
    await page.goto('https://qa.cxnovelvox.com/cxinfinity/');
    const loginpage = new LoginPage(page);
    await page.close();

    await loginpage.enterUserName("lnr01");
    await loginpage.enterpassword("Test@1234");
    await loginpage.clcikLoginButton();    

    /*await expect(page).toHaveScreenshot();

    await page.locator('//input[@placeholder="username"]').fill("meet001");
    await page.locator('//input[@placeholder="Password"]').fill("Test@1234");
    await page.locator('//button[@id="login-btn"]').click();
    await page.locator("(//button[contains(text(),'Launch')])[1]").click();

    await page.locator("//input[@placeholder='Enter First Name']").fill("kiyara");
    await page.locator("input[class='controlInput leftDir ng-pristine ng-valid ng-touched']").fill("Test@1234");
    await page.locator("//lib-input[@class='ng-pristine ng-touched']//input[@placeholder='Enter Password']").fill("Test@1234");

    // Team dropdown selection
    await page.selectOption("(//select[@id='dropdown'])[3]", {
        value: "connect_team"
    });

    // Role dropdown selection by label
    await page.selectOption("(//select[@id='dropdown'])[4]", {
        label: "Product"
    });

    // Role dropdown selection by index
    await page.selectOption("(//select[@id='dropdown'])[4]", {
        index: 1
    });*/

});
