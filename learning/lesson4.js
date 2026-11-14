let statusCodes = [200, 404, 200, 500, 200];

for (let code of statusCodes) {
  if (code === 200) {
    console.log("✅ " + code + " — OK");
  } else {
    console.log("❌ " + code + " — помилка сервера!");
  }
}

let passwords = ["qwerty", "superSecret123", "abc", "MyStrongPass1"];
for (let password of passwords) {
  if (password.length >= 8) {
    console.log("✅ " + password + " — надійний");
  } else {
    console.log("❌" + password + " — закороткий");
  }
}
