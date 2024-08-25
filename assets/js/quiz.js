let timeId;
let time = 60
let score = 0
let questionIndex = 0
let questionTitle = document.querySelector('.question-title')
let choiceDiv = document.querySelector('.js-choices-div')
let playAgainBtn = document.querySelector('.play-again-btn')

const questions = [
    {
        intro: 'Which team is able to score points?',
        choices: ['The defending team', 'The serving team', 'Both teams', 'Neither team'],
        correct: 'The serving team'
    },
    {
        intro: 'How many points to win a pickleball game?',
        choices: ['7', '21', '15', '11'],
        correct: '11'
    },
    {
        intro: 'What is another name for the non-volley zone',
        choices: ['Kitchen', 'Laundry Room', 'Garage', 'Backyard'],
        correct: 'Kitchen'
    },
    // {
    //     intro: 'How many points to win a pickleball game?',
    //     choices: ['7', '21', '15', '11'],
    //     correct: '11'
    // },
    // {
    //     intro: 'How many points to win a pickleball game?',
    //     choices: ['7', '21', '15', '11'],
    //     correct: '11'
    // },
]



document.querySelector('.js-start-btn').addEventListener('click', showQuestions)
document.querySelector('.js-start-btn').addEventListener('click', countDown)


function countDown() {
    timeId = setInterval(function() {
        document.querySelector('.js-time-remaining').innerHTML = `Time remaining: ${time}`
        time--

        if (time === -1 || time < 0) {
            clearInterval(timeId)
            document.querySelector('.js-time-remaining').innerHTML = '0'
            endGame()
        }
    }, 1000)
}

function showQuestions() {
    let questionChoice = questions[questionIndex]
    choiceDiv.innerHTML = ''
    questionTitle.innerHTML = questionChoice.intro
    questionChoice.choices.forEach((choice) => {
        let buttonElement = document.createElement('button')
        buttonElement.classList.add('btn-styling')
        // buttonElement.setAttribute('value', choice)
        buttonElement.textContent = choice
        // console.log(questionChoice)
        choiceDiv.append(buttonElement)
        buttonElement.addEventListener('click', nextQuestion)
    })
}

function nextQuestion(event) {
    isAnswerCorrect(event)

    if (questionIndex < questions.length) {
        showQuestions()
    } else {
        endGame()
    }
}

function isAnswerCorrect(event) {
    let playerChoice = event.target.innerHTML
    let correctAnswer = questions[questionIndex].correct
    if (playerChoice === correctAnswer) {
        score++
        questionIndex++
    } else {
        time = time -5
        questionIndex++
    }
}

function endGame() {
    questionTitle.innerHTML = `Your score is: ${score}`
    time = 0
    document.querySelector('.js-time-remaining').innerHTML = 'Time remaining: 0'
    choiceDiv.classList.add('hidden')
    playAgainBtn.classList.remove('hidden')
    document.querySelector('.js-start-btn').classList.add('hidden')
}

playAgainBtn.addEventListener('click', playAgain)

function playAgain() {
    location.reload()
}