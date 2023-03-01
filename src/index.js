import readlineSync from 'readline-sync';
import { getRandomInteger, randomOperator, createProgression } from './utils.js';
import { MAX_CORRECT_ATTEMPT } from './const.js';

let userAttempt = 0;

const getQuestionExpression = (gameName) => {
  let expression;

  switch (gameName) {
    case 'even':
      expression = getRandomInteger(1, 100);
      break;
    case 'calc':
      expression = `${getRandomInteger(1, 10)} ${randomOperator()} ${getRandomInteger(1, 10)}`;
      break;
    case 'gcd':
      expression = `${getRandomInteger(2, 100)} ${getRandomInteger(2, 100)}`;
      break;
    case 'progression':
      expression = createProgression();
      break;
    case 'prime':
      expression = getRandomInteger(1, 100);
      break;
    default:
      console.log(`Sorry, we are out of ${gameName}.`);
  }

  return expression;
};

const renderQuestion = (username, whatGame, checkAnswer, bringBackCorrectAnswer) => {
  const questionExpression = getQuestionExpression(whatGame);

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
