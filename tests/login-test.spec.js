import { test, expect } from "@playwright/test";

test("успішний логін", async ({ page }) => {
  // 1. Відкрити сторінку логіна
  await page.goto("https://the-internet.herokuapp.com/login");

  // 2. Ввести логін у поле Username
  await page.getByLabel("Username").fill("tomsmith");

  // 3. Ввести пароль у поле Password
  await page.getByLabel("Password").fill("SuperSecretPassword!");

  // 4. Натиснути кнопку Login
  await page.getByRole("button", { name: "Login" }).click();

  // 5. Перевірити, що залогінились (з'явилось повідомлення про успіх)
  await expect(page.getByText("You logged into a secure area!")).toBeVisible();
});

test("невдалий логін з неправильним паролем", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  await page.getByLabel("Username").fill("tomsmith");
  await page.getByLabel("Password").fill("неправильний_пароль");

  await page.getByRole("button", { name: "Login" }).click();

  // Перевіряємо, що з'явилось повідомлення про ПОМИЛКУ
  await expect(page.getByText("Your password is invalid!")).toBeVisible();
});
