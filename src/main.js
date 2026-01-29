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
  let prompt = `Generate a short Bible verse based on the user's emotions: ${inputTextElement.value}, i.e, happy, upset, sad, excited, etc. Only respond with Bible verses and nothing else. If the user types random letters, i.e, sghjjskldf etc response with: "Please provide a valid emotion so I can generate a Bible verse for you."`;
  let context =
    "Make sure you provide the correct book, chapter, and verse number for each Bible verse you generate and especially based on the user's emotions. Respond with only the Bible verse and nothing else. Make sure is written to the end.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayVerse);
}

let btnElement = document.querySelector("#btn");
btnElement.addEventListener("click", generateVerse);
