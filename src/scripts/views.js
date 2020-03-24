import store from './store.js';

function questionPage(question) {
  let value = question[store.data.questionNumber].answers;
  return `
  <section class="container question-form" >
    <p>Question ${store.data.questionNumber + 1}</p>
    <img src="${question[store.data.questionNumber].img}" alt="${question[store.data.questionNumber].alt}">
    <form class="answer-question" action="#">
        <p>${question[store.data.questionNumber].question}</p>
        <legend>Pick a city capital</legend>
        <input type="radio" id="q1" name="city" value="${value[0]}">
        <label for="q1">${question[store.data.questionNumber].answers[0]}</label><br>
        <input type="radio" id="q2" name="city" value="${value[1]}">
        <label for="q2">${question[store.data.questionNumber].answers[1]}</label><br>
        <input type="radio" id="q3" name="city" value="${value[2]}">
        <label for="q3">${question[store.data.questionNumber].answers[2]}</label><br>
        <input type="radio" id="q4" name="city" value="${value[3]}">
        <label for="q4">${question[store.data.questionNumber].answers[3]}</label>
        <button class="submit-question">
          <span>Submit</span>
        </button>
    </form>
  </section>`
}

function rightPage() {
  let score = store.data.score;
  let questionNumber = store.data.questionNumber;
  let questions = store.data.questions;
  return `
  <section class="container right-page">
    <h2>You got it right!</h2>
    <span class="response-emoji">&#128512;</span>
    <div class="paragraph">
      <p>You have <strong>${score}</strong> answers correct out of <strong>${questions.length}</strong>.</p>
      <h3>Keep it up!</h3>
    </div>
    <button class="next">
      <span>Next</span>
    </button>
    <p>Question ${questionNumber} out of ${questions.length}</p>
  </section>`
}

function wrongPage(question) {
  return `
  <section class="container wrong-page">
    <h2>Oops! You got that wrong.</h2>
    <span class="response-emoji">&#128528;</span>
    <div class="paragraph">
      <h4>The right answer is <em>"${question[store.data.questionNumber - 1].correctAnswer}"</em></h4>
      <p>You have <strong>${store.data.score}</strong> answers correct out of <strong>${store.data.questions.length}</strong></p>
    </div>
    <button class="next">
      <span>Next</span>
    </button>
    <p>Question ${store.data.questionNumber} out of ${question.length}</p>
  </section>`
}

function finishPage() {
  let data = store.data;
  let questions = store.data.questions;
  const gradeScale = data.score < (questions.length / 2) + 2;
  return `
  <section class="container finish-page">
    <h2>You finished!</h2>
    <span style='font-size:100px;' class="final-emoji">${gradeScale ? '&#129300;' : '&#128079;'}</span>
      <p>You got <strong>${data.score}</strong> answers correct out of <strong>${questions.length}</strong>.</p>
      <p style="margin: 0;">${gradeScale ? 'Try a little harder next time...' : 'Good job! You seem to know your stuff.'}<p>
    <button class="reset">
      <span>Restart Quiz</span>
    </button>
  </section>`
}

export default {
  questionPage,
  rightPage,
  wrongPage,
  finishPage
}