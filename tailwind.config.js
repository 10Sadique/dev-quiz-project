/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                lime: '#84CC16',
                'gray-dark': '#27272A',
                'gray-light': '#52525B',
                light: '#f5f5f5',
                'lime-accent': '#76FF03',
            },
            fontFamily: {
                monster: "'Montserrat', sans-serif",
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
