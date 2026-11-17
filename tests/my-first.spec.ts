import { test, expect } from "@playwright/test";

test("мій перший тест на TypeScript", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});

