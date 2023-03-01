import { getName } from '../utils.js';
import gameEngine from './game-engine.js';
import { QUESTION_GCD_GAME } from '../const.js';

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

const rightAnswer = (questionExpression) => findGcd(questionExpression);

const brainGcdGame = () => {
  const username = getName();
  gameEngine(rightAnswer, QUESTION_GCD_GAME, username);
};

export default brainGcdGame;
