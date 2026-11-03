/* function sayHello() {
  console.log("Привіт, автоматизаторе!");
}

sayHello();
sayHello();
sayHello();
sayHello();

function greet(name) {
  console.log("Привіт, " + name + "!");
}

greet("Іван");
greet("Марія");
greet("Олег");

function isAdult(age) {
  return age >= 18;
}

console.log(isAdult(20));
console.log(isAdult(15));

if (isAdult(20)) {
  console.log("✅ Доступ дозволено");
} else {
  console.log("❌ Доступ заборонено");
} */

function isPasswordStrong(password) {
  return password.length >= 8;
}

console.log(isPasswordStrong("abc")); // false
console.log(isPasswordStrong("superSecret123")); // true

if (isPasswordStrong("342343432")) {
  console.log("✅ Пароль надійний");
} else {
  console.log("❌ Пароль слабкий");
}
