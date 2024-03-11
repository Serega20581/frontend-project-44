#!/usr/bin/env node
import { b, getName5 } from '../index.js';

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function runBrainPrime() {
  const name = getName5();

  let score = 0;
  let isCorrect = true;

  while (isCorrect && score < 3) {
    const number = Math.floor(Math.random() * 100);
    const userAnswer = b(3, name, number);

    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    if (userAnswer.toLowerCase() === correctAnswer) {
      b(4, name);
      score += 1;
    } else {
      b(5, name, 0, userAnswer, correctAnswer);
      isCorrect = false;
    }
  }

  if (score === 3) {
    b(6, name);
  }
}

export default runBrainPrime;
