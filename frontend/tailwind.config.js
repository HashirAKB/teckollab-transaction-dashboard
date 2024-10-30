/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base colors
        primary: {
          DEFAULT: '#6366F1', // Indigo color
          hover: '#F8FAFC',
          light: '#818CF8'
        },
        // Status colors
        status: {
          delivered: {
            text: '#16A34A',    // Green text
            bg: '#DCFCE7'       // Light green background
          },
          process: {
            text: '#EA580C',    // Orange text
            bg: '#FFEDD5'       // Light orange background
          },
          cancelled: {
            text: '#DC2626',    // Red text
            bg: '#FEE2E2'       // Light red background
          }
        },
        // Table colors
		table: {
			bg:'#E2E8F0',
          header: '#E2E8F0',     // Light header background
          border: '#E2E8F0',     // Light border color
          hover: '#E2E8F0',      // Light hover color
          alternate: '#F8F7FF',  // Light alternate row color
          dark: {
            bg: '#1D1E42',      // Dark mode main background
            header: '#151636',   // Dark mode header background
            border: '#1D1E42',   // Dark mode border color
            hover: '#151636',    // Dark mode hover color
            alternate: '#26264F' // Dark mode alternate row color
          }
        },
        // Text colors
        text: {
          primary: '#0F172A',    // Main text color
          secondary: '#64748B',   // Secondary text color
          light: '#94A3B8',       // Light text color
		  dark: {
            primary: '#FFFFFF',    // Dark mode main text
            secondary: '#888C9F',  // Dark mode secondary text
            light: '#7E8299'      // Dark mode muted text
          }
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}