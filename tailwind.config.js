/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/@snovasys/snova-tailwind-uikit/esm2022/lib/**/*.{html,mjs}",
    './node_modules/@snovasys/timechamp-demo-header-and-sidenav/esm2022/lib/**/*.{html,mjs,ts}'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f9f9f9',
          200: '#f1f1f4',
          300: '#dbdfe9',
          400: '#c4cada',
          500: '#99a1b7',
          600: '#78829d',
          700: '#4b5675',
          800: '#252f4a',
          900: '#071437',
        },
        red: {
          200: "#FECACA",
          300: "#FCA5A5",  
          400: "#F87171",  
          500: "#EF4444",  
          600: "#DC2626",
        },
        orange:{
          200:"#FED7AA",
          600:"#EA580C",
        },
        lime:{
          200:"#D9F99D",
          600:"#65A30D",
        },
        emerald:{
          200:"#A7F3D0",
          600:"#059669",
        },
        indigo:{
          200:"#C7D2FE",
          600:"4F46E5",
        },
        pink:{
          200:"#FBCFE8",
          600:"#DB2777"
        },
        rose:{
          200:"#FECACA",
          600:"#E11D48",
        },
        blue: {
          200: "#BFDBFE",  
          500: "#3B82F6",  
          600: "#2563EB",  
        },
        slate:{
          200:"#E28F0",
          600:"#475569",
        },
        'white':'#ffffff',
        'brand': '#ff6f1e',
        "brand-active": "#f15700",
        "brand-light": "#fff5ef",
        "brand-clarity": "rgba(255, 111, 30, 0.2)",
        "brand-inverse": "#fff",
        "primary": "#1b84ff",
        "primary-active": "#056ee9",
        "primary-light": "#eff6ff",
        "primary-clarity": "rgba(27, 132, 255, 0.2)",
        "primary-inverse": "#fff",
        "success": "#17c653",
        "success-active": "#04b440",
        "success-light": "#eafff1",
        "success-clarity": "rgba(23, 198, 83, 0.2)",
        "success-inverse": "#fff",
        "info": "#7239ea",
        "info-active": "#5014d0",
        "info-light": "#f8f5ff",
        "info-clarity": "rgba(114, 57, 234, 0.2)",
        "info-inverse": "#fff",
        "danger": "#f8285a",
        "danger-active": "#d81a48",
        "danger-light": "#ffeef3",
        "danger-clarity": "rgba(248, 40, 90, 0.2)",
        "danger-inverse": "#fff",
        "warning": "#f6b100",
        "warning-active": "#dfa000",
        "warning-light": "#fff8dd",
        "warning-clarity": "rgba(246, 177, 0, 0.2)",
        "warning-inverse": "#fff",
        "dark": "#1e2129",
        "dark-active": "#111318",
        "dark-light": "#f9f9f9",
        "dark-clarity": "rgba(30, 33, 41, 0.2)",
        "dark-inverse": "#fff",
        "light": "#fff",
        "light-active": "#fcfcfc",
        "light-light": "#fff",
        "light-clarity": "hsla(0, 0%, 100%, 0.2)",
        "light-inverse": "#4b5675",
        "secondary": "#f9f9f9",
        "secondary-active": "#f9f9f9",
        "secondary-light": "#f9f9f9",
        "secondary-clarity": "hsla(0, 0%, 98%, 0.2)",
        "secondary-inverse": "#4b5675",
        "coal-100": "#15171c",
        "coal-200": "#13141a",
        "coal-300": "#111217",
        "coal-400": "#0f1014",
        "coal-500": "#0d0e12",
        "coal-600": "#0b0c10",
        "coal-black": "#000",
        "coal-clarity": "rgba(24, 25, 31, .5)",
        "page-bg" : "#fefefe",
        "silver" : "#e8e9eb",
        "cream":"#fdba8c",
        "blue-dark":"#1a56db",
        "light-blue-100":'#e8f5ff',
        "light-blue-200":'#e3f3ff',
        "light-blue-300":'#d1ebfe',
        "light-blue-400":'#bde2fe',
        "light-blue-500":'#abdafe',
        "light-blue-600":'#8fcefd',
        "light-blue-700":'#87cafd',
        "light-blue-800":'#78c4fd',
        "light-blue-900":'#57b5fc',
        "light-blue-1000":"#219efc",
        "warm-yellow":"#ffc000",
        scrollbar : '#f1f1f4 transparent', // Scrollbar thumb color
        scrollbarTrack : '#f1f1f4',

        //dark-theme styles
        "dr-gray": {
          100: '#1b1c22',
          200: '#26272f',
          300: '#363843',
          400: '#464852',
          500: '#636674',
          600: '#808290',
          700: '#9a9cae',
          800: '#b5b7c8',
          900: '#f5f5f5',
        },
       'dr-brand': '#d74e00',
       'dr-brand-active': '#f35700',
       'dr-brand-light': '#272320',
       'dr-brand-clarity': 'rgba(215, 78, 0, .2);',
       'dr-brand-inverse': '#fff',
       'dr-primary': '#006ae6',
       'dr-primary-active': '#107eff',
       'dr-primary-light': '#172331',
       'dr-primary-clarity': 'rgba(0, 106, 230, .2);',
       'dr-primary-inverse': '#fff',
       'dr-success': '#00a261',
       'dr-success-active': '#01bf73',
       'dr-success-light': '#1f2623',
       'dr-success-clarity': 'rgba(0, 162, 97, .2)',
       'dr-success-inverse': '#fff',
       'dr-info': '#883fff',
       'dr-info-active': '#9e63ff',
       'dr-info-light': '#27213',
       'dr-info-clarity': 'rgba(136, 63, 255, .2)',
       'dr-info-inverse': '#fff',
       'dr-danger': '#e42855',
       'dr-danger-active': '#ff3767',
       'dr-danger-light': '#302024',
       'dr-danger-clarity': 'rgba(228, 40, 85, .2);',
       'dr-danger-inverse': '#fff',
       'dr-warning': '#c59a00',
       'dr-warning-active': '#d9aa00',
       'dr-warning-light': '#242320',
       'dr-warning-clarity': 'rgba(197, 154, 0, .2);',
       'dr-warning-inverse': '#fff',
       'dr-dark': '#272a34',
       'dr-dark-active': '#2d2f39',
       'dr-dark-light': '#1e2027',
       'dr-dark-clarity': 'rgba(39, 42, 52, .2);',
       'dr-dark-inverse': '#fff;',
       'dr-light': '#1f212a',
       'dr-light-active': '#1f212a',
       'dr-light-light': '#1f212a',
       'dr-light-clarity': 'rgba(31, 33, 42, .2);',
       'dr-light-inverse': '#9a9cae',
       'dr-secondary': '#363843',
       'dr-secondary-active': '#464852',
       'dr-secondary-light': '#363843',
       'dr-secondary-clarity': 'rgba(54, 56, 67, .2)',
       'dr-secondary-inverse': '#9a9cae',
       'info-dark': '#272134',
       'warning-dark': '#242325',
       'offlinetime':'#f9fdfd',
       'workingtime':'#21d65d',
       'modifiedtime':'#f7b82f',
       'rejectedtime':'rgb(238, 87, 87)',
       'breaktime':'#fa7300e0',
       'idletime':'#ffff00',
       'suspicioustime':'#ff4d6d',
       'productivetime':'#4cc96d',
       'nonproductivetime':'#f27575',
       'neutraltime':'rgba(131, 139, 194, 0.7)',
       'awaytime':'#c1c1c1'

      },
      boxShadow: {
        'default-box': '0px 4px 12px 0px rgba(0, 0, 0, 0.09)',
        'light-box': '0px 3px 4px 0px rgba(0, 0, 0, 0.03)',
        'primary-box': '0px 4px 12px 0px rgba(40, 132, 239, 0.35)',
        'success-box': '0px 4px 12px 0px rgba(53, 189, 100, 0.35)',
        'danger-box': '0px 4px 12px 0px rgba(241, 65, 108, 0.35)',
        'info-box': '0px 4px 12px 0px rgba(114, 57, 234, 0.35)',
        'warning-box': '0px 4px 12px 0px rgba(246, 192, 0, 0.35)',
        'dark-box': '0px 4px 12px 0px rgba(37, 47, 74, 0.35)',
        'dr-shadow':'0px 7px 18px 0px rgba(0,0,0,.09)',
        'dr-theme-shadow-box': 'none',
        'timeline':'1px 1px 7px'
      },
      fontFamily : {
        'sans': ['Inter','system-ui','sans-serif']
      },
      fontSize: {
        '2sm': '0.8125rem',
        '2xs':'0.6875rem',
        '3xs':'0.625rem'
      },
      screens:{
        'xs':'480px'
      },
      height: {
        '4.5':'1.125rem',
        '5.5':'1.375rem',
        '6.5':'1.625rem'
      },
      width:{
        'sidebar':'17.5rem',
        '4.5':'1.125rem',
        '5.5':'1.375rem',
        '6.5':'1.625rem'
      },
      padding:{
        'nav':'17.5rem',
        '7.5':'1.875rem'
      },
      lineHeight:{
        '4.5':'1.125rem'
      },
    },
    
  },
  variants: {
    boxShadow: ['hover'],
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--sidebar-width': theme('width.sidebar'),
          '--nav-padding': theme('padding.nav'),
          '--primary': theme('colors.primary'),
          '--info': theme('colors.info'),
          '--brand': theme('colors.brand'),
          '--success': theme('colors.success'),
          '--warning': theme('colors.warning'),
          '--cream': theme('colors.cream'),
          '--blue-dark': theme('colors.blue-dark'),
          '--light-blue-100': theme('colors.light-blue-100'),
          '--light-blue-200': theme('colors.light-blue-200'),
          '--light-blue-300': theme('colors.light-blue-300'),
          '--light-blue-400': theme('colors.light-blue-400'),
          '--light-blue-500': theme('colors.light-blue-500'),
          '--light-blue-600': theme('colors.light-blue-600'),
          '--light-blue-700': theme('colors.light-blue-700'),
          '--light-blue-800': theme('colors.light-blue-800'),
          '--light-blue-900': theme('colors.light-blue-900'),
          '--light-blue-1000': theme('colors.light-blue-1000'),
          '--light':theme('colors.light'),
          '--white':theme('colors.white'),
        },
      })
    },
    require('tailwindcss-font-inter')({
      importFontFace: true,
    }),
    function ({ addUtilities }) {
      addUtilities({
        '.range-thumb': {
          '&::-webkit-slider-thumb': {
            pointerEvents: 'all',
            width: '2.1875rem',
            height: '1.5rem',
            WebkitAppearance: 'none',
          },
          '&::-moz-range-thumb': {
            width: '2.1875rem',
            height: '1.5rem',
            appearance: 'none',
          },
        },
      });
    },
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-custom': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'transparent transparent',
          position: 'relative',
          overflowY: 'scroll',
          overflowX:'auto',
          '&::-webkit-scrollbar': {
            width: '.35rem',
            height: '.35rem'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#f1f1f4',
            borderRadius: '1.25rem',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-corner': {
            backgroundColor: 'transparent'
          },
          '&:hover':{
            scrollbarColor: '#f1f1f4 transparent'
          },
        },
      };
      addUtilities(newUtilities);
    },

    function ({ addUtilities }) {
      const newUtilities = {
        '.dr-scrollbar-custom': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'transparent transparent',
          position: 'relative',
          overflowY: 'scroll',
          overflowX:'auto',
          '&::-webkit-scrollbar': {
            width: '.35rem',
            height: '.35rem'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#26272f',
            borderRadius: '1.25rem',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-corner': {
            backgroundColor: 'transparent'
          },
          '&:hover':{
            scrollbarColor: '#26272f transparent'
          },
        },
      };
      addUtilities(newUtilities);
    },

    function ({addUtilities}){
      const newUtilities={
        '.apexcharts-tooltip':{
          border: '1px solid #f1f1f4 !important',
          boxShadow: '0px 4px 12px 0px rgba(0,0,0,.09) !important',
          backgroundColor:'#fff !important',
          borderRadius:'.625rem !important',
          color:'#4b5675 !important',
          fontFamily:'Inter !important',
        },
        '.dark .apexcharts-tooltip':{
          border:'1px solid #26272f !important',
          backgroundColor:'#1f212a !important',
        },
        
      };
      addUtilities(newUtilities);
    },
    function({ addBase }) {
      addBase({
        // Remove spinner buttons for number input on Webkit browsers
        'input[type="number"]::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
        },
        'input[type="number"]::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
        },
        // Remove spinner buttons for number input on Firefox
        'input[type="number"]': {
          '-moz-appearance': 'textfield',
        },
      });
    },

    function ({ addUtilities }) {
      addUtilities({
        '.antialiased': {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
      });
    },
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbars in WebKit browsers */
          '-ms-overflow-style': 'none', /* For Internet Explorer and Edge */
          'scrollbar-width': 'none', /* For Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', /* For Chrome, Safari, and Opera */
        },
      });
    },
  ]

    
}


