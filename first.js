const buttons=document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click',game);
});
const divRes=document.querySelector('.results');
const divSco=document.querySelector('.score');
const divWin=document.querySelector('.winner');

let playerScore=0;
let computerScore=0;
function game(e){
    let playerSelection=Number(e.target.value);
    let computerSelection=computerPlay();
    let roundResult=playRound(playerSelection,computerSelection);
    if(roundResult==1){
        playerScore++;
        divRes.textContent='You win! '+translate(playerSelection)+' beats '+translate(computerSelection);
    }
    else if(roundResult==2){
        computerScore++;
        divRes.textContent='You lose! '+translate(computerSelection)+' beats '+translate(playerSelection);
    }
    else if(roundResult==0){
        divRes.textContent='Draw '+translate(playerSelection)+' : '+translate(computerSelection);
    }
    divSco.textContent='score is '+playerScore+' - '+computerScore;                  
    if(playerScore==5 || computerScore==5){
        divWin.textContent+=(computerScore==playerScore)?' draw':(playerScore==5)?' player won':' computer won';
    }
}

//result of round
function playRound(playerSelection,computerSelection){
    if(playerSelection==computerSelection)
    return 0; //draw
    let tf=playerSelection*10+computerSelection;
    if([21,2,10].includes(tf))
        return 1; //win
    if([12,20,1].includes(tf))
        return 2; //lose
}

//computer's turn
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function computerPlay(){
    let hand=getRandomInt(3);
    return hand;
}

//transform player input to numbers between 0-2 or return string equivalent
function translate(value){
    if(typeof value==='number')
    switch(value){
            case 0:return 'Rock'; break;
            case 1:return 'Paper'; break;
            case 2:return 'Scissors'; break;
        }
        if(typeof value==='string'){
        return value.localeCompare('rock','en',{ sensitivity: 'base' })==0 ? 0: 
        value.localeCompare('paper','en',{ sensitivity: 'base' })==0 ? 1:
        value.localeCompare('scissors','en',{ sensitivity: 'base' })==0 ? 2: undefined;
    }      
}