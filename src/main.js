// Load saved theme preference from local storage
function loadWindow() {
  let savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.querySelector("body").classList.add("dark-theme");
    document.querySelector("#theme-toggle img").src = "./imgs/light-mode.png";
  }
}

// Display dark or light theme
function displayTheme() {
  let bodyElement = document.querySelector("body");
  bodyElement.classList.toggle("dark-theme");
  let themeToggle = document.querySelector("#theme-toggle img");

  if (bodyElement.classList.contains("dark-theme")) {
    themeToggle.src = "./imgs/light-mode.png";
  } else {
    themeToggle.src = "./imgs/night-mode.png";
  }
  // Save theme preference into local storage
  if (bodyElement.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Display generated Bible verse with typewriter effect
function displayVerse(response) {
  new Typewriter("#generated-answer", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateVerse(event) {
  event.preventDefault();

  let inputTextElement = document.querySelector("#input-text");

  let h3 = document.querySelector("#generated-answer");
  h3.innerHTML = "Generating....";

  let apiKey = "7b83at211fa42375b047407234bfo5f1";
  let prompt = `Generate a full Bible verse based on the user's emotions: ${inputTextElement.value}`;
  let context =
    "You are an AI that generates Bible verses based on user emotions. Respond with only the Bible verse and nothing else. If the user types random letters, i.e, sghjjskldf etc response with: 'Please provide a valid emotion so I can generate a Bible verse for you.' If there is a chapter with 2 or more verses, generate all verses, not stopping at one point etc for example: 1 Corinthians 13:4-7: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily'. Not just this verse but any other verses that are more and needs to be generated etc and the last example: Philippians 4:6-7: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your'";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayVerse);
}

// Event listener for generate button
let btnElement = document.querySelector("#btn");
btnElement.addEventListener("click", generateVerse);

// Dark mode toggle
let themeToggle = document.querySelector("#theme-toggle");
themeToggle.addEventListener("click", displayTheme);

// Load theme preference from local storage
window.addEventListener("load", loadWindow);
