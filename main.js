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
    {
        question : "what my name ?",
        Options : {
            a : "gourav",
            b : "gaurav",
            c : "gurav",
            d : "goorav"

        },
        answer: 'b'
    }

   
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

const wrongMessage = document.createElement("img");
const restartButton = document.createElement('button');
const youWin = document.createElement('img');
const winning = document.querySelectorAll(".container-Second p")
const section1 = document.getElementById('start-game')
const section2 = document.getElementById("game")
const buttonStart =  document.getElementById('button-start')
section2.style.display='none'
buttonStart.addEventListener('click',()=> {
section1.style.display='none';
section2.style.display='block';
})


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
    console.log(theQuestion[counter].Options[theQuestion[counter].answer])
   if (events.target.textContent !== theQuestion[counter].Options[theQuestion[counter].answer])
   {

    //wrongMessage.innerText = 'You Lose';
    wrongMessage.classList.add ("lose")
    wrongMessage.src="./Images/original.gif"
    //wrongMessage.style.color='white';
    document.body.appendChild(wrongMessage);

    restartButton.innerText='Restart'
    restartButton.classList.add ("restart")
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
 winning.forEach((winningElemment, index)=> {
     if (index !== winning.length - 1) {
         console.log('the index is ', index)
         winningElemment.classList.remove("Amount")
     }
    })
 section2.style.display='none'
 section1.style.display='flex'
 }

 ////// function to end the game

 function endGame(){


youWin.innerText = 'You are a Millionaire';
youWin.classList.add ("win");
youWin.src="./Images/giphy.gif"
document.body.appendChild(youWin);
restartButton.innerText='Restart'
document.body.appendChild(restartButton);
restartButton.addEventListener("click",restartQuiz)
}

//////////// Function to highlight the wins

function moneyWins (){
const winning = document.querySelectorAll(".container-Second p")
winning[winning.length-1- counter].classList.add("Amount")
winning[winning.length-2- counter].classList.remove("Amount")
console.log(winning[winning.length-1- counter]);
}
moneyWins();


/////function for the countdown timer
// const timerGame = document.querySelector('h1');
// function timeCount() {
//     let timeCountDown = null;
//   let t imeSecond = 10;
//   timerGame.innerHTML = `00:${timeSecond}`;
//   timeCountDown = setInterval(() => {
//     console.log('gygtgtgtg');
//     timeSecond--;
//     displayTimeTwoDigit(timeSecond);
//     if (timeSecond <= 0 || timeSecond < 1) {
//       clearInterval(timeCountDown);
//       toggleloseModal();
//     }
//   }, 1000);
// }
// function displayTimeTwoDigit(second) {
//   const min = Math.floor(second / 60);
//   const sec = Math.floor(second % 60);
//   timerGame.innerHTML = `${min < 10 ? '0' : ''}${min}:${
//     sec < 10 ? '0' : ''
//   }${sec}`;
// }

