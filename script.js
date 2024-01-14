function playGame(playerChoice) {
    const choices = ['piedra', 'papel', 'tijera'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = determineWinner(playerChoice, computerChoice);

    displayResult(playerChoice, computerChoice, result);
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'Empate';
    } else if ((player === 'piedra' && computer === 'tijera') ||
               (player === 'papel' && computer === 'piedra') ||
               (player === 'tijera' && computer === 'papel')) {
        return '¡Ganaste!';
    } else {
        return '¡Perdiste!';
    }
}

function displayResult(player, computer, result) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Elegiste ${player}. La IA eligió ${computer}. Resultado: ${result}`;
}
