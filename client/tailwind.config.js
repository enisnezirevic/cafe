/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#7209B7",         // Main purple/violet
                primaryDeep: "#560BAD",      // Deeper shade of primary
                primaryDark: "#480CA8",      // Darkest shade of primary

                secondary: "#3F37C9",        // Main blue
                secondaryBright: "#4361EE",  // Brighter blue
                secondaryLight: "#4895EF",   // Lightest shade of blue

                accent: "#B5179E",           // Main pink accent
                accentBright: "#F72585",     // Brighter pink accent
            },
        },
        fontFamily: {
            "sans": ["Roboto", "sans-serif"],
        }
    },
    plugins: [],
};