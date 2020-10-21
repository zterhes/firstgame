const mapModul = require('./map');
const randomModul = require('./random');

const width = 30;
const height = 20;

let map = [];
const apples = [];
const player = {
  pos: {
    x: 1,
    y: 1
  },
  score: 0
};

map = mapModul.fillMap(player, apples, width, height);

for (let i = 0; i < map.length; i++) {
  for (let k = 0; k < map[i].length; k++) {
    process.stdout.write(map[i][k]);
  }
}
