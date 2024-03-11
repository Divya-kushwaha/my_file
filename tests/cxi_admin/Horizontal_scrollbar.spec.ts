import { test, expect } from '@playwright/test';

import asyncio 
from playwright.async_api import async_playwright 
async def vertical_scroll(): 
    async with async_playwright() as page: 
        browser = await page.chromium.launch(headless=False, slow_mo=1000) 
        page = await browser.new_page() 
 
        await page.goto("https://demo.guru99.com/test/guru99home/scrolling.html") 
        horizontal = page.locator("text=VBScript") 
        await horizontal.scroll_into_view_if_needed() 
        await page.wait_for_timeout(6000) 
 
        await page.close() 
        await browser.close() 
 
asyncio.run(vertical_scroll())