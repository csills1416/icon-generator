const { Triangle, Square, Circle } = require('./shapes');

describe('Triangle', () => {
  it('should create a triangle', () => {
    const color = 'red';
    const triangle = new Triangle(color);
    expect(triangle.color).toBe(color);
  });
});

describe('Square', () => {
  it('should create a square', () => {
    const color = 'blue';
    const square = new Square(color);
    expect(square.color).toBe(color);
  });
});

describe('Circle', () => {
  it('should create a circle', () => {
    const color = 'green';
    const circle = new Circle(color);
    expect(circle.color).toBe(color);
  });
});
