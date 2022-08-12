container = document.querySelector('#grid-container');

for (let i = 1; i <= 16; i++) {
    rowContainer = document.createElement('div');
    container.appendChild(rowContainer);

    for (let j = 1; j <= 16; j++) {
        div = document.createElement('div');
        div.style.cssText = 'width: 32px; height: 32px; display: inline-block';
        rowContainer.appendChild(div);
    }
}