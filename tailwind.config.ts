// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{tsx,ts}', './components/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B00',   // School’s primary orange (e.g. Dragon Boat theme)
          light: '#FFB74D',
          dark: '#E65100'
        },
        secondary: {
          DEFAULT: '#1A237E',   // School’s secondary blue
          light: '#534BAE'
        },
        background: '#F8F9FA',
        text: '#2C3E50',
        'text-light': '#7F8C8D',
      },
      fontFamily: {
        // Use the school's heading font (Poppins) and a sans-serif for body
        heading: ['Poppins', 'Segoe UI', 'sans-serif'],
        body: ['Segoe UI', 'Roboto', 'sans-serif']
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0,0,0,0.08)',
        md: '0 4px 20px rgba(0,0,0,0.12)',
        lg: '0 8px 30px rgba(0,0,0,0.15)',
        xl: '0 15px 40px rgba(0,0,0,0.18)',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
      },
      spacing: {
        // Custom spacing tokens
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2.5rem',
        xl: '4rem',
        '2xl': '6rem',
      }
    }
  },
  plugins: [],
}

