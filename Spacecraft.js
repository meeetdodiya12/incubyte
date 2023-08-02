class Spacecraft {
  constructor(x, y, z, direction) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.direction = direction;
  }

  moveForward() {
    switch (this.direction) {
      case 'N':
        this.y++;
        break;
      case 'S':
        this.y--;
        break;
      case 'E':
        this.x++;
        break;
      case 'W':
        this.x--;
        break;
      case 'Up':
        this.z--;
        break;
      case 'Down':
        this.z++;
        break;
      default:
        break;
    }
  }

  moveBackward() {
    switch (this.direction) {
      case 'N':
        this.y--;
        break;
      case 'S':
        this.y++;
        break;
      case 'E':
        this.x--;
        break;
      case 'W':
        this.x++;
        break;
      case 'Up':
        this.z++;
        break;
      case 'Down':
        this.z--;
        break;
      default:
        break;
    }
  }

  turnLeft() {
    switch (this.direction) {
      case 'N':
        this.direction = 'W';
        break;
      case 'S':
        this.direction = 'E';
        break;
      case 'E':
        this.direction = 'N';
        break;
      case 'W':
        this.direction = 'S';
        break;
      case 'Up':
        this.direction = 'W';
        break;
      case 'Down':
        this.direction = 'E';
        break;
      default:
        break;
    }
  }

  turnRight() {
    switch (this.direction) {
      case 'N':
        this.direction = 'E';
        break;
      case 'S':
        this.direction = 'W';
        break;
      case 'E':
        this.direction = 'S';
        break;
      case 'W':
        this.direction = 'N';
        break;
      case 'Up':
        this.direction = 'E';
        break;
      case 'Down':
        this.direction = 'W';
        break;
      default:
        break;
    }
  }

  turnUp() {
    switch (this.direction) {
      case 'N':
        this.direction = 'Up';
        break;
      case 'S':
        this.direction = 'Down';
        break;
      case 'E':
      case 'W':
       
        break;
      default:
        break;
    }
  }

  turnDown() {
    switch (this.direction) {
      case 'N':
        this.direction = 'Down';
        break;
      case 'S':
        this.direction = 'Up';
        break;
      case 'E':
      case 'W':
        break;
      default:
        break;
    }
  }

  executeCommands(commands) {
    for (const command of commands) {
      switch (command) {
        case 'f':
          this.moveForward();
          break;
        case 'b':
          this.moveBackward();
          break;
        case 'l':
          this.turnLeft();
          break;
        case 'r':
          this.turnRight();
          break;
        case 'u':
          this.turnUp();
          break;
        case 'd':
          this.turnDown();
          break;
        default:
          break;
      }
    }
  }

  getPosition() {
    return { x: this.x, y: this.y, z: this.z };
  }

  getDirection() {
    return this.direction;
  }
}

module.exports = Spacecraft;
