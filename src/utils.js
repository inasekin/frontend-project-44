import readlineSync from 'readline-sync';
import {
  MAX_INDEX,
  HIDDEN_NUMBER_SYMBOL,
  QUESTION_EVEN_GAME,
  QUESTION_CALC_GAME,
  QUESTION_GCD_GAME,
  QUESTION_PROGRESSION_GAME, QUESTION_PRIME_GAME,
} from './const.js';

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const checkEven = (number) => number % 2 === 0;

const getRandomInteger = (min, max) => {
  const rand = (min - 0.5) + (Math.random() * ((max - min) + 1));
  return Math.round(rand);
};

const getRandomOperator = (n1, n2) => {
  let result;
  const n = Math.floor(Math.random() * 3);

  switch (n) {
    case 0:
      result = { question: `${n1} + ${n2}`, expression: n1 + n2 };
      break;
    case 1:
      result = { question: `${n1} - ${n2}`, expression: n1 - n2 };
      break;
    case 2:
      result = { question: `${n1} * ${n2}`, expression: n1 * n2 };
      break;
    default:
      console.log('Sorry, we have some error.');
  }

  return result;
};

const arithmeticProgression = () => {
  const result = [];
  const step = getRandomInteger(2, 6);

  for (let i = 0; i <= MAX_INDEX; i += 1) {
    if (i !== 0) {
      result.push(result[i - 1] + step);
    } else {
      result.push(getRandomInteger(2, 20));
    }
  }

  return result;
};

const createProgression = () => {
  const result = {};
  const newProgression = arithmeticProgression();

  const missChar = getRandomInteger(0, newProgression.length - 1);

  result.expression = newProgression[missChar];

  newProgression[missChar] = HIDDEN_NUMBER_SYMBOL;

  result.question = newProgression.join(' ');

  return result;
};

const getQuestionExpression = (gameQuestion) => {
  let expression;

  switch (gameQuestion) {
    case QUESTION_EVEN_GAME:
      expression = getRandomInteger(1, 100);
      break;
    case QUESTION_CALC_GAME:
      expression = getRandomOperator(getRandomInteger(1, 10), getRandomInteger(1, 10));
      break;
    case QUESTION_GCD_GAME:
      expression = `${getRandomInteger(2, 100)} ${getRandomInteger(2, 100)}`;
      break;
    case QUESTION_PROGRESSION_GAME:
      expression = createProgression();
      break;
    case QUESTION_PRIME_GAME:
      expression = getRandomInteger(1, 100);
      break;
    default:
      console.log(`Sorry, we are out of ${gameQuestion}.`);
  }

  return expression;
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

const isPrime = (num) => {
  const currentNum = Number(num);
  for (let i = 2, s = Math.sqrt(currentNum); i <= s; i += 1) {
    if (currentNum % i === 0) return false;
  }
  return currentNum > 1;
};

const checkIsPrime = (figure) => isPrime(figure);

export {
  getRandomInteger,
  getName,
  checkEven,
  getRandomOperator,
  createProgression,
  getQuestionExpression,
  findGcd,
  checkIsPrime,
};
