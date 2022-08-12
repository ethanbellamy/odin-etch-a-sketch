container = document.querySelector('#grid-container');

function generateGrid(gridSize) {
    clearGrid();

    squareSize = container.clientWidth / gridSize;
    console.log(squareSize);

    for (let i = 1; i <= gridSize; i++) {
        rowContainer = document.createElement('div');
        rowContainer.style.display = 'flex';
        container.appendChild(rowContainer);
    
        for (let j = 1; j <= gridSize; j++) {
            div = document.createElement('div');
            div.style.height = squareSize + 'px';
            div.style.width = squareSize + 'px';
            div.classList.add('square');
            rowContainer.appendChild(div);
        }
    }

    squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.classList.add('fill');
        })
    })
}

generateGrid(30);

function clearGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

gridSizeButton = document.querySelector('#grid-size');
gridSizeButton.addEventListener('click', () => {
    let size = 0;
    do {
        size = prompt('Enter new grid square size:');
    } while (size > 100 || size < 1 || isNaN(size));
    generateGrid(size);
})