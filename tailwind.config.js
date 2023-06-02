/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            maxWidth: {
                container: '1440px',
            },
            screens: {
                xs: '320px',
                sm: '375px',
                sml: '500px',
                md: '667px',
                mdl: '768px',
                lg: '960px',
                lgl: '1024px',
                xl: '1055px',
                '2xl': '1280px',
                xl3: '1536px',
            },
            fontFamily: {
                textHeading: ['Roboto', 'sans-serif'],
                textBody: ['Poppins', 'sans-serif'],
            },
            boxShadow: {
                testShadow: '0px 0px 32px 1px rgba(199,199,199,1)',
                amazonInput: '0 0 3px 2px rgb(228 121 17 / 50%)',
            },
            colors: {
                green_dark: '#003D29',
                green_light: '#08AC0A',
                whiteText: '#ffffff',
                lightText: '#ccc',
                quantity_box: '#F0F2F2',
                footerBottom: '#131A22',
            },
        },
    },
    plugins: [],
};
