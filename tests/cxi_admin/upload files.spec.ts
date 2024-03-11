import { test, expect } from '@playwright/test';

test('url hit action', async ({ page }) => {
  await page.goto('https://qa.cxnovelvox.com/cxinfinity/');
  //await expect(page).toHaveScreenshot();

  await page.locator('//input[@placeholder="username"]').fill("meet001");
  await page.locator('//input[@placeholder="Password"]').fill("Test@1234");
  await page.locator('//button[@id="login-btn"]').click();

  await page.waitForSelector('//button[contains(text(),"Launch")])[1]');
  await page.locator('//button[contains(text(),"Launch")])[1]').click();

  // Upload files
  const filePath = 'C:/Users/Novelvox/Downloads'; // Correct file path
  await page.locator('//button[normalize-space()="Import User"]').setInputFiles(filePath);

  // Verify success/fail message
  await expect(page.locator('xpath=//span[normalize-space()="Unable to process excel."]').innerText()).resolves.toBe('unable to process excel');
});
