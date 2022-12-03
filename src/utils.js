import readlineSync from 'readline-sync';

const randomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const checkEvenOrOdd = (number) => (number % 2 === 0 ? 'yes' : 'no');

// eslint-disable-next-line no-eval
const expressionExecution = (exp) => String(eval(exp));

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const iRandom = Math.floor((Math.random() * operators.length));

  return operators[iRandom];
};

export {
  randomInteger,
  checkEvenOrOdd,
  getName,
  randomOperator,
  expressionExecution,
};
