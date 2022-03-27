let currentProblem = 1;
let currentScore = 0;
let listOfProblems = [];
let shuffleArr = [];


/**
 * Utility function to generate a random number based on max
 * @param {number} max
 */
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
}

function createProblem() {
    for (let i = 0; i < 10; i++) {
        let problem = {
            leftNum: getRandomNumber(10),
            rightNum: getRandomNumber(10),
            correctAnswer: 0,
            wrongAnswer2: 0,
            wrongAnswer3: 0,
            wrongAnswer4: 0
        }

        problem.correctAnswer = problem.leftNum * problem.rightNum;
        problem.wrongAnswer2 = getRandomNumber(81);
        problem.wrongAnswer3 = getRandomNumber(81);
        problem.wrongAnswer4 = getRandomNumber(81);



        shuffleArr = shuffleArray([problem.correctAnswer, problem.wrongAnswer2, problem.wrongAnswer3, problem.wrongAnswer4]);


        listOfProblems.push(problem);

    }

}

function displayQuestionAndAnswers() {


    const problemElem = document.getElementById('problem');

    listOfProblems.forEach((problem) => {

        let problemDesc = `${problem.leftNum} * ${problem.rightNum}`;

        problemElem.querySelector('div.expression').innerText = problemDesc;

        shuffleArr = shuffleArray([problem.correctAnswer, problem.wrongAnswer2, problem.wrongAnswer3, problem.wrongAnswer4]);

        const ul = document.querySelector('ul');

        shuffleArr.forEach((answer) => {

            const li = document.querySelector('li');

            if (answer === problem.correctAnswer) {
                li.innerText = problem.correctAnswer;
                li.setAttribute('class', 'correct')
            } else {

                li.innerText = answer;
                li.setAttribute('class', 'wrong')

            }

            ul.appendChild(li);
        });

    });
}



document.addEventListener('DOMContentLoaded', () => {

    createProblem();

    displayQuestionAndAnswers();

    const allAnswers = document.querySelectorAll('li');

    let score =  document.querySelector('span.currentScore');

    let problemNum =  document.querySelector('span.currentProblem');

    allAnswers.forEach((answer) => {
        answer.addEventListener('click', () => {

            if(answer.classList.contains('correct')){

                currentScore++;

                currentProblem++;

                score.innerText = `${currentScore}`;

                problemNum.innerText.currentProblem;

        
            }

        })
    })

})



