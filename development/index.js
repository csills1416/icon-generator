const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require('./shapes.js');

async function generateSVG(shape, shapeColor, text, textColor) {
  let svg;
  try {
    switch (shape) {
      case 'triangle':
        svg = Triangle.generateSVG(shapeColor, text, textColor);
        break;
      case 'square':
        svg = Square.generateSVG(shapeColor, text, textColor);
        break;
      case 'circle':
        svg = Circle.generateSVG(shapeColor, text, textColor);
        break;
      default:
        throw new Error('Invalid shape selected');
    }

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
