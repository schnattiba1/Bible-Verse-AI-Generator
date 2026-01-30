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

  let apiKey = "7b83at211fa42375b047407234bfo5f1";
  let prompt = `Generate a short Bible verse based on the user's emotions: ${inputTextElement.value}, i.e, happy, upset, sad, excited, etc. If the user types random letters, i.e, sghjjskldf etc response with: 'Please provide a valid emotion so I can generate a Bible verse for you.' Make sure you generate a different bible verse everytime the user enters an emotion.`;
  let context =
    "Make sure you provide the correct book, chapter, and verse number for each Bible verse you generate and especially based on the user's emotions. Respond with only the Bible verse and nothing else. Make sure is written to the end.";
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
