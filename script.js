container = document.querySelector('#grid-container');
currentGridSize = 0;
penColour = 'black';

function generateGrid(gridSize) {
    clearGrid();

    currentGridSize = gridSize;

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
            if (penColour == 'black') {
                square.style.backgroundColor = 'rgb(0,0,0)';
            }

            else if (penColour == 'rainbow') {
                rgb = [];

                for (let i = 1; i <=3; i++) {
                    num = Math.floor(Math.random() * 255);
                    rgb.push(num);
                }

                square.style.backgroundColor = `rgb(${rgb.join()})`;
            }

            else if (penColour == 'fade') {
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

gridSizeLabel = document.querySelector('#grid-size-label');
gridSizeSlider = document.querySelector('#grid-size');

gridSizeSlider.addEventListener('input', () => {
    size = gridSizeSlider.value;
    gridSizeLabel.textContent = `Grid Size: ${size} x ${size}`;
})

gridSizeSlider.addEventListener('change', () => {
    size = gridSizeSlider.value;
    generateGrid(size);
})


eraseGridButton = document.querySelector('#erase-grid');
eraseGridButton.addEventListener('click', () => {
    generateGrid(currentGridSize);
});

drawType = document.querySelector('#pen-options');
blackPen = document.querySelector('#draw-black');
rainbowPen = document.querySelector('#draw-rainbow');
fadePen = document.querySelector('#draw-fade');

drawType.addEventListener('click', (e) => {
    if (e.target.id == 'draw-black') {
        blackPen.classList.add('selected');
        rainbowPen.classList.remove('selected');
        fadePen.classList.remove('selected');
        penColour = 'black';
    }

    else if (e.target.id == 'draw-rainbow') {
        blackPen.classList.remove('selected');
        rainbowPen.classList.add('selected');
        fadePen.classList.remove('selected');
        penColour = 'rainbow';
    }

    else if (e.target.id == 'draw-fade') {
        blackPen.classList.remove('selected');
        rainbowPen.classList.remove('selected');
        fadePen.classList.add('selected');
        penColour = 'fade';
    }
})