let color = 'black';

document.addEventListener('DOMContentLoaded', function () {
    console.log('hi');
    createBoard(16);

    let btnPopup = document.getElementById('popup');
    btnPopup.addEventListener('click', function () {
        let size = getSize();
        if (size) {
            createBoard(size);
        }
    });

    document.querySelector('.white').addEventListener('click', () => setColor('white'));
    document.querySelector('.black').addEventListener('click', () => setColor('black'));
    document.querySelector('.random').addEventListener('click', () => setColor('random'));
    document.querySelector('.reset').addEventListener('click', () => createBoard(16));
});

function createBoard(size) {
    let content = document.querySelector('.content');
    content.innerHTML = '';

    content.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    content.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDiv = size * size;

    for (let i = 0; i < numDiv; i++) {
        let div = document.createElement('div');
        div.style.border = '1px solid #ccc';
        div.addEventListener('mouseover', colorDiv);
        content.appendChild(div);
    }
}

function getSize() {
    let input = prompt('Choose the size of the board');
    let message = document.getElementById('message');
    if (input === '' || isNaN(input)) {
        message.innerHTML = 'Please provide a valid number';
        return null;
    } else if (input <= 0 || input > 100) {
        message.innerHTML = 'Please choose a number between 1 and 100';
        return null;
    } else {
        message.innerHTML = 'Let\'s play!';
        return input;
    }
}

function colorDiv() {
    if (color == 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}
