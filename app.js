/**
 * Example store structure
 */
const questions = [
  {
    question: 'What is the capital of Turkey?',
    answers: [
      'Istanbul',
      'Ankara',
      'Izmir',
      'Adana'
    ],
    correctAnswer: 'Ankara',
    image: 'https://1.bp.blogspot.com/-jO4jN2yqMjg/XiRnKw9wR5I/AAAAAAAABAk/20dBiObtVhUIBD7xsSF71NJRpn_9YLXRQCLcBGAsYHQ/s1600/Turkey-Facts-Interesting-Facts-About-Turkey-Country-hot-air-ballons-turkey.png',
    alt: 'Turkey'
  },
  {
    question: 'What is the capital of the Dominican Republic?',
    answers: [
      'Santiago',
      'Punta Cana',
      'Santo Domingo',
      'Constanza'
    ],
    correctAnswer: 'Santo Domingo',
    image: 'https://www.godominicanrepublic.com/wp-content/uploads/2015/12/dsc01769.jpg',
    alt: 'the Dominican Republic'
  },
  {
    question: 'What is the capital of Poland?',
    answers: [
      'Warsaw',
      'Lublin',
      'Szczecin',
      'Gdańsk'
    ],
    correctAnswer: 'Warsaw',
    image: 'https://jobs.rbs.com/system/production/assets/176264/original/poland_lg.jpg',
    alt: 'Poland'
  },
  {
    question: 'What is the capital of India?',
    answers: [
      'Mumbai',
      'Bangalore',
      'New Delhi',
      'Hyderabad'
    ],
    correctAnswer: 'New Delhi',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg',
    alt: 'India'
  },
  {
    question: 'What is the capital of Brazil?',
    answers: [
      'São Paulo',
      'Rio de Janeiro',
      'Brasilia',
      'Fortaleza'
    ],
    correctAnswer: 'Brasilia',
    image: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2011/05/brazil-1200x720.jpg',
    alt: 'Brazil'
  },
  {
    question: 'What is the capital of Canada?',
    answers: [
      'Toronto',
      'Montreal',
      'Ottawa',
      'Quebec City'
    ],
    correctAnswer: '',
    image: 'https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Canada-Toronto_1388944829-1440x823.jpg',
    alt: 'Canada'
  }
]


const store = {
  quizStarted: false,
  questionNumber: 1,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

function welcomePage() {
  return `
  <section class="container">
    <h1>Welcome to World Capital Game!</h1>
    <p>Go through the following questions to see if you're familiar with the world's capitals!</p>
    <button>
      <span>Play now!</span>
    </button>
  </section>`
}

function questionPage(question) {
  return `
  <section class="container">
    <p>Question ${store.questionNumber}</p>
    <img src="${question.image}" alt="${question.alt}">
    <form action="#">
        <p>What is the capital of ${question.alt}?</p>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">${question.answers[0]}</label><br>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">${question.answers[1]}</label><br>
        <input type="radio" id="other" name="gender" value="other">
        <label for="other">${question.answers[2]}</label>
        <input type="radio" id="other" name="gender" value="other">
        <label for="other">${question.answers[3]}</label>
        <button>
          <span>Submit</span>
        </button>
    </form>
  </section>`
}

function rightPage() {
  return `
  <section class="container">
    <h2>You got it right!</h2>
    <p>You have ${store.score} answers right out of 6 right.</p>
    <p>Question ${store.questionNumber} out of 6</p>
    <button>
      <span>Next</span>
    </button>
  </section>`
}

function wrongPage(question) {
  return `
  <section class="container">
    <h2>Oops! You got that wrong</h2>
    <p>The right answer is "${question.correctAnswer}"</p>
    <p>You have ${store.score} answers right out 6</p>
    <p>Question ${store.questionNumber} out of 6</p>
    <button>
      <span>Next</span>
    </button>
  </section>`
}

function finishPage(question) {
  return `
  <section class="container">
    <h2>You finished!</h2>
    <p>You got ${store.score} answers right out 6</p>
    <button>
      <span>Restart Quiz</span>
    </button>
  </section>`
}

/********** RENDER FUNCTION(S) **********/

function renderWelcome() {
  let storePage = welcomePage();
  $('main').html(storePage)
}

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function test() {
  $('body').click(function () {
    renderWelcome()
  })
}


function main() {
  test()
}

$('main');