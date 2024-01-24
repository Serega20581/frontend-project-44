#!/usr/bin/env node

import readlineSync from 'readline-sync';

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function brainPrime() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswersCount = 0;
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount++;
    } else {
      console.log(`Wrong! The correct answer is "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}! You answered correctly ${correctAnswersCount} out of ${roundsCount} questions.`);
}

export default brainPrime;
