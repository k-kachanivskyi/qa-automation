import { test, expect } from "@playwright/test";

test("GET запит — отримати користувача", async ({ request }) => {
  // 1. Відправити GET-запит на сервер
  const response = await request.get("https://reqres.in/api/users/2");

  // 2. Перевірити, що статус-код 200 (успіх)
  expect(response.status()).toBe(200);

  // 3. Отримати дані з відповіді (у форматі JSON)
  const body = await response.json();

  // 4. Перевірити, що в даних є потрібний користувач
  expect(body.data.id).toBe(2);
});

test("POST запит — створити користувача", async ({ request }) => {
  // Відправити POST-запит з даними нового користувача
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "Kostiantyn",
      job: "QA Automation Engineer",
    },
  });

  // Перевірити, що статус 201 (Created — щось успішно створено)
  expect(response.status()).toBe(201);

  // Перевірити, що сервер повернув ті дані, які ми надіслали
  const body = await response.json();
  expect(body.name).toBe("Kostiantyn");
  expect(body.job).toBe("QA Automation Engineer");
});

test("PUT запит — оновити користувача", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    data: {
      name: "Kostiantyn",
      job: "Senior QA Engineer",
    },
  });

  // PUT повертає 200 (OK), а не 201 — бо оновлюємо, а не створюємо
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.job).toBe("Senior QA Engineer");
});
test("DELETE запит — видалити користувача", async ({ request }) => {
  const response = await request.delete("https://reqres.in/api/users/2");

  // DELETE зазвичай повертає 204 (No Content — видалено, повертати нічого)
  expect(response.status()).toBe(204);
});
test("GET неіснуючого користувача — 404", async ({ request }) => {
  // Користувача з таким номером не існує
  const response = await request.get("https://reqres.in/api/users/99999");

  // Сервер МАЄ відповісти 404 (Not Found)
  expect(response.status()).toBe(404);
});
