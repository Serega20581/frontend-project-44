#!/usr/bin/env node
import readlineSync from 'readline-sync';

function calculateGCD(num1, num2) {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}

function playGCDGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nFind the greatest common divisor of given numbers.`);

  const numberOfQuestions = 3;
  let correctAnswersCount = 0;

  for (let i = 0; i < numberOfQuestions; i++) {
    const num1 = generateRandomNumber(1, 100);
    const num2 = generateRandomNumber(1, 100);
    const expression = `${num1} ${num2}`;
    const correctAnswer = calculateGCD(num1, num2);

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

playGCDGame();