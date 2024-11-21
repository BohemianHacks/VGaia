const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function 1  drawLSystem(axiom, rules, angle, length, x, y) {
  let production = axiom;

  // Apply rules to the axiom
  for (let i = 0; i < production.length; i++) {
    const char = production[i];
    if (rules[char]) {
      production = production.replace(char, rules[char]);
    }
  }

  // Draw the L-System
  for (let i = 0; i < production.length; i++) {
    const char = production[i];
    if (char === 'F') {
      drawLine(x, y, x + length * Math.cos(angle), y + length * Math.sin(angle));
      x += length * Math.cos(angle);
      y += length * Math.sin(angle);
    } else if (char === '+') {
      angle += Math.PI / 4;
    } else if (char === '-') {
      angle -= Math.PI / 4;
    }
  }
}

// Example L-System
const axiom = 'F';
const rules = {
  'F': 'FF+[+F-F-F]-[-F+F+F]'
};
const angle = Math.PI / 4;
const length = 10;

drawLSystem(axiom, rules, angle, length, 250, 450);
