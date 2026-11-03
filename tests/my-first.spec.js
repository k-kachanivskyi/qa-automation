import { test, expect } from "@playwright/test";

test("мій перший тест", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page).toHaveTitle(/Playwright/);
});
