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

const gcdRec = (int1, int2) => {
  if (int2) {
    return gcdRec(int2, int1 % int2);
  }
  return Math.abs(int1);
};

const findGcd = (str) => {
  const arrayOfStr = str.split(' ');

  return String(gcdRec(arrayOfStr[0], arrayOfStr[1]));
};

export {
  randomInteger,
  checkEvenOrOdd,
  getName,
  randomOperator,
  expressionExecution,
  findGcd,
};
