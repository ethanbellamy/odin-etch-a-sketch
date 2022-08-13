container = document.querySelector('#grid-container');

function generateGrid(gridSize) {
    clearGrid();

    squareSize = container.clientWidth / gridSize;

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
            if (document.querySelector('#draw-black').checked) {
                square.style.backgroundColor = 'rgb(0,0,0)';
            }

            else if (document.querySelector('#draw-rainbow').checked) {
                rgb = [];

                for (let i = 1; i <=3; i++) {
                    num = Math.floor(Math.random() * 255);
                    rgb.push(num);
                }

                square.style.backgroundColor = `rgb(${rgb.join()})`;
            }

            else if (document.querySelector('#draw-fade').checked) {
                if(!square.style.backgroundColor) {
                    rgb = [255,255,255];
                }

                else {
                    colour = square.style.backgroundColor.slice(4,-1);
                    rgb = colour.split(',').map(Number);
                }

                rgb = rgb.map(a => a-25);
                square.style.backgroundColor = `rgb(${rgb.join()})`;
            }
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