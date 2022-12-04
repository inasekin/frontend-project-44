import readlineSync from 'readline-sync';
import { randomInteger, randomOperator, createProgression } from './utils/index.js';
import { MAX_CORRECT_ATTEMPT } from './constants/index.js';

let userAttempt = 0;

const renderQuestion = (username, whatGame, checkAnswer, bringBackCorrectAnswer) => {
  let questionExpression;

  switch (whatGame) {
    case 'even':
      questionExpression = randomInteger(1, 100);
      break;
    case 'calc':
      questionExpression = `${randomInteger(1, 10)} ${randomOperator()} ${randomInteger(1, 10)}`;
      break;
    case 'gcd':
      questionExpression = `${randomInteger(2, 100)} ${randomInteger(2, 100)}`;
      break;
    case 'progression':
      questionExpression = createProgression();
      break;
    case 'prime':
      questionExpression = randomInteger(1, 100);
      break;
    default:
      console.log(`Sorry, we are out of ${whatGame}.`);
  }

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
