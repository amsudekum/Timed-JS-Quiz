let time;
const startingSeconds = 90;
let currentScore = 0;
let currentQuestionIndex = 0;
let isCorrect;

const questions = [
    {
        "text": 'What is a const?',
        "options": [
            'A. A variable.', 
            'B. A variable that cannot be changed.', 
            'C. It is constant.', 
            'D. It is a constable.',
        ],
        "correctOption": 1
    },
    {
        "text": 'Which of these data types is a string?',
        "options": [
            'A. A string.', 
            'B. "A string."', 
            'C. String.', 
            'D. More string.'
        ],
        "correctOption": 1
    },

    {
        "text": 'Which operator checks that the value and data types are the same?',
        "options": [
            'A. =', 'B. ==', 'C. !==' , 'D. ==='
        ],
        "correctOption": 3
    },

    {
        "text": 'How do you call a function?',
        "options": [
            'A. callFunction', 'B. callfunction()', 'C. callFunction()', 'D. CALLFUNCTION!'
        ],
        "correctOption": 2
    },

    {
        "text": 'What is a parameter?',
        "options": [
            'A. A para-meter', 'B. A meter.', 'C. Allows functions to accept inputs.', 'D. Paramaters do not exist.'
        ],
        "correctOption": 2
    },

    {
        "text": '>What is the first numbered position in an array?',
        "options": [
            'A. 0', 'B. 0.0', 'C. 1', 'D. 1.0'
        ],
        "correctOption": 0
    },

    {
        "text": 'What does .length do?',
        "options": [
            'A. Gives the length of your string in px.', 
            'B. Gives the length of your string in inches.', 
            'C. Gives the length of all your code.', 
            'D. Returns the length of an object.'
        ],
        "correctOption": 3
    },

    {
        "text": 'What does a loop do?',
        "options": [
            'A. Repeats a set of instructions until a specified condition is met. ', 
            'B. It loops your code around.', 
            'C. It resets your code.', 
            'D. It transform your code into a loop.'
        ],
        "correctOption": 0
    },

    {
        "text": 'What does .forEach() do?',
        "options": [
            'A. Executes the same code for each element.', 'B. Lists elements of an array. ', 'C. Lists every array in a project.', 'D. It does each and everything it can.'
        ],
        "correctOption": 0
    }, 

    {
        "text": 'What does an Else If statement do?',
        "options": [
            'A. Complicates our code.', 
            'B. Gives other developers something fun to read during review.', 
            'C. Allows for more than two possible incomes in an If statement.', 
            'D. Makes If statements harder to read. '
        ],
        "correctOption": 2
    },

    // const questions = [
        // {},
        // {},
        // {},
        // {}
    // ];
];

$('document').ready(() => {
    $('.container').hide();
    $('#endpage').hide();
    $('correctnessRight').hide()
    $('correctnessWrong').hide()

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
    $('#questionbutton-4').on('click', () => {
        submitAnswer(3);
        nextQuestion();
    });

    $('#start-button').on('click', () => {
        $('#starter-container').hide();
        currentScore = 0;
        currentQuestionIndex = 0;
        time = startingSeconds;
        updateQuestionDisplay();
        $('.container').show();
        $("#countdowntimer").show();
        $('#scoredisplay').show()
        $('#correctnessRight').hide()
        $('#correctnessWrong').hide()
        setInterval(updateCoundown, 1000);
    })
   
});

function updateQuestionDisplay() {
    const currentQuestion = questions[currentQuestionIndex];
    $('#question').text(currentQuestion.text);
    $('#questionbutton-1').text(currentQuestion.options[0])
    $('#questionbutton-2').text(currentQuestion.options[1])
    $('#questionbutton-3').text(currentQuestion.options[2])
    $('#questionbutton-4').text(currentQuestion.options[3])
};

function updateCoundown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    $("#countdowntimer").text(`${minutes} : ${seconds}`);
    time--;
};

function submitAnswer(currentAnswer) {
    let currentQuestion = questions[currentQuestionIndex];

    isCorrect = currentAnswer == currentQuestion.correctOption
    if (isCorrect) {
        currentScore += 10 
        $('#correctnessRight').show()
        $('#correctnessWrong').hide()
    } else {
        time -= 10;
        $('#correctnessRight').hide()
        $('#correctnessWrong').show()
    }
};

  
     

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        updateQuestionDisplay()
        localStorage.setItem('currentScore', 'score');
    } else {
        clearInterval();
        $('#endpage').show()
        $('#playerScore').show()
        showScore(currentScore)
        $("#countdowntimer").hide();
        $('.container').hide();
        $('#scoredisplay').hide()
    }

 function showScore() {
    const playerScore=currentScore;
    let yourScoreIs= 'Your score is ' + playerScore + '!';
    $('#playerScore').text(yourScoreIs)
 }       
};

function submitScoreWithName(name) {


   
}

// let playerInitials = $('#playerInitials');
// let highScoresList = $('highScoresList');
// const saveScoreBtn = $('#saveScoreBtn');
// const finalScore = $('#finalScore')
// const mostRecentScore = localStorage.getItem('currentScore');
// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// const MAX_HIGH_SCORES =5;


// finalScore.innerText = mostRecentScore;


// $('#playerInitials').on('keyup', () =>{
//     saveScoreBtn.disabled = !playerInitials.value;

// })

// saveHighScore = (e) => {
//     e.preventDefault();

// }

// const score = {
//     score: mostRecentScore,
//     name: playerInitials.value,
// };

// highScores.push(score);

// highScores.sort( (a,b) => b.score - a.score);
// highScores.splice(5);

// localStorage.setItem('highScores', JSON.stringify(highScores));

// highScoresList.innerHTML =
//     highScores.map( score => {
//         return <li class='scoreList'>${score.playerInitials} ${score.score}</li>
//         })
//         .join("");
