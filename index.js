let quiz = 'appleの意味'
let answers = ['りんご', 'みかん', 'ぶどう', 'パイン']
let correct = 'りんご'

document.getElementById('js-quiz').textContent = quiz

let buttonIndex = 0
const buttonLength = document.getElementsByTagName('button').length
while(buttonIndex < buttonLength){
  document.getElementsByTagName('button')[buttonIndex].textContent = answers[buttonIndex]
  buttonIndex++
}