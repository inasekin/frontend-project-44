import { getName } from '../utils.js';
import gameEngine from './game-engine.js';
import { QUESTION_CALC_GAME } from '../const.js';

const rightAnswer = (questionExpression) => (String(questionExpression.expression));

const brainCalcGame = () => {
  const username = getName();
  gameEngine(rightAnswer, QUESTION_CALC_GAME, username);
};

export default brainCalcGame;
