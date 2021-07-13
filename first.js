window.onload = (event) => {
    game();
};
//main function
function game(){
    let playerScore=0;
    let computerScore=0;
    for(i=0;i<5;i++){
        let playerOption=prompt('rock paper scissors?');
        playerSelection=translate(playerOption);
        computerSelection=computerPlay();
        let roundResult=playRound(playerSelection,computerSelection);
        if(roundResult==1){
            playerScore++;
            console.log('You win! '+translate(playerSelection)+' beats '+translate(computerSelection));
        }
        else if(roundResult==2){
            computerScore++;
            console.log('You lose! '+translate(computerSelection)+' beats '+translate(playerSelection));
        }
        else if(roundResult==0)
            console.log('Draw '+translate(playerSelection)+' : '+translate(computerSelection));
    }
    if(playerScore==computerScore)
        alert('Draw \nscore is '+playerScore+' - '+computerScore);
    else if(playerScore>computerScore)
        alert('You win \nscore is '+playerScore+' - '+computerScore);
    else 
        alert('You lose \nscore is '+playerScore+' - '+computerScore);
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


