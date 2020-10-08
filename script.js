/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea ✅
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked ✅
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked ✅
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked ✅
 * TODO: Convert all functions and any other possible elements to ES6.✅
 
/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeyup function inside HTML.
 */
//when text input do the same for text output.
updateText = () => {
  // Here we are passing the text inside the id "text input" into the "text-output" id.
  let text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = text;
};

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button will show button selected.
 */
makeBold = (elem) => {
  //CODE GOES HERE
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");
};

/**
 * Toggle the italic class for the output text
 */
makeItalic = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
};

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
makeUnderline = (elem) => {
  //CODE GOES HERE
  elem.classList.toggle("active");
  let formattedText = document.getElementById("text-output");
  if (formattedText.classList.contains("underline")) {
    formattedText.classList.remove("underline");
  } else {
    formattedText.classList.add("underline");
  }
};

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
alignText = (elem, alignType) => {
  // console.log(alignType);
  document.getElementById("text-output").style.textAlign = alignType;
  //we want to get all buttons, alignButtons is not an array so we can't use map, foreach,... it is an HTML COLLECTION.
  let alignButtons = document.getElementsByClassName("align");
  console.log(alignButtons);
  for (let button of alignButtons) {
    button.classList.remove("active");
  }
  //Here we want to only make one of the buttons active
  elem.classList.toggle("active");
  // CODE GOES HERE
};
