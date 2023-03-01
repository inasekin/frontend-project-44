import readlineSync from 'readline-sync';
import { getQuestionExpression } from './utils.js';
import { MAX_CORRECT_ATTEMPT } from './const.js';

let userAttempt = 0;

const gameEngine = (checkRules, question, name) => {
  const questionExpression = getQuestionExpression(question);
  console.log(question);
  console.log(`Question: ${typeof questionExpression === 'object' ? questionExpression.question : questionExpression}`);
  const answer = readlineSync.question('Your answer: ');

  if (checkRules(questionExpression) !== answer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkRules(questionExpression)}'.`);
    console.log(`Let's try again, ${name}!`);

    return;
  }

  if (checkRules(questionExpression) === answer) {
    console.log('Correct!');
    userAttempt += 1;

    if (userAttempt === MAX_CORRECT_ATTEMPT) {
      console.log(`Congratulations, ${name}!`);

      return;
    }
    gameEngine(checkRules, question, name);
  }
};

export default gameEngine;
