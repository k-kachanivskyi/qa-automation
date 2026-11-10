import { test, expect } from "@playwright/test";

test("робота з чекбоксами", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/checkboxes");

  // Знайти перший чекбокс
  const firstCheckbox = page.getByRole("checkbox").first();

  // Позначити його
  await firstCheckbox.check();

  // Перевірити, що він позначений
  await expect(firstCheckbox).toBeChecked();
});

test("вибір зі списку", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");

  // Знайти випадний список
  const dropdown = page.getByRole("combobox");

  // Вибрати опцію за текстом
  await dropdown.selectOption("Option 2");

  // Перевірити, що вибрано саме Option 2
  await expect(dropdown).toHaveValue("2");
});

test("перевірка тексту заголовка", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");

  // Знайти заголовок і перевірити його текст
  await expect(
    page.getByRole("heading", { name: "Welcome to the-internet" }),
  ).toBeVisible();
});
