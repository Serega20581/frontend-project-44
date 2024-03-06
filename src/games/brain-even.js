#!/usr/bin/env node
import { b, getName2 } from '../index.js';

function isEven(num) {
  return num % 2 === 0;
}

function runBrainEven() {
  const name = getName2();

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const userAnswer = b(3, name, randomNumber);

    if ((isEven(randomNumber) && userAnswer === 'yes') || (!isEven(randomNumber) && userAnswer === 'no')) {
      b(4, name);
      correctAnswersCount += 1;
    } else {
      b(5, name, 0, userAnswer);
      return;
    }
  }
  b(6, name);
}

export default runBrainEven;
