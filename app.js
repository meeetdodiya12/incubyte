const Spacecraft = require('./Spacecraft');


const spacecraft = new Spacecraft(0, 0, 0, 'N');


spacecraft.executeCommands(['f', 'r', 'u', 'b', 'l']);

const finalPosition = spacecraft.getPosition();
const finalDirection = spacecraft.getDirection();

console.log('Final Position:', finalPosition);
console.log('Final Direction:', finalDirection);
