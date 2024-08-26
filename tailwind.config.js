/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				IMFell: ["'IM Fell English'"],
			},
			keyframes: {
				disappear: {
					"0%": { opacity: "1" },
					"70%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
			},
			// animation: {
			// 	disappear: "disappear 1s ease-in-out",
			// },
		},
	},
	plugins: [],
};
