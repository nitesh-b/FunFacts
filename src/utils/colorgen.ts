// Function to generate a random shade of brown
export function generateBrown(): string {
    // Generate random values for RGB components within a suitable range
    const red = Math.floor(Math.random() * 51); // 0-50
    const green = Math.floor(Math.random() * 51); // 0-50
    const blue = Math.floor(Math.random() * 26); // 0-25

    // Return the RGB color in hexadecimal format
    return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
}

// Function to generate a light cream or beige color
export function generateLightCreamOrBeige(): string {
    // Generate random values for RGB components within a suitable range
    const red = Math.floor(Math.random() * 76) + 180; // 180-255
    const green = Math.floor(Math.random() * 51) + 205; // 205-255
    const blue = Math.floor(Math.random() * 26) + 230; // 230-255

    // Return the RGB color in hexadecimal format
    return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
}

// Generate colors
const brownColor = generateBrown();
const lightCreamOrBeigeColor = generateLightCreamOrBeige();
