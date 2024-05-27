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

// C