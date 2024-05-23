function checkMagicSquare() {
    const cells = [];
    for (let i = 0; i < 9; i++) {
        cells.push(parseInt(document.getElementById(`cell${i}`).value, 10) || 0);
    }

    const rowSums = [
        cells[0] + cells[1] + cells[2],
        cells[3] + cells[4] + cells[5],
        cells[6] + cells[7] + cells[8]
    ];

    const colSums = [
        cells[0] + cells[3] + cells[6],
        cells[1] + cells[4] + cells[7],
        cells[2] + cells[5] + cells[8]
    ];

    const diagSums = [
        cells[0] + cells[4] + cells[8],
        cells[2] + cells[4] + cells[6]
    ];

    document.getElementById("row-sum-0").innerText = rowSums[0];
    document.getElementById("row-sum-1").innerText = rowSums[1];
    document.getElementById("row-sum-2").innerText = rowSums[2];

    document.getElementById("col-sum-0").innerText = colSums[0];
    document.getElementById("col-sum-1").innerText = colSums[1];
    document.getElementById("col-sum-2").innerText = colSums[2];

    document.getElementById("diag-sum-0").innerText = diagSums[0];
    document.getElementById("diag-sum-1").innerText = diagSums[1];

    const isMagicSquare = rowSums.concat(colSums, diagSums).every(sum => sum === rowSums[0]);

    document.getElementById("result").innerText = isMagicSquare ? "É um quadrado mágico!" : "Não é um quadrado mágico.";
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell${i}`).value = '';
    }
    
    document.getElementById("row-sum-0").innerText = '';
    document.getElementById("row-sum-1").innerText = '';
    document.getElementById("row-sum-2").innerText = '';
    document.getElementById("col-sum-0").innerText = '';
    document.getElementById("col-sum-1").innerText = '';
    document.getElementById("col-sum-2").innerText = '';
    
    document.getElementById("diag-sum-0").innerText = '';
    document.getElementById("diag-sum-1").innerText = '';

    document.getElementById("result").innerText = '';
}
