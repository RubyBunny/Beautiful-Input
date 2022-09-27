var inputElement = document.querySelector(".input-block input");
var placeholderElement = document.querySelector(".placeholder");
var placeholderExample = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXXX".split("");
inputElement.addEventListener("input", function (e) {
    var inputText = inputElement.value.split("");
    var newPlaceholderExample = placeholderExample.slice(inputText.length, -1);
    var newPlaceholder = "\u0020".repeat(inputText.length) + newPlaceholderExample.join("");
    placeholderElement.innerText = newPlaceholder;
    console.log(newPlaceholder);
});
