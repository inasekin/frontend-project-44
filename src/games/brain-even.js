import gameEngine from '../game-engine.js';
import { QUESTION_EVEN_GAME } from '../const.js';
import { checkEven, getName } from '../utils.js';

const checkAnswer = (questionExpression) => (checkEven(questionExpression) ? 'yes' : 'no');

const brainEvenGame = () => {
  const username = getName();
  gameEngine(checkAnswer, QUESTION_EVEN_GAME, username);
};

export default brainEvenGame;
