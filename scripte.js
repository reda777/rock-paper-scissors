const buttons=document.querySelectorAll('a');
buttons.forEach(button => {
    button.addEventListener('click',game);
});

const divRes=document.querySelector('.results');
const divBut=document.querySelector('.buttons');
const divSco=document.querySelector('.score');
const img1=document.querySelector('.imgPlayer');
const img2=document.querySelector('.imgComputer');
let playerScore=0;
let computerScore=0;
function game(e){
    let playerSelection=Number(e.target.id);
    let computerSelection=computerPlay();
    let roundResult=playRound(playerSelection,computerSelection);
    if(roundResult==1){
        playerScore++;
        img1.src=translate(playerSelection);
        img2.src=translate(computerSelection);
    }
    else if(roundResult==2){
        computerScore++;
        img1.src=translate(playerSelection);
        img2.src=translate(computerSelection);
    }
    else if(roundResult==0){
        img1.src=translate(playerSelection);
        img2.src=translate(computerSelection);
    }
    divSco.textContent='YOU\xa0\xa0\xa0'+playerScore+' - '+computerScore+'\xa0\xa0\xa0CPU';                  
    if(playerScore==5 || computerScore==5){
        divRes.style.fontSize="50px";
        divRes.textContent=(computerScore==playerScore)?' DRAW!':(playerScore==5)?' YOU WON':' YOU LOST';
        restart();
    }
}

function restart(){
    divBut.innerHTML="";
    const linkA=document.createElement('a');
    linkA.textContent="Restart";
    linkA.setAttribute('href', '#');
    divBut.appendChild(linkA);
    linkA.addEventListener('click',()=>window.location.reload());
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
            case 0:return 'images/rock.png'; break;
            case 1:return 'images/paper.png'; break;
            case 2:return 'images/scissors.png'; break;
        }
        if(typeof value==='string'){
        return value.localeCompare('rock','en',{ sensitivity: 'base' })==0 ? 0: 
        value.localeCompare('paper','en',{ sensitivity: 'base' })==0 ? 1:
        value.localeCompare('scissors','en',{ sensitivity: 'base' })==0 ? 2: undefined;
    }      
}