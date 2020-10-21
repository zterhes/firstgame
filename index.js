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
