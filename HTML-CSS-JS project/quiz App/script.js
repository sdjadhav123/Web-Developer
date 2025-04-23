const questions = [
    {
        question: "What is the full from of HTML?",
        answers: [
            {text: "Hyper text markup language", correct: true},
            {text: "Hyper type markup language", correct: false},
            {text: "Hyper text markeeu language", correct: false},
            {text: "Hyperly text markup language", correct: false},
        ]
},
/*{
    question: "What is the use of HTML?",
    answers: [
        {text: "Create and desing watsaap ", correct: false},
        {text: "create youtube viedo", correct: false},
        {text: "use to solving problem", correct: true},
        {text: "It is use to design web page", correct: true},
    ]
},*/


{
    question: "What is the full from of CSS?",
    answers: [
        {text: "Casacading style sheets", correct: true},
        {text: " Casacading style sheets language", correct: false},
        {text: "Casacading style symbol", correct: false},
        {text: "Casacading system sheets", correct: false},
        
    ] 
},

/*{
    question: "By using css our design is unique or complex?",
    answers: [
        {text: "Complex design", correct: false},
        {text: "unique design", correct: true},
        {text: "Design is complicated", correct: false},
        {text: "Flexible design", correct: false},
        
    ] 
},*/


{
    question: "Where is the use of Media-query?",
    answers: [
        {text: "Media-query is use in java", correct: false},
        {text: "Media-query use in css", correct: true},
        {text: "Media-query is use in assembly language", correct: false},
        {text: "Medai-query use in html", correct: false},
    ]
},
/*{
    question: "Why use grid in css?",
    answers: [
        {text: "Implementation", correct: true},
        {text: "Design is looking nice", correct: false},
        {text: "complex design", correct: false},
        {text: "Simplifies Responsive Desig", correct: true},
    ]
},*/
{
    question: "What is the full from of JS?",
    answers: [
        {text: "javascript language", correct: true},
        {text: "JavaScript", correct: true},
        {text: "JavaStyle", correct: false},
        {text: "Javasystem language", correct: false},
        
    ] 
}, 

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let  currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currrentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>
    {
        const button = doucument.creatElement("button");
        button.innerHTML = answer.text;
        button.CalssList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.dispaly = "none";
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.CalssList.add("correct");
        score++;
    }
    else{
        selectedBtn.CalssList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextbutton();
    }
    else{
        startQuiz();
    }
});
startQuiz();
