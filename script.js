container = document.querySelector('#grid-container');

function generateGrid() {
    for (let i = 1; i <= 16; i++) {
        rowContainer = document.createElement('div');
        rowContainer.style.display = 'flex';
        container.appendChild(rowContainer);
    
        for (let j = 1; j <= 16; j++) {
            div = document.createElement('div');
            div.style.cssText = 'width: 32px; height: 32px';
            div.classList.add('square');
            rowContainer.appendChild(div);
        }
    }
}

generateGrid();

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