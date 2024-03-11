import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nWhat is the result of the expression?`);
  return name;
};

const b = (l, name, k, userAns = '', correctAns = '') => {
  if (l === 3) {
    console.log(`Question: ${k}`);
    const userAnswer = readlineSync.question('Your answer: ');
    return userAnswer;
  }
  if (l === 4) {
    console.log('Correct!');
  }
  if (l === 5) {
    console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${correctAns}'.`);
    console.log(`Let's try again, ${name}!`);
  }
  if (l === 6) {
    console.log(`Congratulations, ${name}!`);
  }
  return undefined;
};
const getName2 = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('\nAnswer "yes" if given  number is prime. Otherwise answer "no".');
  return name;
};
const getName3 = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nFind the greatest common divisor of given numbers.`);
  return name;
};
const getName4 = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  return name;
};
export {
  getName, b, getName2, getName3, getName4,
};
