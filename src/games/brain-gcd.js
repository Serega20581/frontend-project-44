#!/usr/bin/env node
import { b, getName3 } from '../index.js';

function calculateGCD(num1, num2) {
  let n1 = num1;
  let n2 = num2;
  while (n2 !== 0) {
    const temp = n2;
    n2 = n1 % n2;
    n1 = temp;
  }
  return n1;
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function runBrainGcd() {
  const name = getName3();

  const numberOfQuestions = 3;

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const num1 = generateRandomNumber(1, 100);
    const num2 = generateRandomNumber(1, 100);
    const expression = `${num1} ${num2}`;
    const correctAnswer = calculateGCD(num1, num2);
    const userAnswer = b(3, name, expression);

    if (Number(userAnswer) === correctAnswer) {
      b(4, name);
    } else {
      b(5, name, 0, userAnswer, correctAnswer);
      return;
    }
  }

  b(6, name);
}

export default runBrainGcd;
