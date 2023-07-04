// const { handle } = require("express/lib/application");

const questions=[
    {questions:"which is the largest bird in the world?",
    answers:[{
        text:"shark",  correct:false },
    {text:"bluewhale",correct:true},
    {text:"elephant",correct:false},
    {text:"Girrafe",correct:false}]

},
    {questions:"which is the largest desert in the world?",
    answers:[{
        text:"kalahari",  correct:false },
    {text:"Gobi",correct:false},
    {text:"Sahara",correct:false},
    {text:"Antarctica",correct:true}]
},

    {questions:"which is the smallest ocean in the world?",
    answers:[{
        text:"africa",  correct:false },
    {text:"australia",correct:true},
    {text:"arctic",correct:false},
    {text:"asia",correct:false}]
    },

    {questions:"which is the smallest ocean in the world?",
    answers:[{
        text:"africa",  correct:false },
    {text:"australia",correct:true},
    {text:"arctic",correct:false},
    {text:"asia",correct:false}]
    }

]
const questionElement=document.getElementById("question")

const answerElement=document.getElementById("answer-button")
const nextButton=document.getElementById("next-btn")
let currentQuestionsIndex=0;
let score=0;
    function start_Quiz(){
        resetState();
        currentQuestionsIndex=0;
        score=0;
        nextButton.innerHTML="next";
        showQuestion();


    }
    function showQuestion(){
        let currentQuestion=questions[currentQuestionsIndex];
        let questionNo=currentQuestionsIndex+1;
        questionElement.innerHTML=questionNo+"." +currentQuestion.questions;
        currentQuestion.answers.forEach(answer=>{
            const button=document.createElement("button");
            button.innerHTML=answer.text;
            button.classList.add("btn");
            answerbutton.appendChild(button);
            if(answer.correct){
                button.dataset.correct=answer.correct;

            }
            button.addEventListener("click",selectAnswer)
        });
    }
    function resetState(){
        nextButton.style.display="none";
        while(answerbutton.firstChild){
            answerbutton.removeChild(answerbutton.firstChild);
        }
    }
    function selectAnswer(e){
            const selectBtn=e.target;
            const isCorrect=selectBtn.dataset.correct==="true";
            if(isCorrect){
                selectBtn.classList.add("correct");
                score++;

            }
            else{
                selectBtn.classList.add("incorrect")
            }
            Array.from(answerbutton.children).forEach(button=>{
                if(button.dataset.correct==="true"){
                    button.classList.add("correct");
                }
                button.disabled=true;

            });
            nextButton.style.display="block";
             
            
    }
    function showScore(){
        resetState();
        questionElement.innerHTML=`you scored ${score} out of  ${questions.length}!`;
        nextButton.innerHTML="Play Again";
        nextButton.style.display="block";
    }

    function handleNextButton(){
         currentQuestionsIndex++;
         if (currentQuestionsIndex<questions.length) {
            showQuestion();
            
         }
         else{
            showScore();
         }
    }
    nextButton.addEventListener("click",()=>{
        if (currentQuestionsIndex<questions.length) {
            handleNextButton();
            
        }
        else{
            start_Quiz();

        }
    })
    start_Quiz();