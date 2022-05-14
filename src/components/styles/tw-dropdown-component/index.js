const plugin = require('tailwindcss/plugin')

/* logo component */
module.exports =
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
        addComponents({
            '.dropdown-container:focus-within .dropdown-elements-wrapper': {
                'opacity': '1',
                'display': 'flex',
                'pointer-events': 'auto',
            },
            '.dropdown-elements-wrapper': {
                'display': 'none',
                'z-index': '2',
                'flex-direction': 'column',
            },
            '.dropdown-elements-wrapper > div > a': {
                'width': '100%',
                'height': '100%',
            }
        });
    })