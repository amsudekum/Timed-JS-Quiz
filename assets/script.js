let questions = [
    {
        "text": 'What is a const?',
        "options": [
            'A. A variable.', 
            'B. A variable that cannot be changed.', 
            'C. It is constant.', 
            'D. It is a constable.',
        ],
        "correct": 1
    },
    {
        "text": 'Which of these data types is a string?',
        "options": [
            'A. A string.', 
            'B. "A string."', 
            'C. String.', 
            'D. More string.'
        ],
        "correct": 1
    },

    {
        "text": 'Which operator checks that the value and data types are the same?',
        "options": [
            'A. =', 'B. ==', 'C. !==' , 'D. ==='
        ],
        "correct": 3
    },

    {
        "text": 'How do you call a function?',
        "options": [
            'A. callFunction', 'B. callfunction()', 'C. callFunction()', 'D. CALLFUNCTION!'
        ],
        "correct": 2
    },

    {
        "text": 'What is a parameter?',
        "options": [
            'A. A para-meter', 'B. A meter.', 'C. Allows functions to accept inputs.', 'D. Paramaters do not exist.'
        ],
        "correct": 2
    },

    {
        "text": '>What is the numbered position in an array?',
        "options": [
            'A. 0', 'B. 0.0', 'C. 1', 'D. 1.0'
        ],
        "correct": 0
    },

    {
        "text": 'What does .length do?',
        "options": [
            'A. Gives the length of your string in px.', 'B. Gives the length of your string in inches.', 'C. Gives the length of all your code.', 'D. Returns the length of an object.'
        ],
        "correct": 3
    },

    {
        "text": 'What does a loop do?',
        "options": [
            'A. Repeats a set of instructions until a specified condition is met. ', 'B. It loops your code around.', 'C. It resets your code.', 'D. It transform your code into a loop.'
        ],
        "correct": 0
    },

    {
        "text": 'What does .forEach() do?',
        "options": [
            'A. Executes the same code for each element.', 'B. Lists elements of an array. ', 'C. Lists every array in a project.', 'D. It does each and everything it can.'
        ],
        "correct": 0
    }, 

    {
        "text": 'What does an Else If statement do?',
        "options": [
            'A. Complicates our code.', 'B. Gives other developers something fun to read during review.', 'C. Allows for more than two possible incomes in an If statement.', 'D. Makes If statements harder to read. '
        ],
        "correct": 2
    }
];

let currentScore = 0;
let currentQuestionIndex = 0;
let currentAnswerIndex = 0;

$('document').ready(() => {
    $('.container').hide();

    $('#questionbutton-1').on('click', () =>{
        submitAnswer(0);
        nextQuestion();
    });
    $('#questionbutton-2').on('click', () =>{
        submitAnswer(1);
        nextQuestion();
    });
    $('#questionbutton-3').on('click', () =>{
        submitAnswer(2);
        nextQuestion();
    });
    $('#questionbutton-4').on('click', () =>{
        submitAnswer(3);
        nextQuestion();
    });

    $('#start-button') .on('click', () => {
        $('#starter-container').hide();
        
        currentScore = 0;
        currentQuestionIndex = 0;
        updateQuestionDisplay();
        $('.container').show();
    })
    // .on('#start-button').on('click', () => {
    
    // })
});

function updateQuestionDisplay() {
    const currentQuestion = questions[currentQuestionIndex];
    const currentAnswer = questions[currentAnswerIndex];
    $('#question').text(currentQuestion.text);
    $('#questionbutton-1').text(currentAnswer.options[0])
    $('#questionbutton-2').text(currentAnswer.options[1])
    $('#questionbutton-3').text(currentAnswer.options[2])
    $('#questionbutton-4').text(currentAnswer.options[3])
};

function submitAnswer(answer) {
    // check correctness
    // add to currentScore
    // if wrong deduct time
}

function nextQuestion() {
    // increment currentQuestionIndex
    // if currentQuestionIndex refers to an index that exists then updateQuestionDisplay
    // else show the score page
}

function submitScoreWithName(name) {
    // save currentScore to highScores (local storage)
    // show the high scores
}

