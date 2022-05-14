const plugin = require('tailwindcss/plugin')

const nottoSansJP = require('./nottoSansJP')
const nottoSans = require('./nottoSans')

/* add fonts */
module.exports = 
plugin(function ({ addBase }) {
    const fonts = {
        nottoSansJP,
        nottoSans
    };
    addBase(fonts);
})