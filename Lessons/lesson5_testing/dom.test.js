
import { test, expect } from "vitest";
import { readFile } from "fs/promises";
import { JSDOM } from "jsdom";

test('button clicked', async () => {
    const html = await readFile('./index.html', {encoding: 'utf-8'});
    const jsDom = new JSDOM(html, {runScripts: 'dangerously'});

    const button = jsDom.window.document.getElementById('btn');
    expect(button.innerText).toBe('Clicked 0 times');
    button.click();
    expect(button.innerText).toBe('Clicked 1 times');
})