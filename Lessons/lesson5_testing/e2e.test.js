import puppeteer from 'puppeteer';
import { test, expect } from "vitest";
// import { JSDOM } from "jsdom";

test('button clicked', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('file:///Users/valerialukovkina/Desktop/OTUS/Lessons/lesson5_testing/index.html');

    const button = await page.$('#btn');
    expect(button).toBeDefined();

    let text = await page.evaluate((btn) => btn.innerText, button);
    expect(text).toBe('Clicked 0 times')

    await button.click();

    text = await page.evaluate((btn) => btn.innerText, button);
    expect(text).toBe('Clicked 1 times')

    browser.close();
})