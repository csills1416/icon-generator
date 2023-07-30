class Shape {
  constructor(color, width, height) {
    this.color = color;
    this.width = width;
    this.height = height;
}

generateSVG() {
  //Abstract method to be implemented by subclasses
  throw new Error('Method not implemented');
}
}
class Triangle {
    static generateSVG(color) {
      const sideLength = 100;
      const height = (Math.sqrt(3) / 2) * sideLength;
      const centerX = 150;
      const centerY = 100;
  
      const points = `${centerX},${centerY - height / 2} ${centerX - sideLength / 2},${centerY + height / 2} ${centerX + sideLength / 2},${centerY + height / 2}`;
  
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${points}" fill="${color}" />
      </svg>`;
    }
  }
  
class Square {
    static generateSVG(color) {
      const sideLength = 100;
      const x = 150 - sideLength / 2;
      const y = 100 - sideLength / 2;
  
      const points = `${centerX},${centerY - height / 2} ${centerX - sideLength / 2},${centerY + height / 2} ${centerX + sideLength / 2},${centerY + height / 2}`;
  
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="${x}" y="${y}" width="${sideLength}" height="${sideLength}" fill="${color}" />
      </svg>`;
    }
  }
  

class Circle {
    static generateSVG(color) {
      const centerX = 150;
      const centerY = 100;
      const radius = 50;
      
      const points = `${centerX},${centerY - height / 2} ${centerX - sideLength / 2},${centerY + height / 2} ${centerX + sideLength / 2},${centerY + height / 2}`;
  
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="${color}" />
      </svg>`;
    }
  }
  
  export {Triangle, Square, Circle}