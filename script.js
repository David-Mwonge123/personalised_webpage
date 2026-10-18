const form = document.getElementById("userForm");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const greetingSection = document.getElementById("greetingSection");
const greeting = document.getElementById("greeting");
const ageInMonths = document.getElementById("ageInMonths");
const adultMessage = document.getElementById("adultMessage");
const quotes = document.getElementById("quotes");
const clearBtn = document.getElementById("clearBtn");

function calculateAgeInMonths(age) {
  return age * 12;
}
function displayUserInfo(name, age) {
  greetingSection.style.display = "block";

  greeting.textContent = `Hello, ${name}! Welcome back!`;

  const months = calculateAgeInMonths(age);
  ageInMonths.textContent = `You are ${age} years old, which is ${months} months old!`;

  if (age >= 18) {
    adultMessage.textContent = "You are 18+ : You can access adult content.";
    adultMessage.style.color = "green";
  } else {
    adultMessage.textContent =
      "You are too young for adult content. Come back when you turn 18!";
    adultMessage.style.color = "red";
  }
}
function showQuotes() {
  const quote = "Believe in yourself - Every expert was once a beginner!";
  quotes.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const p = document.createElement("p");
    p.textContent = `${i}. ${quote}`;
    quotes.appendChild(p);
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value);

  localStorage.setItem("userName", name);
  localStorage.setItem("userAge", age);

  displayUserData(name, age);
  form.reset();
});
