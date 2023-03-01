import readlineSync from 'readline-sync';
import { getQuestionExpression } from './utils.js';
import {MAX_CORRECT_ATTEMPT, QUESTION_EVEN_GAME} from './const.js';

let userAttempt = 0;

const renderQuestion = (username, whatGame, checkAnswer, bringBackCorrectAnswer) => {
  const questionExpression = getQuestionExpression(QUESTION_EVEN_GAME);

  console.log(`Question: ${questionExpression}`);

  const answer = readlineSync.question('Your answer: ');

  if (!checkAnswer(answer, questionExpression)) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${bringBackCorrectAnswer(questionExpression)}'.`);
    console.log(`Let's try again, ${username}!`);

    return;
  }

  if (checkAnswer(answer, questionExpression)) {
    console.log('Correct!');
    userAttempt += 1;

    if (userAttempt === MAX_CORRECT_ATTEMPT) {
      console.log(`Congratulations, ${username}!`);

      return;
    }
    renderQuestion(username, whatGame, checkAnswer, bringBackCorrectAnswer);
  }
};

export default renderQuestion;
