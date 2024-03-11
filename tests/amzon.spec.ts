import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://paytm.com/');
  await page.getByRole('link', { name: 'Paytm for Consumer' }).click();
  await page.locator('div').filter({ hasText: /^Ticket booking$/ }).locator('div').click();
  await page.getByRole('link', { name: 'Flight Tickets', exact: true }).click();
  await page.getByText('Round Trip').click();
  await page.getByText('Delhi', { exact: true }).click();
  await page.getByText('Mumbai, Maharashtra, India').click();
  await page.locator('#destCity').click();
  await page.getByText('Bangkok, Thailand').click();
  await page.getByText('Choose Date').click();
  await page.getByText('Mar’ 24').click();
  await page.locator('#flightSearch').click();
  await page.goto('https://tickets.paytm.com/flights/flightSearch/BOM-Mumbai/BKK-Bangkok/1/0/0/E/2024-02-15/2024-07-09');


  
});