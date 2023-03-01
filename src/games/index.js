import {
  getName,
  isPrime,
} from '../utils.js';
import renderQuestion from '../index.js';

const brainPrimeGame = () => {
  const checkIsPrime = (figure) => (isPrime(figure) ? 'yes' : 'no');
  const checkUserAnswer = (answer, exp) => checkIsPrime(exp) === answer;

  renderQuestion(getName, 'prime', checkUserAnswer, checkIsPrime);
};

export default brainPrimeGame;
