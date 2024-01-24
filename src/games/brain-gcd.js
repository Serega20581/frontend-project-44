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

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function brainGcd() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nFind the greatest common divisor of given numbers.`);

  const numberOfQuestions = 3;
  let correctAnswerCount = 0;

  for (let i = 0; i < numberOfQuestions; i++) {
    const num1 = generateRandomNumber(1, 100);
    const num2 = generateRandomNumber(1, 100);
    const expression = `${num1} ${num2}`;
    const correctAnswer = calculateGCD(num1, num2);

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } 
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default brainGcd;