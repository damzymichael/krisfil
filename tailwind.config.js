/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      heading: ['Playfair Display', 'serif'],
      body: ['Lora', 'serif']
    },
    extend: {
      colors: {
        text: '#180202',
        bg: '#FAFAFA',
        pry: '#000080',
        pryLight: '#000080cf',
        sec: '#ADA6B9',
        secLight: '#ada6b9ef',
        acc: '#A80000'
        // d_text: '#FDE7E7',
        // d_bg: '#050505',
        // d_pry: '#8080FF',
        // d_sec: '#4D4659',
        // d_acc: '#FF5757'
      }
    }
  },
  plugins: []
};
