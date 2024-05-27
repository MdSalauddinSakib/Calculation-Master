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