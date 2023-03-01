import { getName, findGcd } from '../utils.js';
import gameEngine from '../game-engine.js';
import { QUESTION_GCD_GAME } from '../const.js';

const checkAnswer = (questionExpression) => findGcd(questionExpression);

const brainGcdGame = () => {
  const username = getName();
  gameEngine(checkAnswer, QUESTION_GCD_GAME, username);
};

export default brainGcdGame;
