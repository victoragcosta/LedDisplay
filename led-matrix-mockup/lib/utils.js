export function randomMatrix(height = 16, width = 16) {
  let matrix = [];
  for (let i = 0; i < 16; i++) {
    let line = [];
    for (let j = 0; j < 16; j++) {
      line.push([
        Math.floor(Math.random() * 255.9),
        Math.floor(Math.random() * 255.9),
        Math.floor(Math.random() * 255.9),
      ]);
    }
    matrix.push(line);
  }
  return matrix;
}

export function blackMatrix(height = 16, width = 16) {
  let matrix = [];
  for (let i = 0; i < 16; i++) {
    let line = [];
    for (let j = 0; j < 16; j++) {
      line.push([0, 0, 0]);
    }
    matrix.push(line);
  }
  return matrix;
}
