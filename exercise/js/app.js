let currentProblem = 1;
let currentScore = 0;
let listOfProblems = [];
let shuffleArr = [];

const allAnswers = document.querySelectorAll('li');

let score = document.querySelector('span.currentScore');

let problemNum = document.querySelector('span.currentProblem');

const problemElem = document.getElementById('problem');

let header = document.querySelector('header');

let text = header.querySelector('p');

let problemDiv = problemElem.querySelector('div.expression');


let answerSection = document.getElementById('answers');


/**
 * Utility function to generate a random number based on max
 * @param {number} max
 */
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));

}

function getRandomNumberMaybeNeg() {

    let num = Math.floor(Math.random() * 10) + 1;
    num *= Math.round(Math.random()) ? 1 : -1;
    return num

}


function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
}

function createProblem(operatorArr) {
    for (let i = 0; i < 10; i++) {
        let problem = {
            leftNum: getRandomNumber(10),
            rightNum: getRandomNumber(10),
            correctAnswer: 0,
            wrongAnswer2: 0,
            wrongAnswer3: 0,
            wrongAnswer4: 0,
            operand: ""
        }

        operator = operatorArr[Math.floor(Math.random() * operatorArr.length)];


        if (operator.includes('+')) {
            problem.correctAnswer = problem.leftNum + problem.rightNum;
            problem.wrongAnswer2 = getRandomNumber(81);
            problem.wrongAnswer3 = getRandomNumber(81);
            problem.wrongAnswer4 = getRandomNumber(81);
            problem.operand = '+';
        }
        else if (operator.includes('-')) {
            problem.correctAnswer = problem.leftNum - problem.rightNum;
            problem.wrongAnswer2 = getRandomNumberMaybeNeg();
            problem.wrongAnswer3 = getRandomNumberMaybeNeg();
            problem.wrongAnswer4 = getRandomNumberMaybeNeg();
            problem.operand = '-';
        }
        else if (operator.includes('*')) {
            problem.correctAnswer = problem.leftNum * problem.rightNum;
            problem.wrongAnswer2 = getRandomNumber(81);
            problem.wrongAnswer3 = getRandomNumber(81);
            problem.wrongAnswer4 = getRandomNumber(81);
            problem.operand = '*';
        }

        else if (operator.includes('/')) {
            problem.correctAnswer = problem.leftNum / problem.rightNum;
            problem.wrongAnswer2 = getRandomNumber(81);
            problem.wrongAnswer3 = getRandomNumber(81);
            problem.wrongAnswer4 = getRandomNumber(81);
            problem.operand = '/';
        }



        listOfProblems.push(problem);
    }
}

function getUserChoice() {

    document.getElementById('#btnStartOver').onclick = function () {
        var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        for (var checkbox of markedCheckbox) {
            if (checkbox.checked)
                document.body.append(checkbox.value + ' ');
        }
        return markedCheckbox;
    }
}




function displayQuestionAndAnswers() {

    const problemElem = document.getElementById('problem');

    listOfProblems.forEach((problem) => {


        let problemDesc = `${problem.leftNum} ${problem.operand} ${problem.rightNum}`;

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

function choseQuestionTypes() {

    text.innerText = "Please choose the math operations you would like to practice and click start";

    let startBtn = document.querySelector('button');

    startBtn.innerText = "Start";

    makeHidden(problemElem);


    allAnswers.forEach((li) => {

        let arr = ['Addition', 'Subtraction', 'Multiplication', 'Division']

        
        

        let span = document.createElement('span');

        let input = document.createElement('input')
        
        input.type = 'checkbox';    
        li.appendChild(input)
        
        
        li.appendChild(span)

        span.innerText = arr[0];

    });

    li.appendChild(li);



}






function showHidden(element) {
    element.classList.remove('hidden');
    element.classList.add('show-hide');
}

function makeHidden(element) {
    element.classList.remove('show-hide');
    element.classList.add('hidden');
}



document.addEventListener('DOMContentLoaded', () => {

    const operatorArr = ['-', '+'];

    choseQuestionTypes();

    createProblem(operatorArr);

    displayQuestionAndAnswers();


    allAnswers.forEach((answer) => {
        answer.addEventListener('click', (event) => {
            event.preventDefault();

            if (answer.classList.contains('correct')) {

                currentScore++;
                currentProblem++;

            } else

                currentProblem++;

            createProblem(operatorArr);

            displayQuestionAndAnswers();

            if (currentProblem > 10) {

                currentProblem = 10;

                let problemDiv = problemElem.querySelector('div.expression');

                let answerSection = document.getElementById('answers');



                makeHidden(problemDiv);
                makeHidden(answerSection);
                makeHidden(text);


            }

            score.innerText = `${currentScore}`;

            problemNum.innerText = `${currentProblem}`;

        });



    });


    let startOverBtn = document.querySelector('button');

    startOverBtn.addEventListener('click', () => {


        showHidden(problemDiv);

        showHidden(answerSection);

        showHidden(text);


        currentScore = 0;

        currentProblem = 1;

        score.innerText = `${currentScore}`

        problemNum.innerText = `${currentProblem}`

        createProblem(operatorArr);

        displayQuestionAndAnswers();


    });

});


