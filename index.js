const quiz = [
  {
    question: 'appleの意味',
    answers: ['りんご', 'みかん', 'ぶどう', 'パイン'],
    correct: 'りんご'
  },
  {
    question: 'dogの意味',
    answers: ['猫', '犬', 'カッパ', '鳥'],
    correct: '犬'
  },
  {
    question: '1 + 1 = ?',
    answers: ['1', '2', '3', '4'],
    correct: '2'
  }
]
const $button = document.getElementsByTagName('button')
const buttonLength = document.getElementsByTagName('button').length
let quizCount = 0
const quizLength = quiz.length
const init = () => {
  document.getElementById('js-quiz').textContent = quiz[quizCount].question
  let buttonIndex = 0
  while(buttonIndex < buttonLength){
    document.getElementsByTagName('button')[buttonIndex].textContent = quiz[quizCount].answers[buttonIndex]
    buttonIndex++
  }
}
init()

nextQuiz = () => {
  init()
}

// 正誤判断
let hundleIndex = 0
let score = 0
const clickHandler = (e) => {
  if(e.target.textContent === quiz[quizCount].correct){
    window.alert('正解')
    score++
  } else {
    window.alert('不正解')
  }
  quizCount++
  if(quizCount < quizLength){
    nextQuiz()
  } else {
    window.alert('終了です。あなたの点数は' + score + '/' + quizLength+ 'です')
  }
}
while(hundleIndex < buttonLength){
  $button[hundleIndex].addEventListener('click', (e) => {
    clickHandler(e)
  })
  hundleIndex++
}
