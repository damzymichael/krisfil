import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'serif']
    },
    extend: {
      colors: {
        'light-dark': '#2f2f2f',
        text: '#180202',
        bg: '#FAFAFA',
        pry: '#000080',
        pryLight: '#000080cf',
        sec: '#ADA6B9',
        secLight: '#ada6b9ef',
        acc: '#A80000'
      },
      backgroundImage: {
        'dark-pattern': "url('./src/assets/dark-bg.jpg')",
        'btn-grad': 'linear-gradient(90deg, #4A6599 -4.34%, #192233 63.47%)',
        'dark-overlay':
          'linear-gradient(33.91deg, rgba(0, 0, 0, 0.5) 6.86%, rgba(47, 47, 47, 0.5) 50.1%, rgba(102, 102, 102, 0.5) 100%)'
      }
    }
  },
  plugins: []
};

export default config;
