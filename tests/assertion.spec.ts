
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://paytm.com/');
    await page.getByRole('link', { name: 'Paytm for Consumer' }).click();
    await page.locator('div').filter({ hasText: /^Ticket booking$/ }).locator('div').click();
    await page.getByRole('link', { name: 'Flight Tickets', exact: true }).click();