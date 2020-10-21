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

module.exports = {
  fillMap
};
