import { test, expect } from '@playwright/test';

// handle alert dialog
test('Verify Alert', async ({ page }) => {
    await page.goto('http://autopract.com/selenium/alert5/');
   await page.locator ("//button[@id='alert-button']").click();
   page.pause();
})