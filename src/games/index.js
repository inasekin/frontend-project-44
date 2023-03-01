import {
  findHiddenEl, getName,
  isPrime,
} from '../utils.js';
import renderQuestion from '../index.js';

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
  brainProgressionGame,
  brainPrimeGame,
};
