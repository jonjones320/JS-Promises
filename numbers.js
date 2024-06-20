let BASE_URL = "http://numbersapi.com";
let faveNumber = 3

// 1
let randomTrivia;
$.getJSON(`${BASE_URL}/${faveNumber}/trivia?json`).then( response => {
  randomTrivia = response;
  console.log("randomTrivia: ", randomTrivia);
}, err => {
  console.log(err)
});

// 2
let multipleTrivia
let faveNumbers = [7, 9, 11]
$.getJSON(`${BASE_URL}/${faveNumbers}/trivia?json`).then(response => {
  console.log("multipleTrivia: ", response);
  $("body").append(`<p>${response}</p>`);
}, err => {
  console.log(err)
});

// 3

let promises = [];
for (let i = 0; i < 4; i ++) {
    promises.push($.getJSON(`${BASE_URL}/${faveNumber}?json`))
}

Promise.all(promises).then(results => {
    results.forEach( data => {
        $("body").append(`<p>${data.text}</p>`);
    })
})