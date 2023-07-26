const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require('./shapes.js'); 

function generateSVG(shape, shapeColor, text, textColor) {
    try {
        const {text, textColor, shapeColor, shape} = await inquirer.prompt ({
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
            name:'shapeColor',
            message: 'Enter the color for the shape:',
        },
    });

    const svg = generateSVG(shapeColor, text, textColor, shape);
    fs.writeFileSync('logo.svg', svg);
    console.log('Your SVG has been generated!');
    return svg;
    } catch (error) {
        console.log(error);
    }

    promptUser();