let theQuestion = [
    {
        question : "Where did Scotch whisky originate?",
        Options : {
            a : "England",
            b : "Ireland",
            c : "Scotland",
            d : "Iceland"
        },
        answer: 'c'
    },
    {
        question : "What sort of animal is Walt Disney's Dumbo?",
        Options : {
            a : "Deer",
            b : "Rabbit",
            c : "Donkey",
            d : "Elephant"

        },
        answer: 'd'
    },
    {
        question : "What is the capital of Finland?",
        Options : {
            a : "helsinki",
            b : "Copenhagen",
            c : "Oslo",
            d : "Stockholm"

        },
        answer: 'a'
    },
    {
        question : "Radio was invented by ?",
        Options : {
            a : "alexander graham bell",
            b : "Nikola Tesla",
            c : "Thomas Edison",
            d : "Benjamin Franklin"

        },
        answer: 'b'
    },

   
]

let counter =0

///// creat the variable for the question and buttons

//const quizQuestionElement = document.querySelector('#quiz-question')
const quizQuestionElement = document.querySelector('#quiz-question')
//console.log (quizQuestionElement);

//const test = document.querySelector('.container-Main p')
//console.log(test)

const buttonA = document.querySelector('#button-a')
const buttonB = document.querySelector('#button-b')
const buttonC = document.querySelector('#button-c')
const buttonD = document.querySelector('#button-d')
//console.log(buttonA);
const buttonRestart = document.querySelector('#button-restart')

const wrongMessage = document.createElement("h2");
const restartButton = document.createElement('button');
const youWin = document.createElement('h2');
const winning = document.querySelectorAll(".container-Second p")


/////This function displays the question on the page
function displayQuestion (question){
  ///  console.log(question)
 quizQuestionElement.textContent = question.question;
 buttonA.innerText = question.Options.a;
 buttonB.innerText = question.Options.b;
 buttonC.innerText = question.Options.c;
 buttonD.innerText = question.Options.d;
// buttonRestart.innerText = "Restart"
}
displayQuestion(theQuestion[counter]);


//////----- Event Listner

buttonA.addEventListener("click",myButtons)
buttonB.addEventListener("click",myButtons)
buttonC.addEventListener("click",myButtons)
buttonD.addEventListener("click",myButtons)

///function myButtons to check the answer
   
 function myButtons(events){
     console.log(events.target, events.target?.textContent);
    console.log("test",theQuestion[counter].Options[theQuestion[counter].answer])
   if (events.target.textContent !== theQuestion[counter].Options[theQuestion[counter].answer])
   {

    wrongMessage.innerText = 'You Lose';
    wrongMessage.style.color='white';
    document.body.appendChild(wrongMessage);

    restartButton.innerText='Restart'
    document.body.appendChild(restartButton);
    restartButton.addEventListener("click",restartQuiz)

    }  else {
        if( counter === theQuestion.length-1){
            endGame();
        }else{
            counter +=1
    displayQuestion(theQuestion[counter]);
    moneyWins (winning[winning.length-1- counter])
        }
   }
 }


 ///////// Restart function

// restartButton.addEventListener("click",restartQuiz)

function restartQuiz(){
   // console.log('hello');
   /// window.location.reload()
 counter = 0;
 displayQuestion(theQuestion[counter])
 wrongMessage.remove();
 restartButton.remove();
 youWin.remove();
 }

 ////// function to end the game

 function endGame(){


youWin.innerText = 'You are a Millionaire';
youWin.classList.add ("win");
document.body.appendChild(youWin);
restartButton.innerText='Restart'
document.body.appendChild(restartButton);
restartButton.addEventListener("click",restartQuiz)
}

//////////// Function to highlight the wins

function moneyWins (){
const winning = document.querySelectorAll(".container-Second p")

console.log(winning[winning.length-1- counter]);
}
moneyWins();

