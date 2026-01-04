// A. SELECTING THE ELEMENTS
const playBtn = document.getElementById('play-game-btn');
const userInput = document.getElementById('user-input'); // Note: Matched to your HTML id
const resultDisplay = document.getElementById('match-result');
const computerDisplay = document.getElementById('computer-display');

// NEW: SCORE TRACKERS (Global Scope - these stay alive between clicks)
let playerWins = 0;
let computerWins = 0;

// ONE listener to rule them all
userInput.addEventListener('input', () => {
    
    // Logic Path A: The Game hasn't started yet (or just reset)
    if (playerWins === 0 && computerWins === 0) {
        computerDisplay.textContent = "New Match? I'm ready.";
        resultDisplay.textContent = "Enter your move to begin.";
    } 
    // Logic Path B: We are mid-series
    else {
        computerDisplay.textContent = `Next round?`;
        resultDisplay.textContent = `Score: ${playerWins} - ${computerWins}.`;
    }
});

// B. THE EVENT LISTENER (The "Thread" starts here)
playBtn.addEventListener('click', () => {
    const playerChoice = userInput.value.toLowerCase().trim();

    if (playerChoice === "spoon") {
        triggerMatrixMode();
        return; 
    }

    const roll = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";

    if (roll === 1) computerChoice = "rock";
    else if (roll === 2) computerChoice = "paper";
    else computerChoice = "scissors";

    computerDisplay.textContent = computerChoice;

    // 4. Determine the Winner (Now passing logic to update scores)
    determineWinner(playerChoice, computerChoice);
    
    // NEW: CHECK FOR MATCH POINT
    if (playerWins === 2 || computerWins === 2) {
        const finalMessage = playerWins === 2 ? "MATCH OVER: YOU WON!" : "MATCH OVER: SYSTEM WON.";
        alert(finalMessage);
        
        // Reset the memory for a fresh Best of 3
        playerWins = 0;
        computerWins = 0;
    }
});


// C. THE HELPER FUNCTIONS
function determineWinner(player, computer) {
    if (player === computer) {
        resultDisplay.textContent = "It's a Draw!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        resultDisplay.textContent = "You Win!";
        playerWins++; // Increment the score
    } else {
        resultDisplay.textContent = "System Wins. Try again.";
        computerWins++; // Increment the score
    }
}

function triggerMatrixMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "#00FF00"; 
    resultDisplay.textContent = "There is no spoon...";
}