let playerCount;
let player1Name;
let player2Name;
const playerTurn = document.createElement('div');
playerTurn.className = 'playerTurn';
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
    playerCount = 1;
    player1Name = player1Input.value;
    player2Name = player2Input.value;
    while(document.body.firstChild)
        document.body.removeChild(document.body.firstChild);
    document.body.appendChild(header);
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
    playerTurn.textContent = player1Name+"'s (X's) Turn";
    document.body.appendChild(playerTurn);

}

function addMark(){
    if(playerCount % 2 == 1)
    {
        this.textContent = 'X';
        document.body.removeChild(document.body.lastChild);
        playerTurn.textContent = player2Name+"'s (O's) Turn";
    document.body.appendChild(playerTurn);
    checkWin();
    }

    else
    {
        this.textContent = 'O';
        document.body.removeChild(document.body.lastChild);
        playerTurn.textContent = player1Name+"'s (X's) Turn";
    document.body.appendChild(playerTurn);
    checkWin();
    }
    this.classList.add("disabled");
    playerCount++;
}

function checkWin(){
    if(gameBoardArray[0].textContent == gameBoardArray[1].textContent && gameBoardArray[1].textContent == gameBoardArray[2].textContent)
    {
        if(gameBoardArray[0].textContent == 'X')
        {
            document.body.removeChild(document.body.lastChild);
            playerTurn.textContent = player1Name+" (X) WINS";
            document.body.appendChild(playerTurn);
            for(i=0;i<9;i++)
            gameBoardArray[i].classList.add("disabled");
        document.body.appendChild(newGameButton);
        newGameButton.addEventListener("click", createGameForm);
        }
        
        if(gameBoardArray[0].textContent == 'O')
            {
                document.body.removeChild(document.body.lastChild);
                playerTurn.textContent = player2Name+" (O) WINS";
                document.body.appendChild(playerTurn);
                for(i=0;i<9;i++)
                gameBoardArray[i].classList.add("disabled");
            document.body.appendChild(newGameButton);
            newGameButton.addEventListener("click", createGameForm);
            }
    }

    if(gameBoardArray[3].textContent == gameBoardArray[4].textContent && gameBoardArray[4].textContent == gameBoardArray[5].textContent)
        {
            if(gameBoardArray[3].textContent == 'X')
            {
                document.body.removeChild(document.body.lastChild);
                playerTurn.textContent = player1Name+" (X) WINS";
                document.body.appendChild(playerTurn);
                for(i=0;i<9;i++)
                gameBoardArray[i].classList.add("disabled");
            document.body.appendChild(newGameButton);
            newGameButton.addEventListener("click", createGameForm);
            }
            
            if(gameBoardArray[3].textContent == 'O')
                {
                    document.body.removeChild(document.body.lastChild);
                    playerTurn.textContent = player2Name+" (O) WINS";
                    document.body.appendChild(playerTurn);
                    for(i=0;i<9;i++)
                    gameBoardArray[i].classList.add("disabled");
                document.body.appendChild(newGameButton);
                newGameButton.addEventListener("click", createGameForm);
                }
        }

    if(gameBoardArray[6].textContent == gameBoardArray[7].textContent && gameBoardArray[7].textContent == gameBoardArray[8].textContent)
        {
            if(gameBoardArray[6].textContent == 'X')
            {
                document.body.removeChild(document.body.lastChild);
                playerTurn.textContent = player1Name+" (X) WINS";
                document.body.appendChild(playerTurn);
                for(i=0;i<9;i++)
                gameBoardArray[i].classList.add("disabled");
                document.body.appendChild(newGameButton);
                newGameButton.addEventListener("click", createGameForm);
            }
                
            if(gameBoardArray[6].textContent == 'O')
                {
                    document.body.removeChild(document.body.lastChild);
                    playerTurn.textContent = player2Name+" (O) WINS";
                    document.body.appendChild(playerTurn);
                    for(i=0;i<9;i++)
                    gameBoardArray[i].classList.add("disabled");
                    document.body.appendChild(newGameButton);
                    newGameButton.addEventListener("click", createGameForm);
                }
            }

    if(gameBoardArray[0].textContent == gameBoardArray[3].textContent && gameBoardArray[3].textContent == gameBoardArray[6].textContent)
        {
            if(gameBoardArray[0].textContent == 'X')
            {
                document.body.removeChild(document.body.lastChild);
                playerTurn.textContent = player1Name+" (X) WINS";
                document.body.appendChild(playerTurn);
                for(i=0;i<9;i++)
                gameBoardArray[i].classList.add("disabled");
                document.body.appendChild(newGameButton);
                newGameButton.addEventListener("click", createGameForm);
            }
                
            if(gameBoardArray[0].textContent == 'O')
                {
                    document.body.removeChild(document.body.lastChild);
                    playerTurn.textContent = player2Name+" (O) WINS";
                    document.body.appendChild(playerTurn);
                    for(i=0;i<9;i++)
                    gameBoardArray[i].classList.add("disabled");
                    document.body.appendChild(newGameButton);
                    newGameButton.addEventListener("click", createGameForm);
                }
            }

    if(gameBoardArray[1].textContent == gameBoardArray[4].textContent && gameBoardArray[4].textContent == gameBoardArray[7].textContent)
    {
        if(gameBoardArray[1].textContent == 'X')
        {
            document.body.removeChild(document.body.lastChild);
            playerTurn.textContent = player1Name+" (X) WINS";
            document.body.appendChild(playerTurn);                        
            for(i=0;i<9;i++)
            gameBoardArray[i].classList.add("disabled");
            document.body.appendChild(newGameButton);
            newGameButton.addEventListener("click", createGameForm);
        }
                
        if(gameBoardArray[1].textContent == 'O')
        {
            document.body.removeChild(document.body.lastChild);
            playerTurn.textContent = player2Name+" (O) WINS";
            document.body.appendChild(playerTurn);
            for(i=0;i<9;i++)
            gameBoardArray[i].classList.add("disabled");
            document.body.appendChild(newGameButton);
            newGameButton.addEventListener("click", createGameForm);
        }
    }

    if(gameBoardArray[2].textContent == gameBoardArray[5].textContent && gameBoardArray[5].textContent == gameBoardArray[8].textContent)
    {
        if(gameBoardArray[2].textContent == 'X')
        {
        document.body.removeChild(document.body.lastChild);
        playerTurn.textContent = player1Name+" (X) WINS";
        document.body.appendChild(playerTurn);
        for(i=0;i<9;i++)
        gameBoardArray[i].classList.add("disabled");
        document.body.appendChild(newGameButton);
        newGameButton.addEventListener("click", createGameForm);
        }
        
        if(gameBoardArray[2].textContent == 'O')
            {
            document.body.removeChild(document.body.lastChild);
            playerTurn.textContent = player2Name+" (O) WINS";
            document.body.appendChild(playerTurn);
            for(i=0;i<9;i++)
            gameBoardArray[i].classList.add("disabled");
            document.body.appendChild(newGameButton);
            newGameButton.addEventListener("click", createGameForm);
            }
    }

    if(gameBoardArray[0].textContent == gameBoardArray[4].textContent && gameBoardArray[4].textContent == gameBoardArray[8].textContent)
    {
        if(gameBoardArray[0].textContent == 'X')
        {
        document.body.removeChild(document.body.lastChild);
        playerTurn.textContent = player1Name+" (X) WINS";
        document.body.appendChild(playerTurn);
        for(i=0;i<9;i++)
        gameBoardArray[i].classList.add("disabled");
        document.body.appendChild(newGameButton);
        newGameButton.addEventListener("click", createGameForm);
        }
        
        if(gameBoardArray[0].textContent == 'O')
            {
            document.body.removeChild(document.body.lastChild);
            playerTurn.textContent = player2Name+" (O) WINS";
            document.body.appendChild(playerTurn);
            for(i=0;i<9;i++)
            gameBoardArray[i].classList.add("disabled");
            document.body.appendChild(newGameButton);
            newGameButton.addEventListener("click", createGameForm);
            }
    }
    if(gameBoardArray[2].textContent == gameBoardArray[4].textContent && gameBoardArray[4].textContent == gameBoardArray[6].textContent)
        {
            if(gameBoardArray[2].textContent == 'X')
            {
            document.body.removeChild(document.body.lastChild);
            playerTurn.textContent = player1Name+" (X) WINS";
            document.body.appendChild(playerTurn);
            for(i=0;i<9;i++)
            gameBoardArray[i].classList.add("disabled");
            document.body.appendChild(newGameButton);
            newGameButton.addEventListener("click", createGameForm);
            }
            
            if(gameBoardArray[2].textContent == 'O')
                {
                document.body.removeChild(document.body.lastChild);
                playerTurn.textContent = player2Name+" (O) WINS";
                document.body.appendChild(playerTurn);
                for(i=0;i<9;i++)
                gameBoardArray[i].classList.add("disabled");
                document.body.appendChild(newGameButton);
                newGameButton.addEventListener("click", createGameForm);
                }
        }
    
    if(playerCount == 9 && document.body.lastChild != newGameButton)
    {
        document.body.removeChild(document.body.lastChild);
        playerTurn.textContent = "It's a TIE";
        document.body.appendChild(playerTurn);
        document.body.appendChild(newGameButton);
        newGameButton.addEventListener("click", createGameForm);
    }
    
    else
    return false;
}