/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ['inter', 'sans-serif'],
            },
            colors: {
                custom: {
                    100: 'rgba(244, 246, 255, 1)',
                    200: 'rgba(249, 249, 249, 0.80)',
                    300: '#5C5B5B',
                    400: '#A6A6A6',
                    500: 'rgba(74, 109, 255, 1)',
                    600: '#B6B6B6'
                },
            },
        },
    },
    plugins: [],
}

