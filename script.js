document.addEventListener('DOMContentLoaded', function () {
    console.log('hi');
    createBoard(32)


});

function createBoard(size) {
    let content = document.querySelector('.content');

    content.style.gridTemplateColumns = `repeat (${size}, 1fr)`;
    content.style.gridTemplateRows = `repeat (${size}, 1fr)`;

    let numDiv = size * size;

    for (let i = 0; i < numDiv; i++) {
        let div = document.createElement('div');
        content.insertAdjacentElement('beforeend', div);
    }
}