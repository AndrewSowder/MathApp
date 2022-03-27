let currentProblem = 0;
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
            wrongAnswer2:0,
            wrongAnswer3:0,
            wrongAnswer4:0
        }

        problem.correctAnswer = problem.leftNum * problem.rightNum;
        problem.wrongAnswer2 = getRandomNumber(81);
        problem.wrongAnswer3 = getRandomNumber(81);
        problem.wrongAnswer4 = getRandomNumber(81);



        shuffleArr = shuffleArray([problem.correctAnswer, problem.wrongAnswer2, problem.wrongAnswer3, problem.wrongAnswer4]);


        listOfProblems.push(problem);

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



