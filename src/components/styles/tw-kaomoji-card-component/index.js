const plugin = require('tailwindcss/plugin')

/* logo component */
module.exports = 
plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
    addComponents({
        '.kaomoji-card':{
            '@apply mx-2 my-1 flex flex-col flex-grow items-center justify-items-start min-w-max min-h-[8.5em] w-fit h-fit bg-gray-900 rounded-2xl font-NottoSansJP text-slate-100' : {},
        },
        '.key-tag':{
            '@apply bg-teal-800 text-slate-200 text-sm px-2 py-[0.025rem] mx-0.5 my-1 h-fit rounded-full':{},
        },
        '.kaomoji-tags':{
            '@apply w-[95%] h-fit m-2 flex flex-row flex-wrap items-start justify-items-start':{},
        },
        '.separator':{
            '@apply w-[90%] h-1 bg-gray-500 rounded-full':{},
        },
        '.kaomoji-string':{
            '@apply min-h-[2em] max-h-fit min-w-max mb-3 mt-6 mx-6 px-4 text-[0.6rem] lg:text-lg xl:text-xl font-NottoSansJP':{},
        },
    });
})