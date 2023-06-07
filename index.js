var readlineSync = require('readline-sync');
var userName = readlineSync.question('Enter your name ');

console.log('Welcome! ' + userName);
console.log('Answer all the questions in capital letters ')

var score = 0;

function game(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    score = score + 1;
    console.log("You are right! Your score is " + score)
  } else {
    console.log("You are wrong! Correct answer is " + answer + ". Your score is " + score)
  }
  console.log('___________');
}

game('What is my name? ', 'KUSHAL');
game('Where do I live? ', 'INDIA');
game('What is my favourite food? ', 'BIRIYANI');
game('What is my favourite sport? ', 'FOOTBALL');
game('What is my age? ', "20");
game('Who is may favourite footballer? ', 'MESSI');

if (score >= 4) {
  console.log('YAYY! Your score is ' + score + '. You know Kushal very well. He loves you and jesus.')
} else {
  console.log('Your score is ' + score + '. You need to know Kushal a bit more. He loves you and jesus.')
}