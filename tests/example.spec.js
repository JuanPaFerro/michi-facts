// @ts-check
import { test, expect } from "@playwright/test";

const LOCALHOST_URL = "http://localhost:5173/";
const IMAGES_URL_PREFIX = "https://cataas.com/";

test("app shows random fact and image", async ({ page }) => {
    await page.goto(LOCALHOST_URL);

    const text = await page.getByRole("paragraph");
    const image = await page.getByRole("img");

    const textContent = await text.textContent();
    const imgSrc = await image.getAttribute("src");

    await expect(textContent?.length).toBeGreaterThan(0);
    await expect(imgSrc?.startsWith(IMAGES_URL_PREFIX)).toBeTruthy();
});

test("app refreshes fact and image when user clicks the button", async ({ page }) => {
    await page.goto(LOCALHOST_URL);

    const text = await page.getByRole("paragraph");
    const image = await page.getByRole("img");
    const button = await page.getByRole("button");

    const initialTextContent = await text.textContent();
    const initialImgSrc = await image.getAttribute("src");

    await button.click();
    await page.waitForTimeout(2000);

    const updatedTextContent = await text.textContent();
    const updatedImgSrc = await image.getAttribute("src");

    await expect(initialTextContent === updatedTextContent).toBeFalsy();
    await expect(initialImgSrc === updatedImgSrc).toBeFalsy();
});
