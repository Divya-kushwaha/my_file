import { test, expect } from '@playwright/test';

// handle alert dialog
test('Verify Alert', async ({ page }) => {
    await page.goto('http://autopract.com/selenium/alert5/');
   

    //page.close();

    page.on('dialog', async (dialog: any) => {
        // Verify type of dialog
        expect(dialog.type()).toContain('alert');

        // verify message of alert
        expect(dialog.message()).toContain('This is an Alert Box.');

        // click on alert ok button
        await dialog.accept();
    });
    await page.locator ("//button[@id='alert-button']").click();

    // Click on Trigger an alert button
    await page.click('#alert-button');

    // Verify Message displayed after clicking on ok button
    await expect(page.locator('#msg')).toHaveText('You clicked on Ok button.')
});

// handle confirmation dialog
test('Verify Confirm Dialog OK', async ({ page }) => {
    await page.goto('http://autopract.com/selenium/alert5/');

    page.on('dialog', async (dialog: any) => {
        // Verify type of dialog
        expect(dialog.type()).toContain('confirm');

        // Verify Dialog Message
        expect(dialog.message()).toContain('Do you want to save changes?');

        // Click on OK Button
        await dialog.accept();
    });

    // Click on Trigger a Confirmation button
    await page.click('#confirm-button');

    // Verify message displayed after clicking on OK button
    await expect(page.locator('#msg')).toHaveText('Data saved successfully!')
});

// handle prompt dialog
test('Accept Value in Prompt', async ({ page }) => {
    await page.goto('http://autopract.com/selenium/alert5/');

    page.on('dialog', async (dialog: any) => {
        // Verify Dialog Type is prompt  
        expect(dialog.type()).toContain('prompt');

        // Verify Dialog Message  
        expect(dialog.message()).toContain('Please enter any number');

        // Verify Default Input Value
        expect(dialog.defaultValue()).toContain('10');

        // Click on OK Button with any value
        await dialog.accept('15');
    });

    // Click on Prompt Button
    await page.click('#prompt-button');

    // Verify Message after clicking on Ok button
    await expect(page.locator('#msg')).toHaveText('You have entered number: 15')
});
