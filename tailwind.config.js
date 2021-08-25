const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [
		'./pages/**/*.js',
		'./components/**/*.js'
	],
	darkMode: false,
	corePlugins: {
		ringColor: false,
	},
	theme: {
		fontFamily: {
			sans: ['Roboto', ...defaultTheme.fontFamily.sans],
		},
		colors: {
			gray: colors.coolGray,
			green: colors.green,
			red: colors.red,
			white: colors.white,
			sky: colors.sky,
			error: '#FF005E',
			pending: '#FFB800',
			success: '#A5DF00',
			yblue: '#1E6EDF',
			'yblue-hover': '#3B86F0',
			blue: {
				300: '#32B5FF',
				400: '#00A3FF',
				900: '#006AE3'
			},
			ygray: {
				background: '#E5E5E5',
				50: '#EDEDED',
				100: '#F2F3F5',
				400: '#BDBDBD',
				500: '#A5A5A5',
				700: '#828282',
				900: '#333333',
			}
		},
		extend: {
			rotate: {
				60: '60deg',
			},
			inset: {
				'-18': '-4.5rem',
			},
			blur: {
				xs: '2px',
				md: '3px',
				lg: '10px'
			},
			width: {
				150: '37.5rem'
			},
			height: {
				104: '26rem'
			}
		},
	}
};
