let pos = 0;
const pacArray = [
  ['PacMan1.png', 'PacMan2.png'],
  ['PacMan3.png', 'PacMan4.png']
];
let direction = 0;
let focus = 0;
const pacMen = [];

// Create random numbers for X and Y coordinates
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale
  }
}
// Create each PacMan
function makePac() {
  let velocity = setToRandom(10);
  let position = setToRandom(200);
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = 'PacMan1.png';
  newimg.width = 100;
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  game.appendChild(newimg);
  return {
    position,
    velocity,
    newimg
  }
}

// Update each PacMan's position
function update() {
  pacMen.forEach((item) => {
    checkCollisions(item)
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;
    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
    // focus = (focus + 1) % 2;
    // item.newimg.src = pacArray[direction][focus];
  })
  setTimeout(update, 20);
}

function checkCollisions(item) {
  if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
    item.position.x + item.velocity.x < 0) {
    item.velocity.x = -item.velocity.x;
    direction = 1;
  }
  if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
    item.position.y + item.velocity.y < 0) {
    item.velocity.y = -item.velocity.y;
    direction = 0;
  }
}

// Add single PacMan
function makeOne() {
  pacMen.push(makePac());
}