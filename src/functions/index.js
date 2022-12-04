import readlineSync from 'readline-sync';
import { MAX_INDEX, HIDDEN_NUMBER_SYMBOL } from '../constants/index.js';

const randomInteger = (min, max) => {
  const rand = (min - 0.5) + (Math.random() * ((max - min) + 1));
  return Math.round(rand);
};

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const helloAndQuestion = (question) => {
  const name = getName();
  console.log(question);

  return name;
};

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const iRandom = Math.floor((Math.random() * operators.length));

  return operators[iRandom];
};

const arithmeticProgression = () => {
  const result = [];
  const step = randomInteger(2, 6);

  for (let i = 0; i <= MAX_INDEX; i += 1) {
    if (i !== 0) {
      result.push(result[i - 1] + step);
    } else {
      result.push(randomInteger(2, 20));
    }
  }

  return result;
};

const createProgression = () => {
  const newProgression = arithmeticProgression();

  const missChar = randomInteger(0, newProgression.length);

  newProgression[missChar] = HIDDEN_NUMBER_SYMBOL;

  return newProgression.join(' ');
};

// eslint-disable-next-line consistent-return
const findHiddenEl = (str) => {
  const progressionArray = str.split(' ');

  for (let i = 0; i < progressionArray.length; i += 1) {
    if (progressionArray[i] === HIDDEN_NUMBER_SYMBOL) {
      let step = 0;

      // если заданное число имеет соседей справа и слева
      if (progressionArray[i - 1] && progressionArray[i + 1]) {
        step = progressionArray[i + 1] - progressionArray[i - 1];

        return String(progressionArray[i + 1] - Number(step / 2));
      }

      // если заданное число не имеет соседа справа
      if (!progressionArray[i + 1] && progressionArray[i - 1] && progressionArray[i - 2]) {
        step = progressionArray[i - 1] - progressionArray[i - 2];

        return String(Number(progressionArray[i - 1]) + Number(step));
      }

      // если заданное число не имеет соседа слева
      if (progressionArray[i + 1] && !progressionArray[i - 1] && progressionArray[i + 2]) {
        step = progressionArray[i + 2] - progressionArray[i + 1];

        return String(progressionArray[i + 1] - Number(step));
      }
    }
  }
};

const isPrime = (num) => {
  const currentNum = Number(num);
  for (let i = 2, s = Math.sqrt(currentNum); i <= s; i += 1) {
    if (currentNum % i === 0) return false;
  }
  return currentNum > 1;
};

export {
  randomInteger,
  getName,
  randomOperator,
  findHiddenEl,
  createProgression,
  helloAndQuestion,
  isPrime,
};
