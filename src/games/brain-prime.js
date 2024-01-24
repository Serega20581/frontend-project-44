#!/usr/bin/env node


import readlineSync from 'readline-sync';

function isPrime(number) {
  if (number <= 0) {
    return false;
  }
  else if (number >= 10){
    return false;
  }
  return true;
}

function brainPrime() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let score = 0;
  let isCorrect = true;

  while (isCorrect && score < 3) {
    const number = Math.floor((Math.random() * 100) + 1);

    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      score++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      isCorrect = false;
    }
  }

  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default brainPrime;
