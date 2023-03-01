import { getName } from '../utils.js';
import gameEngine from '../game-engine.js';
import { QUESTION_PROGRESSION_GAME } from '../const.js';

const checkAnswer = (questionExpression) => String(questionExpression.expression);

const brainProgressionGame = () => {
  const username = getName();
  gameEngine(checkAnswer, QUESTION_PROGRESSION_GAME, username);
};

export default brainProgressionGame;
