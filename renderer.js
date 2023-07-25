
var document = jsdom.jsdom("");

const add = document.querySelector("#add");
const subtract = document.getElementById("#subtract");
const output = document.getElementById("#output");

add.addEventListener("click", () => {
    let result = Number(output.innerText) + 1
    output.innerText = result;
}) 