const quizData = [
    {
        question:"How old is Florin?",
        a: "10",
        b: "17",
        c: "26",
        d: "110",
        correct: "c"
    },
    {
        question: "What is the best programming language?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        correct: "a"
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai",
        correct: "b"
    }
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let quiz = document.getElementById("quiz");

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText= currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;    
};

function getSelected(){
    let answersEls = document.querySelectorAll(".answer");
    answersEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }        
    });
};

submitBtn.addEventListener("click",() => {    

    currentQuiz ++;
    getSelected();
    if (currentQuiz < quizData.length){        
        loadQuiz();
        answerChecked = document.getElementById(answer).checked = false;
    }
    else{
        quiz.innerHTML = `
        <h2>You got ${score} correct questions </h2>
        <button>Reload</button>
        `

    }   

});