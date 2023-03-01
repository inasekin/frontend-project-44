import gameEngine from './game-engine.js';
import { QUESTION_EVEN_GAME } from '../const.js';
import { getName } from '../utils.js';

const checkEven = (number) => number % 2 === 0;

const rightAnswer = (questionExpression) => (checkEven(questionExpression) ? 'yes' : 'no');

const brainEvenGame = () => {
  const username = getName();
  gameEngine(rightAnswer, QUESTION_EVEN_GAME, username);
};

export default brainEvenGame;
