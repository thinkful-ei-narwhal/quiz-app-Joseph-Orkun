import store from './store.js';
import $ from 'jquery';
import views from './views.js';

/********** RENDER FUNCTION(S) **********/

function renderQuestion(data) {
  return views.questionPage(data);
}

function renderRight() {
  return views.rightPage();
}

function renderWrong(data) {
  return views.wrongPage(data);
}

function renderFinish() {
  return views.finishPage();
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleStart() {
  $('.welcome-screen').on('click', '.play-now', function () {
    store.quizStarted = true;
    $('main').html(renderQuestion(store.data.questions));
  });
}

function handleNextQuestion() {
  // when user submits answer
    // if answer is right, call (renderRight()), +1 score & +1 question count .html()
    // if answer wrong, call(renderWrong()), +1 question count .html()
  $('main').on('submit', '.answer-question', function (event) {
    event.preventDefault();
    let answer = $("input[name='city']:checked").val();
    let correct = store.data.questions[store.data.questionNumber].correctAnswer;
    if (!answer) {
      alert('You need to pick and answer!')
    } else if (answer == correct) {
      store.data.score += 1;
      store.data.questionNumber += 1;
      $('main').html(renderRight())
    } else {
      store.data.questionNumber += 1;
      $('main').html(renderWrong(store.data.questions));
    }
  });
}

function handleNextPage() {
  // when we click next, we want to render the page for next question. 
  $('main').on('click', '.next', function(event) {
    if (store.data.questionNumber < store.data.questions.length) {
      $('main').html(renderQuestion(store.data.questions));
    } else {
      $('main').html(renderFinish())
    }
  });
} 

function handleRestart() {
  //when we click restart, load start page
  $('main').on('click', '.reset', event => {
    location.reload()
  })
};

export default {
  handleStart,
  handleNextQuestion,
  handleNextPage,
  handleRestart
}