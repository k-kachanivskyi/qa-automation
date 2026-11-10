import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";

test("успішний логін через POM", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("tomsmith", "SuperSecretPassword!");

  await expect(page.getByText("You logged into a secure area!")).toBeVisible();
});
