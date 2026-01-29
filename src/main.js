function generateVerse(event) {
  event.preventDefault();
  //alert("Generating a Bible verse...");

  let apiKey = "7b83at211fa42375b047407234bfo5f1";

  let inputTextElement = document.querySelector("#input-text").value;
  alert("You entered: " + inputTextElement);
}

let btnElement = document.querySelector("#btn");
btnElement.addEventListener("click", generateVerse);
