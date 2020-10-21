
const { table, getBorderCharacters } = require('table');

const fillMap = (player, apples, width, height) => {
  const playerX = player.pos.x;
  const playerY = player.pos.y;
  const map = new Array(height);
  const score = false;
  for (let i = 0; i < map.length; i++) {
    map[i] = new Array(width);
  }
  for (let i = 0; i < map.length; i++) {
    for (let k = 0; k < map[i].length; k++) {
      if (i === 0 || k === 0 || i === height - 1 || k === width - 1) {
        map[i][k] = '██';
      }
      if (playerX === i && playerY === k) {
        map[i][k] = '🙂';
      }
      for (let j = 0; j < apples.length; j++) {
        if (apples[j].x === k && apples[j].y === i) {
          if (playerX === apples[j].y && playerY === apples[j].x) {
            player.score++;
            map[i][k] = '🤑';
            apples[j].y = -1;
            apples[j].x = -1;
          } else {
            map[i][k] = '🍎';
          }
        }
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
