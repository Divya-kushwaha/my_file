import { test, expect } from '@playwright/test';

import asyncio 
from playwright.async_api import async_playwright 
async def vertical_scroll(): 
    async with async_playwright() as page: 
        browser = await page.chromium.launch(headless=False, slow_mo=1000) 
        page = await browser.new_page() 
        await page.goto("https://the-internet.herokuapp.com/") 
 
        #Using scroll_into_view_if_needed() 
        test = page.locator("text=Typos") 
        await test.scroll_into_view_if_needed() 
 
        #Using wheel() 
        await page.mouse.wheel(delta_x=0, delta_y=200) 
        await page.wait_for_timeout(6000) 
 
        #Using keyboard 
        await page.keyboard.press("PageDown") 
        await page.keyboard.press("PageUp") 
         
       await page.close() 
        await browser.close() 
 
asyncio.run(vertical_scroll()) 

const { webkit } = require('playwright');  // Or 'chromium' or 'firefox'.
//take screenshot
(async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();

//reload functin
page.once('load', () => console.log('Page loaded!'));


function logRequest(interceptedRequest) {
    console.log('A request was made:', interceptedRequest.url());
  }
  page.on('request', logRequest);
  // Sometime later...
  page.removeListener('request', logRequest);