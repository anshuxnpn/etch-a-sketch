const gridContainer = document.getElementById('grid-container');
const gridSize = 16;

const grid = document.createElement('div');
grid.classList.add('grid');
gridContainer.appendChild(grid);
for(let i = 0; i < gridSize; i++){
  for(let j = 0; j < gridSize; j++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
  }
}

grid.addEventListener('mouseover', (event) => {
  const cell = event.target;
  const randomColor = getRandomColor();
  cell.style.backgroundColor = randomColor;
})

function getRandomColor(){
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}