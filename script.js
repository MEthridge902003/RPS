// A. SELECTING THE ELEMENTS (Connecting JS to HTML)
const playBtn = document.getElementById('play-game-btn');
const userInput = document.getElementById('user-input'); // The text box
const resultDisplay = document.getElementById('match-result');
const computerDisplay = document.getElementById('computer-display');

// B. THE EVENT LISTENER (The "Thread" starts here when you click)
playBtn.addEventListener('click', () => {
    
    // 1. Capture and Clean the user input
    const playerChoice = userInput.value.toLowerCase().trim();

    // 2. The Secret Code Branch (Priority #1)
    if (playerChoice === "spoon") {
        triggerMatrixMode(); // We'll write this separate function below
        return; // "Return" stops the rest of the code from running
    }

    // 3. Generate Computer Choice
    // We use your 1-3 logic here
    const roll = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";

    if (roll === 1) computerChoice = "rock";
    else if (roll === 2) computerChoice = "paper";
    else computerChoice = "scissors";

    // Show the computer's move on the dashboard
    computerDisplay.textContent = computerChoice;

    // 4. Determine the Winner (The Referee)
    determineWinner(playerChoice, computerChoice);
});

// C. THE HELPER FUNCTIONS (The "Manuals" for specific tasks)

function determineWinner(player, computer) {
    if (player === computer) {
        resultDisplay.textContent = "It's a Draw!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        resultDisplay.textContent = "You Win!";
    } else {
        resultDisplay.textContent = "System Wins. Try again.";
    }
}

function triggerMatrixMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "#00FF00"; // Matrix Green
    resultDisplay.textContent = "There is no spoon...";
}