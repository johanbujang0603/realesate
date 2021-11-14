// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary': '#ff0086',
            }
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
      container: true
    },
    plugins: [
        require('@tailwindcss/forms'),
        function ({ addComponents }) {
            addComponents({
              '.container': {
                width: '100%',
                margin: '0 auto',
                '@screen sm': {
                  maxWidth: '640px',
                },
                '@screen md': {
                  maxWidth: '768px',
                },
                '@screen lg': {
                  maxWidth: '1024px',
                },
                '@screen xl': {
                  maxWidth: '1200px',
                },
              }
            })
          }
    ],
}