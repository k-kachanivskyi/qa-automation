import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("логін через POM на TypeScript", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("tomsmith", "SuperSecretPassword!");

  await expect(page.getByText("You logged into a secure area!")).toBeVisible();
});