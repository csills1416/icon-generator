import fs from 'fs';
import inquirer from 'inquirer';
import { Triangle, Square, Circle } from './lib/shapes.js';

async function generateSVG(shape, shapeColor, text, textColor) {
  let svg;
  try {
    let shapeInstance;

    switch (shape) {
      case 'triangle':
        shapeInstance = new Triangle(shapeColor);
        break;
      case 'square':
        shapeInstance = new Square(shapeColor);
        break;
      case 'circle':
        shapeInstance = new Circle(shapeColor);
        break;
      default:
        throw new Error('Invalid shape selected');
    }

    svg = shapeInstance.generateSVG();
    fs.writeFileSync('logo.svg', svg);
    console.log('Your SVG has been generated!');
    return svg;
  } catch (error) {
    console.error(error);
  }
}

async function promptUser() {
  try {
    const { text, textColor, shape, shapeColor } = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the shape:',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color for the shape:',
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color for the shape:',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
    ]);

    await generateSVG(shape, shapeColor, text, textColor);
  } catch (error) {
    console.error(error);
  }
}

promptUser();
