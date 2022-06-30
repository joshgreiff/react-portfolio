/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'primary-blue': '#3aadec',
            'primary-purple': '#7c2ae8',
            'primary-yellow': '#dffc01',
            'secondary-blue': '#00c2cb',
            'secondary-turqoise': '#2ed1a2',
            'secondary-limegreen': '#2ed1a2',
            'bookmark-white': '#f7f7f7',
            'dark': '#111827',
            'twitter': '#1DA1F2',
            'linkedin': '#0072b1',
            'instagram': '#E1306C'

        },
        fontSize: {
            mammoth: '8rem'
        },
        container: {
            center: true,
            padding: '1rem',
            screens: {
                lg: "1124px",
                xl: "1124px",
                "2xl": "1124px",
            }
        }
    }
},
  plugins: [],
}
