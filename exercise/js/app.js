let currentProblem = 0;
let currentScore = 0;
let listOfProblems = [];
let answerArr = [];
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
            correctAnswer: 0
        }

        problem.correctAnswer = problem.leftNum * problem.rightNum;

        listOfProblems.push(problem);


        answerArr = [problem.correctAnswer, getRandomNumber(81), getRandomNumber(81), getRandomNumber(81)];

        shuffleArr = shuffleArray(answerArr);

        console.log(problem)
    }

}

function displayAnswers() {
    const ul = document.querySelector('ul');
    shuffleArr.forEach((answer) => {
        const li = document.querySelector('li');
        li.innerText = answer;
        ul.appendChild(li);
    });
}



document.addEventListener('DOMContentLoaded', () => {

    createProblem();

    const problemElem = document.getElementById('problem');


    let problemDesc = `${listOfProblems[0].leftNum} * ${listOfProblems[0].rightNum}`

    problemElem.querySelector('div.expression').innerText = problemDesc;

    displayAnswers();








})



