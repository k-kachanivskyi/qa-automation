function isValidStatusCode(code) {
  return code === 200;
}

console.log(isValidStatusCode(200)); // true
console.log(isValidStatusCode(404)); // false

let responses = [200, 404, 200, 500, 200, 301];

for (const code of responses) {
  if (code === 200) {
    console.log("✅ 200 — успіх");
  } else {
    console.log(`⚠️ ${code} — інший статус`);
  }
}
function isEmailValid(email) {
  return email.includes("@");
}

console.log(isEmailValid("test@mail.com")); // true
console.log(isEmailValid("broken-email.com")); // false

function isEmailValid(email) {
  return email.includes("@");
}

let emails = ["test@mail.com", "broken.com", "user@site.org", "invalid"];

for (const email of emails) {
  if (isEmailValid(email)) {
    console.log(`✅ ${email} — валідний`);
  } else {
    console.log(`❌ ${email} — невалідний`);
  }
}
