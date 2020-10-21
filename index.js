const mapModul = require('./map');
const randomModul = require('./random');
const { keyIn } = require('readline-sync');

const width = 30;
const height = 20;
const numApples = 5;
let map = [];
const apples = [];
const player = {
  pos: {
    x: 1,
    y: 1
  },
  score: 0
};
for (let i = 0; i < numApples; i++) {
  apples[i] = { x: randomModul.makeRandom(1, width - 1), y: randomModul.makeRandom(1, height - 1) };
}

let key;
do {
  console.clear();
  console.log('The players score is: ', player.score);
  map = mapModul.fillMap(player, apples, width, height);
  mapModul.drawMap(map);
  key = keyIn();
  if (key === 's') {
    if (player.pos.x < height - 2) {
      player.pos.x++;
    }
  }
  if (key === 'w') {
    if (player.pos.x > 1) {
      player.pos.x--;
    }
  }
  if (key === 'd') {
    if (player.pos.y < width - 2) {
      player.pos.y++;
    }
  }
  if (key === 'a') {
    if (player.pos.y > 1) {
      player.pos.y--;
    }
  }
} while (key !== 'q');
