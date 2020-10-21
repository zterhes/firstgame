
const { table } = require('table');
const { getBorderCharacters } = require('table');

const fillMap = (player, apples, width, height) => {
  const playerX = player.pos.x;
  const playerY = player.pos.y;
  const map = new Array(height);
  for (let i = 0; i < map.length; i++) {
    map[i] = new Array(width);
  }
  for (let i = 0; i < map.length; i++) {
    for (let k = 0; k < map[i].length; k++) {
      if (playerX === i && playerY === k) {
        map[i][k] = 'x';
      }
    }
  }

  return map;
};

const drawMap = (map) => {
  const output = table(map, {
    border: getBorderCharacters('void'),
    columnDefault: {
      paddingLeft: 0,
      paddingRight: 1
    },
    drawHorizontalLine: () => {
      return false;
    }
  });

  console.log(output);
};

module.exports = {
  fillMap,
  drawMap
};
