import hand_tape from './assets/hand_tape.jpeg';
import lady_heels from './assets/lady_heels.jpeg';
import jeans from './assets/jeans.jpeg';
import half_lady from './assets/half-girl.jpeg';
import white_garment from './assets/white_garment.jpeg';
import cool_lady from './assets/cool_lady.jpeg';

export interface OurServices {
  heading: string;
  description: string;
  image: string;
}

export const ourServices: OurServices[] = [
  {
    heading: 'Custom Tailoring',
    description:
      'Precision-crafted garments tailored to your measurements and style.',
    image: hand_tape
  },
  {
    heading: 'Alterations',
    description: 'Fine-tuning for the perfect fit',
    image: lady_heels
  },
  {
    heading: 'Repairs',
    description: 'Meticulous restoration to extend garment life',
    image: jeans
  },
  {
    heading: 'Consultation and Fittings',
    description: 'Personalized attention for your unique needs',
    image: half_lady
  },

  {
    heading: 'Uniform Tailoring',
    description: 'Professional attire tailored to your brand',
    image: white_garment
  },
  {
    heading: 'Bridal and Formal Wear',
    description: 'Bespoke attire for your special occasions',
    image: cool_lady
  }
];

export const reviews = [
  {
    name: 'Mrs O. Adebayo',
    star: 4,
    review:
      "The team at Krisfil is truly exceptional. They go above and beyond to ensure customer satisfaction. I've had multiple garments tailored here, and every experience has been fantastic. Thank you for your professionalism and expertise!",
    time: '5 months ago'
  },
  {
    name: 'Miss Stella',
    star: 5,
    review:
      "I've been a loyal customer of Krisfil for years, and they never disappoint. Whether it's alterations, repairs, or custom tailoring, their craftsmanship is always top-notch. Can't imagine going anywhere else.",
    time: '10 months ago'
  },
  {
    name: 'Tosin Ogunleye',
    star: 4,
    review:
      'My wedding gown was a dream come true, thanks to the team at Krisfil. They listened to my ideas and created a dress that fit like a glove. I felt like a princess on my big day',
    time: '1 year ago'
  }
];
