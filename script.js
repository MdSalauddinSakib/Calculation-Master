function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtraction':
            result = num1 - num2;
            break;
        case 'multiplication':
            result = num1 * num2;
            break;
        case 'division':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Cannot divide by zero';
            }
            break;
        case 'remainder':
            result = num1 % num2;
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}

// Calculate Temperature
// const calculateTemperature = ()=>{
//     const temperature = parseFloat(document.getElementById('temp').value);
//     const operation = document.getElementById("tempOperation").value;
//     let result;

//     switch(operation){
//         case 'celsius':
//             result = 5/9 * (temperature - 32);
//             break;
//         case 'fahrenheit':
//             result = ((9/5) * temperature) + 32;
//             break;
//         default:
//             result = 'Invalid temperature';
//     }
//     document.getElementById('temperatureResult').innerText = `Temperature: ${result}`;
// }
// --------------------------------------------------------
const calculateTemperature = () => {
    const temperature = parseFloat(document.getElementById('temp').value);
    const operation = document.getElementById("tempOperation").value;
    let result;

    switch(operation){
        case 'celsius':
            result = (5/9) * (temperature - 32);
            document.getElementById('temperatureResult').innerText = `Temperature: ${result.toFixed(2)} °C`;
            break;
        case 'fahrenheit':
            result = ((9/5) * temperature) + 32;
            document.getElementById('temperatureResult').innerText = `Temperature: ${result.toFixed(2)} °F`;
            break;
        default:
            document.getElementById('temperatureResult').innerText = 'Invalid temperature';
    }
}


// Calculate Circle Area
const calculateCircleArea = () => {
    const circleRadius = document.getElementById('circle-radius');
    const circleRadiusText = circleRadius.value;
    const radius = parseFloat(circleRadiusText);

    const circleArea = Math.PI * radius * radius;
    const circleAreaFixedNumber =  circleArea.toFixed(3)

    const circleAreaSpan = document.getElementById('circle-area');
    circleAreaSpan.innerText = circleAreaFixedNumber;
}

// calculate rectangle area
const calculateRectangleArea = () => {
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);

    const rectangleWidthValue = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthValue.value;
    const width = parseFloat(rectangleWidthText);

    const rectangleArea = length * width;

    const rectangleAreaSpan = document.getElementById('rectangle-area');rectangleAreaSpan.innerText = rectangleArea;
}

// Calculate Square Area

const calculateSquareArea = () => {
    const squareArea = document.getElementById('square');
    const squareAreaText = squareArea.value;
    const area = parseFloat(squareAreaText);

    const square = area * area;

    const squareAreaSpan = document.getElementById('square-area');
    squareAreaSpan.innerText = square;
}

// calculate triangle area
const calculateTriangleArea = () => {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    const triangleHeightValue = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightValue.value;
    const height = parseFloat(triangleHeightText);

    const triangleArea = 0.5 * base * height;

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;

}

// Calculate Parallelogram Area
const calculateParallelogramArea = () => {
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);

    const parallelogramHeightValue = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightValue.value;
    const height = parseFloat(parallelogramHeightText);

    const parallelogramArea = base * height;

    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = parallelogramArea;

}

// Calculate Rhombus Area
const calculateRhombusArea = () => {
    const rhombusDiagonal1Input = document.getElementById('rhombus-diagonal1');
    const rhombusDiagonal1Text = rhombusDiagonal1Input.value;
    const diagonal1 = parseFloat(rhombusDiagonal1Text);

    const rhombusDiagonal2Input = document.getElementById('rhombus-diagonal2');
    const rhombusDiagonal2Text = rhombusDiagonal2Input.value;
    const diagonal2 = parseFloat(rhombusDiagonal2Text);

    const rhombusArea = 0.5 * diagonal1 * diagonal2;

    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = rhombusArea;

}

// Calculate Trapezoid  Area
const calculateTrapezoidArea = () => {
    const trapezoidBase1Input = document.getElementById('trapezoid-base1');
    const trapezoidBase1Text = trapezoidBase1Input.value;
    const base1 = parseFloat(trapezoidBase1Text);

    const trapezoidBase2Input = document.getElementById('trapezoid-base2');
    const trapezoidBase2Text = trapezoidBase2Input.value;
    const base2 = parseFloat(trapezoidBase2Text);

    const baseSum = base1 + base2;

    const trapezoidHeightInput = document.getElementById('trapezoid-height');
    const trapezoidHeightText = trapezoidHeightInput.value;
    const height = parseFloat(trapezoidHeightText);

    const trapezoidArea = 0.5 * baseSum * height;

    const trapezoidAreaSpan = document.getElementById('trapezoid-area');
    trapezoidAreaSpan.innerText = trapezoidArea;

}

// Calculate Ellipse Area
const calculateEllipseArea = () => {
    const ellipseLongestRadiusInput = document.getElementById('longest-radius');
    const ellipseLongestRadiusText = ellipseLongestRadiusInput.value;
    const longestRadius = parseFloat(ellipseLongestRadiusText);

    const ellipseShortestRadiusInput = document.getElementById('shortest-radius');
    const ellipseShortestRadiusText = ellipseShortestRadiusInput.value;
    const shortestRadius = parseFloat(ellipseShortestRadiusText);

    const ellipseArea = Math.PI * longestRadius * shortestRadius;
    const ellipseAreaFixedNumber =  ellipseArea.toFixed(3)

    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = ellipseAreaFixedNumber;

}

// Calculate Ellipse Area
const calculateCubeArea = () => {
    // a is the length of one side of the cube.
    const cubeLengthInput = document.getElementById('cube-length');
    const cubeLengthText = cubeLengthInput.value;
    const length = parseFloat(cubeLengthText);

    const cubeArea = 6 * length * length;

    const cubeAreaSpan = document.getElementById('cube-area');
    cubeAreaSpan.innerText = cubeArea;

}