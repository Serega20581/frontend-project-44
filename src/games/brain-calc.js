#!/usr/bin/env node
import { b, getName } from '../index.js';

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomOperator() {
  const operators = ['+', '-', '*'];
  const randomIndex = generateRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
}

function calculateExpression(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
}

function runBrainCalc() {
  const name = getName();

  const numberOfQuestions = 3;

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const num1 = generateRandomNumber(1, 20);
    const num2 = generateRandomNumber(1, 20);
    const operator = generateRandomOperator();
    const expression = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculateExpression(num1, operator, num2);
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

export default runBrainCalc;
