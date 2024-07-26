const aw = [["1", "Bir"], ["2", "Iki"], ["3", "Üç"], ["4", "Dört"], ["5", "Beş"], ["6", "Altı"], ["7", "Altı"], ["8", "Sekiz"], ["9", "Dokuz"], ["10", "On"]];

var randomWord = Math.floor(Math.random() * (aw.length));

let randomSE = aw[randomWord][0];

let randomTR = aw[randomWord][1];

// console.log(randomWord);

console.log(`Svenskt ord: ${randomSE}`);
console.log(`Turkiskt ord: ${randomTR}`);



document.getElementById("se").innerHTML = randomSE.toString();
document.getElementById("tr").innerHTML = randomTR.toString();