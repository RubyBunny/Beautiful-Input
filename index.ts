const inputElement = document.querySelector(".input-block input") as HTMLInputElement;
const placeholderElement = document.querySelector(".placeholder") as HTMLPreElement;
const placeholderExample: string[] = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXXX".split("");

inputElement.addEventListener("input", (e) => {
    const inputText: string[] = inputElement.value.split("");
    const newPlaceholderExample = placeholderExample.slice(inputText.length, -1);
    const newPlaceholder: string = "\u0020".repeat(inputText.length) + newPlaceholderExample.join("");

    placeholderElement.innerText = newPlaceholder;
    console.log(newPlaceholder);
});