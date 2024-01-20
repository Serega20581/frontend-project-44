#!/usr/bin/env node


import readlineSync from 'readline-sync';

function generateProgression(length) {
  const start = Math.floor(Math.random() * 10);
  const diff = Math.floor(Math.random() * 5) + 1;
  const progression = [];

  for (let i = 0; i < length; i++) {
    progression.push(start + diff * i);
  }

  return progression;
}

function hideNumber(progression) {
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return {
    progression: progression.join(' '),
    hiddenValue: hiddenValue.toString(),
  };
}

function playGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('What number is missing in the progression?');

  let score = 0;
  let isCorrect = true;

  while (isCorrect && score < 3) {
    const progressionLength = Math.floor(Math.random() * 6) + 5;
    const generatedProgression = generateProgression(progressionLength);
    const question = hideNumber(generatedProgression);

    console.log(`Question: ${question.progression}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === question.hiddenValue) {
      console.log('Correct!');
      score++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${question.hiddenValue}'.`);
      console.log(`Let's try again, ${name}!`);
      isCorrect = false;
    }
  }

  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

playGame();