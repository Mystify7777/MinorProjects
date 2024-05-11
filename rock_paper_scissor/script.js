let userScore = 0;
let computerScore = 0;
let tieScore = 0;

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playGame(userChoice) {
    const computer = computerChoice();
    let result;

    if (userChoice === computer) {
        result = "It's a tie!";
        tieScore++;
    } else if (
        (userChoice === "rock" && computer === "scissors") ||
        (userChoice === "paper" && computer === "rock") ||
        (userChoice === "scissors" && computer === "paper")
    ) {
        result = "You win!";
        userScore++;
    } else {
        result = "You lose!";
        computerScore++;
    }

    updateScoreboard();
    document.getElementById('result').innerText = `You chose ${userChoice}. Computer chose ${computer}. ${result}`;
}

function updateScoreboard() {
    document.getElementById('userScore').innerText = userScore;
    document.getElementById('computerScore').innerText = computerScore;
    document.getElementById('tieScore').innerText = tieScore;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    tieScore = 0;
    updateScoreboard();
    document.getElementById('result').innerText = "";
}

function changeTheme(theme) {
    const header = document.getElementById('header');
    const body = document.body;
    const buttons = document.querySelectorAll('#theme-buttons button');

    if (theme === 'dark') {
        header.classList.remove('light-theme', 'blue-theme');
        header.classList.add('dark-theme');
        body.classList.remove('dark-theme', 'blue-theme');
        body.classList.add('light-theme');
        body.style.backgroundColor = '#778899';
        buttons.forEach(button => {
            button.style.backgroundColor = '#333';
        });
    } else if (theme === 'light') {
        header.classList.remove('dark-theme', 'blue-theme');
        header.classList.add('light-theme');
        body.classList.remove('light-theme', 'blue-theme');
        body.classList.add('dark-theme');
        body.style.backgroundColor = '#BFAFF0';

        buttons.forEach(button => {
            button.style.backgroundColor = '#333';
        });
    } else if (theme === 'blue') {
        header.classList.remove('dark-theme', 'light-theme');
        header.classList.add('blue-theme');
        body.classList.remove('dark-theme', 'light-theme');
        body.classList.add('light-theme');
        body.style.backgroundColor = '#87CEFA';
        buttons.forEach(button => {
            button.style.backgroundColor = '#333';
        });
    }
}
