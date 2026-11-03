console.log(200 === 200);
console.log(200 === 404);

let expectedStatusCode = 200; // що ми ОЧІКУЄМО (успішний вхід)
let actualStatusCode = 500; // що РЕАЛЬНО повернув сервер

console.log("Тест пройдено: " + (expectedStatusCode === actualStatusCode));

let passwordLength = 8;
console.log(passwordLength >= 8); // true

let userAge = 17;
console.log(userAge >= 18); // false

let username = "admin";
console.log(username !== ""); // true
