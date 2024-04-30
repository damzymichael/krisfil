import {useRef} from 'react';
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Pagination, Mousewheel, Keyboard} from 'swiper/modules';
import {Autoplay, Navigation} from 'swiper/modules';
import girl_review from '../assets/girl-review.jpeg';
import {ReviewBlank, ReviewFill} from './SVGs';

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(2 ** 53 - 1);

const Testimonials = () => {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <Swiper
      ref={swiperRef}
      className='mb-20 relative py-5 sm:py-10 px-3 swiper_container'
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
      modules={[Navigation, Mousewheel, Keyboard, Autoplay, Pagination]}
      autoplay
      loop
      cssMode={true}
      pagination={{clickable: true}}
      mousewheel={true}
      keyboard={true}
    >
      <SwiperSlide>
        <div className='w-full sm:w-3/5 mx-auto relative p-3'>
          <p className='font-medium mb-5'>
            Discovering Krisfil Kouture was a game-changer for me! Their
            attention to detail, quality fabrics, and unique designs are
            unmatched. Every piece I've purchased has become a staple in my
            wardrobe, elevating my style effortlessly. I can confidently say,
            they've set a new standard in the world of fashion.
          </p>
          <div className='flex items-center gap-4'>
            <img
              src={girl_review}
              alt=''
              className='w-20 h-20 object-cover rounded-full'
            />
            <p className='font-[700] text-xl'>- Sarah D</p>
            <div className='flex gap-1 ml-5'>
              <ReviewFill />
              <ReviewFill />
              <ReviewFill />
              <ReviewFill />
              <ReviewBlank />
            </div>
          </div>
          <p className='hidden sm:block text-9xl font-black text-[#b9987c] absolute -top-3 -left-20'>
            “
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full sm:w-3/5 mx-auto relative p-3'>
          <p className='font-medium mb-5'>
            Discovering Krisfil Kouture was a game-changer for me! Their
            attention to detail, quality fabrics, and unique designs are
            unmatched. Every piece I've purchased has become a staple in my
            wardrobe, elevating my style effortlessly. I can confidently say,
            they've set a new standard in the world of fashion.
          </p>
          <div className='flex items-center gap-4'>
            <img
              src={girl_review}
              alt=''
              className='w-20 h-20 object-cover rounded-full'
            />
            <p className='font-[700] text-xl'>- Sarah D</p>
            <div className='flex gap-1 ml-5'>
              <ReviewFill />
              <ReviewFill />
              <ReviewFill />
              <ReviewFill />
              <ReviewBlank />
            </div>
          </div>
          <p className='hidden sm:block text-9xl font-black text-[#b9987c] absolute -top-3 -left-20'>
            “
          </p>
        </div>
      </SwiperSlide>
      <div className='slider-controler'>
        <button
          className='hidden sm:block absolute top-1/2 -translate-y-1/2 swiper-button-prev slider-arrow'
          onClick={() => swiperRef.current?.swiper.slidePrev()}
        />
        <button
          className='hidden sm:block absolute top-1/2 right-0 -translate-y-1/2 swiper-button-next slider-arrow'
          onClick={() => swiperRef.current?.swiper.slideNext()}
        />
      </div>
    </Swiper>
  );
};

export default Testimonials;
