"use strict";
const inputElement = document.querySelector(".input-block input");
const placeholderElement = document.querySelector(".placeholder");
const placeholderExample = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXXX".split("");
inputElement.addEventListener("input", (e) => {
    const capitalizeText = inputElement.value.toUpperCase();
    inputElement.value = capitalizeText;
    const inputText = capitalizeText.split("");
    const newPlaceholderExample = placeholderExample.slice(inputText.length, -1);
    const whitespaces = new Array(inputText.length).fill(" ");
    const newPlaceholder = whitespaces.join("") + newPlaceholderExample.join("");
    placeholderElement.innerHTML = newPlaceholder;
    console.log(newPlaceholder);
});
