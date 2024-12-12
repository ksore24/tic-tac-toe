let playerCount = 1;
const gameBoardArray = [];
const header = document.createElement('h1');
header.textContent = 'TIC-TAC-TOE';
document.body.appendChild(header);
const newGameButton = document.createElement('button');
newGameButton.textContent = 'New Game';
document.body.appendChild(newGameButton);

newGameButton.addEventListener("click", createGameForm);

function createGameForm(){
    while(document.body.firstChild)
        document.body.removeChild(document.body.firstChild);
    document.body.appendChild(header);
    const newGameForm = document.createElement('form');
    newGameForm.className = "newGameForm";

    const player1Label = document.createElement('label');
    player1Label.setAttribute("for", "player1Input");
    player1Label.textContent = "Player 1";

    const player1Input = document.createElement("input");
    player1Input.setAttribute("type", "text");
    player1Input.setAttribute("id", "player1Input");

    const player2Label = document.createElement('label');
    player2Label.setAttribute("for", "player2Input");
    player2Label.textContent = "Player 2";

    const player2Input = document.createElement("input");
    player2Input.setAttribute("type", "text");
    player2Input.setAttribute("id", "player2Input");

    const startGameButton = document.createElement('button');
    startGameButton.textContent = 'Start Game';

    newGameForm.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    newGameForm.appendChild(player1Label);
    newGameForm.appendChild(player1Input);
    newGameForm.appendChild(player2Label);
    newGameForm.appendChild(player2Input);
    newGameForm.appendChild(startGameButton);

    startGameButton.addEventListener('click', createGame);
    
    document.body.appendChild(newGameForm);
}


function createGame(){
    const player1 = new Player(player1Input, 1);
    const player2 = new Player(player2Input, 2);
    while(document.body.firstChild)
        document.body.removeChild(document.body.firstChild);
    document.body.appendChild(header);
    const gameHeader = document.createElement('div');
    gameHeader.className = 'gameHeader'
    document.body.appendChild(gameHeader);
    updateGameHeader(gameHeader);
    const gameBoard = document.createElement('div');
    gameBoard.className = "gameBoard";
    for(i = 0; i < 9; i++)
    {
        gameBoardArray[i] = document.createElement('div');
        gameBoardArray[i].className = 'square';
        gameBoardArray[i].addEventListener('click', addMark);
        gameBoard.appendChild(gameBoardArray[i]);
    }
    document.body.appendChild(gameBoard);
}

function updateGameHeader(gameHeader){
    document.body.removeChild(gameHeader);
    if(playerCount % 2 == 1)
        gameHeader.textContent = "Player 1 (X)'s Turn";
    else
        gameHeader.textContent = "Player 2 (O)'s Turn";
    document.body.appendChild(gameHeader);
}

function addMark(){
    if(playerCount % 2 == 1)
        this.textContent = 'X';
    else
        this.textContent = 'O';
    this.classList.add("disabled");
    playerCount++;
}

function Player(playerName, playerNumber){
    this.name = playerName;
    this.number = playerNumber;
    if(playerNumber % 2 == 1)
        this.mark = 'X';
    else
        this.mark = 'O';
}