const inputElement = document.querySelector(".input-block input") as HTMLInputElement;
const placeholderElement = document.querySelector(".placeholder") as HTMLPreElement;
const placeholderExample: string[] = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXXX".split("");

inputElement.addEventListener("input", (e) => {
    const capitalizeText: string = inputElement.value.toUpperCase();
    inputElement.value = capitalizeText;

    const inputText: string[] = capitalizeText.split("");
    const newPlaceholderExample = placeholderExample.slice(inputText.length, -1);
    
    const whitespaces: string[] = new Array(inputText.length).fill(" ");
    const newPlaceholder: string = whitespaces.join("") + newPlaceholderExample.join("");

    placeholderElement.innerHTML = newPlaceholder;
    console.log(newPlaceholder);
});