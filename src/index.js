import $ from 'jquery';
import normalize from 'normalize.css';
import './styles/index.css';
import quizApp from './scripts/quiz-app.js';

function main() {
  quizApp.handleStart();
  quizApp.handleNextQuestion();
  quizApp.handleNextPage();
  quizApp.handleRestart();
}

$(main);