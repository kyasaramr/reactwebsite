
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json");
xhr.onload = function () {
console.log(xhr.responseText);
}
xhr.send();