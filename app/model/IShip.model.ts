import {Ship} from './ship.model';
import {Point} from './Point.model';

export class IShip extends Ship {
  constructor() {
    super();
  }
  generate(start: Point, direction?: number, angle?: number) {
    this.setDir(direction);
    this.body = [];
    for (let i = 0; i < 4; i++) {
      this.body.push(start);
      start = new Point (start.x + this.dx, start.y + this.dy);
    }
  }
}

