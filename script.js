const gridContainer = document.getElementById('grid-container');
let gridSize = 16;

const grid = document.createElement('div');
grid.classList.add('grid');
gridContainer.appendChild(grid);
grid.addEventListener('mouseover', (event) => {
  const cell = event.target;
  const randomColor = getRandomColor();
  cell.style.backgroundColor = randomColor;
});

// Call createGrid() with default size
createGrid(gridSize);

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const createButton = document.getElementById('create-button');
createButton.addEventListener('click', () => {
  const gridSlider = document.getElementById('grid-slider');
  const gridSize = gridSlider.value;
  createGrid(gridSize);
});

function createGrid(gridSize) {
  grid.innerHTML = '';
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      grid.appendChild(cell);
    }
  }
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', clearGrid);

function clearGrid() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.backgroundColor = '';
  });
}
