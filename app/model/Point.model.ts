export class Point {

  x: number;
  y: number;

  static pointIn(point: Point, arr: Point[]): boolean {
    for (const p of arr) {
      if (point.equals(p)) {return true; }
    }
    return false;
  }

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals (op: Point): boolean {
    return this.x === op.x && this.y === op.y;
  }

}
