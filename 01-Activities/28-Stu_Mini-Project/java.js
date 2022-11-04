//If you are lazy like me and want to make the computer play itself like glorious gladiatorial combat
// Global Variables
// Choices, Computer Choice, User Choice, Wins, Ties, Losses, Play Again
let wins = 0;
let losses = 0;
let ties = 0;
let choices = ['P', 'R', 'S'];
//let choices2 = ['P', weaponChoice[index3], 'S'];
let weaponChoice = ['AK-47', 'Brass Knuckles', 'Katana']


// Functions


// Play game
let playGame = function () {
    //   let userChoice = window.prompt("Enter R, P, or S");
    //Check user/computer choice
    let index3 = Math.floor(Math.random() * weaponChoice.length);
    let choices2 = ['P', weaponChoice[index3], 'S'];
    let index = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[index];
    console.log(computerChoice);
    let index2 = Math.floor(Math.random() * choices2.length);
    let computerChoice2 = choices2[index2];
    window.alert(`The computer chose ${computerChoice}`)
    window.alert(`The computer2 chose ${computerChoice2}`)
    if (computerChoice2 !== 'R' && computerChoice2 !== 'P' && computerChoice2 !== 'S') {
        wins++; window.alert(`Oof shouldn't have brought a ` + if (computerChoice === 'R') {print 'Rock' } else if (computerChoice === 'P') { return 'Paper' } else ('Scissors') + ` to a ${computerChoice2} fight. :(`)
        playGame();
    }
    // Decide the winner    
    if (computerChoice2 === computerChoice) {
        ties++;
        window.alert(`It's a tie: ${ties}`);
    } else if (
        (computerChoice2 === "R" && computerChoice === "S") ||
        (computerChoice2 === "P" && computerChoice === "R") ||
        (computerChoice2 === "S" && computerChoice === "P")
    ) {
        wins++;
        window.alert(`Computer 2 is a winner!: ${wins}`)
    } else {
        losses++;
        window.alert(`Computer 2 is a big phat loser!: ${losses}`)
    }
    // print the stats
    window.alert(`Stats: \nWins: ${wins}\nLosses: ${losses}\nTies: ${ties}`)
    //ask the user to play again
    let makeThemPlayAgain = window.confirm('Do you want to play a game...again?');
    if (makeThemPlayAgain === true) {
        playGame();
    }

}
// Calling Functions
playGame();