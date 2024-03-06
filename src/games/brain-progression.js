#!/usr/bin/env node
import { b, getName4 } from '../index.js';

function generateProgression(length) {
  const start = Math.floor(Math.random() * 10);
  const diff = Math.floor(Math.random() * 5) + 1;
  const progression = [];

  for (let i = 0; i < length; i += 1) {
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

function runBrainProgression() {
  const name = getName4();

  let score = 0;
  let isCorrect = true;

  while (isCorrect && score < 3) {
    const progressionLength = Math.floor(Math.random() * 6) + 5;
    const generatedProgression = generateProgression(progressionLength);
    const question = hideNumber(generatedProgression);
    const userAnswer = b(3, name, question.progression);

    if (userAnswer === question.hiddenValue) {
      b(4, name);
      score += 1;
    } else {
      b(5, name, 0, userAnswer, question.hiddenValue);
      isCorrect = false;
    }
  }

  if (score === 3) {
    b(6, name);
  }
}

export default runBrainProgression;
