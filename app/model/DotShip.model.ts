import {Ship} from './ship.model';
import {Point} from './Point.model';

export class DotShip extends Ship {
  constructor() {
    super();
  }
  generate(start: Point, direction?: number, angle?: number) {
    this.body = [];
    this.body.push(start);
  }
}

