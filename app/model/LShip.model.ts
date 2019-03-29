import {Ship} from './ship.model';
import {Point} from './Point.model';

export class LShip extends Ship {
  constructor() {
    super();
  }
  generate(start: Point, direction?: number, angle?: number) {
    this.setDir(direction);
    this.body = [];
    for (let i = 0; i < 3; i++) {
      this.body.push(start);
      start = new Point (start.x + this.dx, start.y + this.dy);
    }
    if (angle === 0) {angle = -1; }
    this.body.push(new Point (start.x - this.dx + this.dy * angle, start.y - this.dy + this.dx * angle));
  }
}

