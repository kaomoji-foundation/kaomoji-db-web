const fonts = require('./src/components/styles/tw-fonts-component');
const kaomojiCard = require('./src/components/styles/tw-kaomoji-card-component');
const categories = require('./src/components/styles/tw-dropdown-component');

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'lg-md': { 'min': '796px' }, //? May be un used
            },
            fontSize: {
                '2xs': '.5rem'
            },
            keyframes: {
                blink: {
                    '0%': { border: '10px solid #37bcf9' },
                    '25%': { border: '10px solid green' },
                    '50%': { border: '10px solid yellow' },
                    '75%': { border: '10px solid white' },
                    '100%': { border: '10px solid #37bcf9' }
                }
            },
            gridTemplateColumns: {        
                // Auto column grid        
                'auto': 'repeat(auto-fit, minmax(12em, 1fr))',
                // Auto column grid, better for small screens but 
                //! currently lacks support due to min()
                'auto-!': 'repeat(auto-fit, minmax(min(12em, 100%), 1fr))'
            },
            animation: {
                'blink': 'blink 500ms linear',
                'spin-2': 'spin 2s linear infinite',
            },
            fontFamily: {
                NottoSansJP: ['NotoSansJapanese', 'sans-serif', 'NotoSans'],
            },
            colors: {
                'gray-1000': '#0c111c'
            },
            height: {
                'px-70': '70px'
            },
            margin: {
                'v-center': '0px auto',
            },
            lineHeight: {
                'h3': '45px'
            },
            minHeight: {
                'px-1200': '1200px',
            },
            marginLeft: {
                'px-70': '70px'
            }
        },
    },
    variants: {
        fontSize: ['responsive', 'hover', 'group-hover'],
    },
    plugins: [
        fonts,
        kaomojiCard,
        categories
    ],
}
