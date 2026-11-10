import { test, expect } from "@playwright/test";

test("клік по Get started", async ({ page }) => {
  // 1. Відкрити сайт
  await page.goto("https://playwright.dev/");

  // 2. Знайти посилання "Get started" і клікнути
  await page.getByRole("link", { name: "Get started" }).click();

  // 3. Перевірити, що з'явився заголовок "Installation"
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});
