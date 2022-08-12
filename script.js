container = document.querySelector('#grid-container');

function generateGrid(gridSize) {
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
}

generateGrid(10);

squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    })
})

gridSizeButton = document.querySelector('#grid-size');
gridSizeButton.addEventListener('click', () => {
    size = prompt('Enter new grid square size:');
    console.log(size);
})