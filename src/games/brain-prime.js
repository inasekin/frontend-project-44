import { getName, checkIsPrime } from '../utils.js';
import gameEngine from '../game-engine.js';
import { QUESTION_PRIME_GAME } from '../const.js';

const checkAnswer = (questionExpression) => (checkIsPrime(questionExpression) ? 'yes' : 'no');

const brainPrimeGame = () => {
  const username = getName();
  gameEngine(checkAnswer, QUESTION_PRIME_GAME, username);
};

export default brainPrimeGame;
