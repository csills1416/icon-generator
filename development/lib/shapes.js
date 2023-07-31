class Shape {
  constructor(color, width, height, text) {
    this.color = color;
    this.width = width;
    this.height = height;
    this.text = text;
  }

  generateSVG(_text, _textColor) {
    // Abstract method to be implemented by subclasses
    throw new Error('Method not implemented');
  }
}

class Triangle extends Shape {
  constructor(color, width, height, text, textColor) {
    super(color, width, height, text);
    this.textColor = textColor;
  }
  generateSVG() {
    const sideLength = this.width; 
    const height = (Math.sqrt(3) / 2) * sideLength;
    const centerX = this.width / 2;
    const centerY = this.height / 2;

    const points = `${centerX},${centerY - height / 2} ${centerX - sideLength / 2},${centerY + height / 2} ${centerX + sideLength / 2},${centerY + height / 2}`;

    return `<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${points}" fill="${this.color}" />
      <text x="${centerX}" y="${centerY}" fill="${this.textColor}" font-size="16" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  constructor(color, width, height, text, textColor) {
    super(color, width, height, text);
    this.textColor = textColor;
  }
  generateSVG() {
    const x = 0;
    const y = 0;

    return `<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
      <rect x="${x}" y="${y}" width="${this.width}" height="${this.height}" fill="${this.color}" />
      <text x="${this.width / 2}" y="${this.height / 2}" fill="${this.textColor}" font-size="16" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
    </svg>`;
  }
}

class Circle extends Shape {
  constructor(color, width, height, text, textColor) {
    super(color, width, height, text);
    this.textColor = textColor;
  }
  generateSVG() {
    const centerX = this.width / 2;
    const centerY = this.height / 2;
    const radius = this.width / 2;
    return `<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="${this.color}" />
      <text x="${centerX}" y="${centerY}" fill="${this.textColor}" font-size="16" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
    </svg>`;
  }
}

export {Triangle, Square, Circle}