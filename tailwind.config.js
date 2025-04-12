/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Scan JS/JSX/TS/TSX files in src
        "./public/index.html", // Scan public/index.html
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
