import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
import {Autoplay} from 'swiper/modules';
import bridal_gown from '../assets/bridal_gown.jpeg';

//!Change Navigation button
//!Double Slide
const Gallery = () => {
  return (
    <Swiper
      className='min-h-[500px] bg-[#2f2f2f] mx-auto rounded-3xl flex items-center justify-center p-5 md:p-0'
      autoplay
      modules={[Pagination, Autoplay]}
      loop
      cssMode={true}
      pagination={{clickable: true}}
      mousewheel={true}
      keyboard={true}
    >
      <SwiperSlide>
        <div className='w-full flex flex-col md:flex-row items-center justify-center gap-8 text-white text-2xl font-bold'>
          <img
            src={bridal_gown}
            alt='Bridal gown'
            className='w-full md:w-1/3 min-w-72 rounded-3xl object-cover'
          />
          <div className='w-full md:w-2/5 mb-10 md:mb-0'>
            <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-3'>
              Bridal Wears 1
            </h2>
            <p className='font-medium text-base sm:text-lg'>
              Elevate Your Love Story: Timeless Elegance, Unforgettable Moments.
              Discover Your Perfect Bridal Look with Us.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full flex flex-col md:flex-row items-center justify-center gap-8 text-white text-2xl font-bold'>
          <img
            src={bridal_gown}
            alt='Bridal gown'
            className='w-full md:w-1/3 min-w-72 rounded-3xl object-cover'
          />
          <div className='w-full md:w-2/5 mb-10 md:mb-0'>
            <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-3'>
              Bridal Wears 2
            </h2>
            <p className='font-medium text-base sm:text-lg'>
              Elevate Your Love Story: Timeless Elegance, Unforgettable Moments.
              Discover Your Perfect Bridal Look with Us.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full flex flex-col md:flex-row items-center justify-center gap-8 text-white text-2xl font-bold'>
          <img
            src={bridal_gown}
            alt='Bridal gown'
            className='w-full md:w-1/3 min-w-72 rounded-3xl object-cover'
          />
          <div className='w-full md:w-2/5 mb-10 md:mb-0'>
            <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-3'>
              Bridal Wears 3
            </h2>
            <p className='font-medium text-base sm:text-lg'>
              Elevate Your Love Story: Timeless Elegance, Unforgettable Moments.
              Discover Your Perfect Bridal Look with Us.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Gallery;
