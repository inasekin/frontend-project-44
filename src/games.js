import {
  getName,
  checkEvenOrOdd,
  expressionExecution,
  findGcd,
} from './utils.js';
import renderQuestion from './index.js';

const brainEvenGame = () => {
  const name = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const checkUserAnswer = (answer, int) => checkEvenOrOdd(int) === answer;

  renderQuestion(name, 'even', checkUserAnswer, checkEvenOrOdd);
};

const brainCalcGame = () => {
  const name = getName();
  console.log('What is the result of the expression?');

  // eslint-disable-next-line max-len
  const checkUserAnswer = (answer, int) => expressionExecution(int) === answer;

  renderQuestion(name, 'calc', checkUserAnswer, expressionExecution);
};

const brainGcdGame = () => {
  const name = getName();
  console.log('Find the greatest common divisor of given numbers.');

  const checkUserAnswer = (answer, chars) => findGcd(chars) === answer;

  renderQuestion(name, 'gcd', checkUserAnswer, findGcd);
};

export { brainCalcGame, brainEvenGame, brainGcdGame };
