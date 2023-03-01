import {
  findHiddenEl, getName,
  isPrime,
} from '../utils.js';
import renderQuestion from '../index.js';

const brainCalcGame = () => {
  // eslint-disable-next-line no-eval
  const expressionExecution = (exp) => String(eval(exp));
  const checkUserAnswer = (answer, int) => expressionExecution(int) === answer;

  renderQuestion(getName(), 'calc', checkUserAnswer, expressionExecution);
};

const brainGcdGame = () => {
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

  const checkAnswerGcdGame = (answer, chars) => findGcd(chars) === answer;

  renderQuestion(getName, 'gcd', checkAnswerGcdGame, findGcd);
};

const brainProgressionGame = () => {
  const checkAnswerProgressionGame = (answer, progression) => findHiddenEl(progression) === answer;

  renderQuestion(getName, 'progression', checkAnswerProgressionGame, findHiddenEl);
};

const brainPrimeGame = () => {
  const checkIsPrime = (figure) => (isPrime(figure) ? 'yes' : 'no');
  const checkUserAnswer = (answer, exp) => checkIsPrime(exp) === answer;

  renderQuestion(getName, 'prime', checkUserAnswer, checkIsPrime);
};

export {
  brainCalcGame,
  brainGcdGame,
  brainProgressionGame,
  brainPrimeGame,
};
