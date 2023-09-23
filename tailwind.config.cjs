/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			dark: '#000',
			light: '#FFFEFA',
			marine: '#003553',
			blue: '#4497d3',
			yellow: '#fac600',
			pink: '#e8378c',
			purple: '#9185be',
			orange: '#ec6726',
			turqouise: '#48b9b2',
			green: '#3EA58B',

			gradgreen: 'linear-gradient(270deg, #4FC7AA 0%, #8DCF97 100%)',
			gradblue: 'linear-gradient(270deg, rgb(98, 162, 241) 0%, rgb(98, 200, 241) 76%)',
			gradyellow: 'linear-gradient(90deg, #F0E4BD 0%, #F8CD46 100%)',
			background: 'linear-gradient(90deg, rgba(98, 162, 241, 1) 0%, rgba(98, 200, 241, 1) 76%)'
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif']
		},
		extend: {
			boxShadow: {
				banner: '-3px 8px 24px 2px rgba(0, 0, 0, 0.12)'
			},
			spacing: {
				'sm-padding': '1.5rem',
				'md-padding': '4rem',
				'lg-padding': '10rem'
			},
			maxWidth: {
				content: '1440px'
			}
		}
	},
	plugins: []
};
