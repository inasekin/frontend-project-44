import readlineSync from 'readline-sync';

const MAX_CORRECT_ATTEMPT = 3;
let userAttempt = 0;

const randomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const checkEvenOrOdd = (number) => (number % 2 === 0 ? 'yes' : 'no');

const checkAnswer = (answer, int) => checkEvenOrOdd(int) === answer;

const renderQuestion = (username) => {
  const gameNumber = randomInteger(1, 100);
  console.log(`Question: ${gameNumber}`);

  const answer = readlineSync.question('Your answer: ');

  if (!checkAnswer(answer, gameNumber)) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkEvenOrOdd(gameNumber)}'.`);
    console.log(`Let's try again, ${username}!`);

    return;
  }

  if (checkAnswer(answer, gameNumber)) {
    console.log('Correct!');
    userAttempt += 1;

    if (userAttempt === MAX_CORRECT_ATTEMPT) {
      console.log(`Congratulations, ${username}!`);

      return;
    }
    renderQuestion(username);
  }
};

const initGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  renderQuestion(name);
};

export default initGame;
