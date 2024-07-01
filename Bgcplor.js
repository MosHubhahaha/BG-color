const bgcolorinput = document.querySelector('.input-color');
const boxcolors = document.getElementsByClassName('box-color');
const body=document.body

function changecolor() {
    let rgbValue = bgcolorinput.value;

    // Check if the value is in RGB format
    if (rgbValue.startsWith('rgb(') && rgbValue.endsWith(')')) {
        // Extract RGB values
        let rgbArray = rgbValue.substring(4, rgbValue.length - 1).split(',');
        let r = parseInt(rgbArray[0]);
        let g = parseInt(rgbArray[1]);
        let b = parseInt(rgbArray[2]);

        // Convert RGB values to RGB string
        let rgbColor = `rgb(${r}, ${g}, ${b})`;

        // Loop through each box-color element
        for (let box of boxcolors) {
            box.style.backgroundColor = rgbColor;
            body.style.backgroundColor = rgbColor;
        }
    } else {
        // Default behavior for non-RGB input (e.g., hex, named colors)
        for (let box of boxcolors) {
            body.style.backgroundColor = rgbValue;
        }
    }
}

bgcolorinput.addEventListener('input', changecolor);
