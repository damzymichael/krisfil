import {useEffect, useRef} from 'react';
import {
  ArrowRightIcon,
  ArrowRightLong,
  BrownStar,
  WhiteStarIcon
} from '../components/SVGs';
import girl_on_red from '../assets/girl-on-red.jpeg';
import girl_with_bag from '../assets/girl-with-bags.jpeg';
import half_girl from '../assets/half-girl.jpeg';

const Hero = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.transform = 'translateX(100%)';
    }
  }, []);
  return (
    <section id='home' className='mt-20 mb-10'>
      <header className='mb-3'>
        <h1 className='uppercase font-black text-3xl sm:text-4xl md:text-6xl flex items-center gap-3 justify-center my-2'>
          <span>Krisfil</span>
          <div className='inline-block w-16 sm:w-24 rounded-3xl p-1 dark-pattern'>
            <div
              className='bg-white flex items-center rounded-3xl justify-center w-1/2 p-2 transition-all duration-[1s]'
              ref={divRef}
            >
              <ArrowRightIcon className='h-2 sm:h-4' />
            </div>
          </div>
          <span>Kouture</span>
        </h1>

        <h2 className='text-center relative font-extrabold'>
          <BrownStar
            className='absolute -left-4 sm:left-[20%] -z-10 -top-full'
            width={70}
          />
          <span className='text-xl sm:text-2xl'>
            Discover The Latest Trends <br /> And Timeless Classics{' '}
          </span>
        </h2>
      </header>
      <p className='flex gap-2 items-center justify-center mb-3'>
        <ArrowRightLong />
        <span className='font-medium text-sm sm:text-base'>
          "Elevate your wardrobe: Discover the latest trends"
        </span>
      </p>
      <div className='flex w-full sm:w-3/5 gap-2 mx-auto mb-4'>
        <img
          src={girl_on_red}
          alt=''
          className='w-2/5 h-[20rem] object-cover rounded-2xl'
          data-aos='fade-down-right'
        />
        <div className='flex flex-col gap-2 flex-grow'>
          <img
            src={girl_with_bag}
            alt=''
            className='h-[156px] object-cover rounded-2xl'
            data-aos='fade-down-left'
          />
          <img
            src={half_girl}
            alt=''
            className='h-[156px] object-cover rounded-2xl animate__animated animate__fadeInRight animate_duration_1s'
            data-aos='fade-up-left'
          />
        </div>
      </div>

      <button className='bg-btn-grad text-sm sm:text-base text-white px-4 py-2 rounded-full flex w-max mx-auto gap-2 items-center'>
        <WhiteStarIcon className='w-4 sm:w-6' />
        <span>Book a session</span>
        <WhiteStarIcon className='w-4 sm:w-6' />
      </button>
      {/* <section className='bg-light-dark absolute w-[120vw] -left-10 text-white py-3 flex overflow-x-hidden mt-6 -rotate-[10deg]'>
        {Array.from({length: 12}).map((_, i) => (
          <div className='flex flex-shrink-0 gap-1 items-center' key={i}>
            <BrownStar className='w-8 h-8' />
            <span>BEST FASHION AGENCY</span>
          </div>
        ))}
      </section>
      <section className='bg-light-dark absolute w-[120vw]  -left-10 text-white py-3 flex overflow-x-hidden mt-6 rotate-[10deg]'>
        {Array.from({length: 12}).map((_, i) => (
          <div
            className='flex flex-shrink-0 gap-1 items-center flipped-text'
            key={i}
          >
            <BrownStar className='w-8 h-8' />
            <span>BEST FASHION AGENCY</span>
          </div>
        ))}
      </section> */}
    </section>
  );
};

export default Hero;
