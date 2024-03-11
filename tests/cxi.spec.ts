import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.cxnovelvox.com/cxinfinity/');
  await page.goto('https://qa.cxnovelvox.com/cxinfinity/#/');
  await page.goto('https://qa.cxnovelvox.com/UserManagement-0.1/login?redirectURL=https://qa.cxnovelvox.com/cxinfinity/&pbky=MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAuX2Hb9W6IPw3IRnklQvdHgsWbZKuBy6kL5%2Bcc3mOaJhS12lCdal0IDKGD%2FESt7jQa8U%2BEv7qQYhLLPeD5aaaykawv%2FPk87O4YeiDVwPj4eij5Pu0OiFm0BmFCbX0LnmGwc0Thi2%2BzwfW3B6HNokYQfH67rPCdGJ61lIuS1aiSNrMPqHjID0RJbhN8SmFi9SfcMc%2BeR4F4nebgN5rC2u56fkHtbVktKMEDuXZuTNORaBhUUwraeF0cErbDevcs0C3Yj718rAZoaxNHbgv4YDuaXhnvGKJinM8aUjXk5HKz6afIXO1kyrVHWR37fy722RyoGnCGlEHjrfcwGo7aJYa66b6jNfryO02cdOeDe5VzDMZQTliP7NPx5O5wyJIdEuuU4nfJjnFvwaXVzaY%2FIdjz%2B0f3rcYQEUFhOBaY4Py6lALbgU%2FQpJtjOcwOXI4ccB8TWELtljdiSqWf9crWP7B%2FglzbrE4Rc05oi5x1rtHSSgKy%2BSenbcySsFeZKKC%2FllLUsGYNfDpeo0oM5wIuFWV7MR3OOwBfZ4RTCTCDFk8eqmhYiyePJvUfZ0wEp0T8m1pnph4l6w1i%2FjJyBKvu1amRRDPDEdZoBnUAdW3U1p%2B%2BOPQHOBTY0SPKdJDapPK8xaQG3itnccRX0r%2FBwFMalpeQIhntGHpDLMENh7c4aKIakECAwEAAQ%3D%3D');
  await page.getByPlaceholder('username').click();
  await page.getByPlaceholder('username').fill('meet001');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').press('CapsLock');
  await page.getByPlaceholder('Password').fill('T');
  await page.getByPlaceholder('Password').press('CapsLock');
  await page.getByPlaceholder('Password').fill('Test@1234');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('link', { name: 'The main module to configure CXI enviroment. Provides User, Queues, Skill, Chat' }).getByRole('button').click();
  await page.locator('a').filter({ hasText: '.st0{fill:#90A0B7;}' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Page' }).click();
  await page.getByText('DefaultPage_Meet001 delete').click();
  await page.getByRole('textbox', { name: 'Page URL' }).click({
    clickCount: 3
  });
  await page.getByRole('textbox', { name: 'Page URL' }).click({
    clickCount: 3
  });
  await page.getByRole('textbox', { name: 'Page URL' }).press('Control+c');
  await page1.goto('https://qa.cxnovelvox.com/customers/DefaultPage_Meet001.html');
  await page.locator('a').filter({ hasText: '.st1{fill:#061b46;}' }).first().click();
  await page.getByRole('menuitem', { name: 'User' }).click();
  await page.getByRole('cell', { name: 'max test' }).click();
  await page.locator('mat-row:nth-child(70) > mat-cell:nth-child(3)').click();
  await page.getByPlaceholder('Enter Password').nth(1).click();
  await page.getByPlaceholder('Enter Password').nth(1).press('CapsLock');
  await page.getByPlaceholder('Enter Password').nth(1).fill('T');
  await page.getByPlaceholder('Enter Password').nth(1).press('CapsLock');
  await page.getByPlaceholder('Enter Password').nth(1).fill('Test@1234');
  await page.locator('lib-input').filter({ hasText: 'Confirm Password' }).getByPlaceholder('Enter Password').click();
  await page.locator('lib-input').filter({ hasText: 'Confirm Password' }).getByPlaceholder('Enter Password').press('CapsLock');
  await page.locator('lib-input').filter({ hasText: 'Confirm Password' }).getByPlaceholder('Enter Password').fill('T');
  await page.locator('lib-input').filter({ hasText: 'Confirm Password' }).getByPlaceholder('Enter Password').press('CapsLock');
  await page.locator('lib-input').filter({ hasText: 'Confirm Password' }).getByPlaceholder('Enter Password').fill('Test@1234');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});