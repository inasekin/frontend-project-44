import {
  checkEvenOrOdd,
  findGcd, findHiddenEl,
  helloAndQuestion, isPrime,
} from '../functions/index.js';
import renderQuestion from '../index.js';
import {
  QUESTION_EVEN_GAME,
  QUESTION_CALC_GAME,
  QUESTION_GCD_GAME,
  QUESTION_PRIME_GAME,
  QUESTION_PROGRESSION_GAME,
} from '../constants/index.js';

const brainEvenGame = () => {
  const checkUserAnswer = (answer, int) => checkEvenOrOdd(int) === answer;

  renderQuestion(helloAndQuestion(QUESTION_EVEN_GAME), 'even', checkUserAnswer, checkEvenOrOdd);
};

const brainCalcGame = () => {
  // eslint-disable-next-line no-eval
  const expressionExecution = (exp) => String(eval(exp));
  const checkUserAnswer = (answer, int) => expressionExecution(int) === answer;

  renderQuestion(helloAndQuestion(QUESTION_CALC_GAME), 'calc', checkUserAnswer, expressionExecution);
};

const brainGcdGame = () => {
  const checkUserAnswer = (answer, chars) => findGcd(chars) === answer;

  renderQuestion(helloAndQuestion(QUESTION_GCD_GAME), 'gcd', checkUserAnswer, findGcd);
};

const brainProgressionGame = () => {
  const checkUserAnswer = (answer, progression) => findHiddenEl(progression) === answer;

  renderQuestion(helloAndQuestion(QUESTION_PROGRESSION_GAME), 'progression', checkUserAnswer, findHiddenEl);
};

const brainPrimeGame = () => {
  const checkIsPrime = (figure) => (isPrime(figure) ? 'yes' : 'no');
  const checkUserAnswer = (answer, exp) => checkIsPrime(exp) === answer;

  renderQuestion(helloAndQuestion(QUESTION_PRIME_GAME), 'prime', checkUserAnswer, checkIsPrime);
};

export {
  brainCalcGame,
  brainEvenGame,
  brainGcdGame,
  brainProgressionGame,
  brainPrimeGame,
};
