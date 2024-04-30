import {useEffect} from 'react';
import {
  ArrowRightLong,
  BlueCurveIcon,
  BrownCurveIcon,
  FrenchCurve,
  ArrowDiagonal,
  ReviewWhite,
  WaveIcon,
  PhoneIcon,
  Available,
  Instagram,
  Mail,
  Location,
  Whatsapp
} from './components/SVGs';
import {ArrowRightIcon} from './components/SVGs';
import Nav from './components/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import lady_sitting from './assets/lady_sitting.jpeg';
import {ourServices} from './data';
import Service from './components/Service';
import Gallery from './components/Gallery';
import half_girl from './assets/half-girl.jpeg';
import Testimonials from './components/Testimonials';

//Add active links and whatsapp Links
//Mobile nav
//Change background image for hero section

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <FrenchCurve className='absolute -top-56 -left-40' width={350} />
      <Nav />
      <main className='p-3 relative'>
        <Hero />
        <section
          id='about-us'
          className='-mx-3 min-h-[60vh] bg-red-400 relative overflow-hidden mb-8'
        >
          <div className='bg-[#00000080] z-10 sm:min-h-[90%] py-8 sm:py-0 text-white flex flex-col sm:flex-row items-center absolute top-1/2 -translate-y-1/2'>
            <h2 className='font-extrabold text-5xl sm:text-7xl md:text-8xl w-1/2 flex flex-col items-center mb-5 sm:mb-0'>
              <div className='text-right flex gap-2 sm:block relative'>
                <span>About</span>
                <div>
                  <ArrowRightLong
                    arrowColor='white'
                    className='absolute top-1/2 hidden sm:block -right-14 md:-right-16'
                  />
                </div>
                <span className='text-left'>Us</span>
              </div>
            </h2>
            <div className='sm:w-1/2'>
              <p className='font-medium text-center sm:text-left text-base sm:text-lg md:text-xl w-4/5 mx-auto'>
                At krisfil koutures, we believe that style is more than just
                clothing – it's a form of expression, a reflection of
                personality, and a celebration of individuality. With a passion
                for creativity and a commitment to quality, we strive to inspire
                and empower fashion enthusiasts worldwide.
              </p>
            </div>
          </div>
          <BlueCurveIcon className='absolute hidden sm:block -left-52 sm:-left-40 top-60' />
        </section>
        <section id='our-services' className='relative overflow-hidden mb-16'>
          <h1 className='uppercase font-black text-3xl sm:text-4xl md:text-6xl flex items-center gap-3 justify-center my-2 mb-6'>
            <span>Krisfil</span>
            <div className='inline-block w-16 sm:w-24 rounded-3xl p-1 dark-pattern'>
              <div className='bg-white flex items-center rounded-3xl justify-center w-1/2 p-2 translate-x-full'>
                <ArrowRightIcon className='h-2 sm:h-4' />
              </div>
            </div>
            <span>Kouture</span>
          </h1>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-5'>
            <img
              src={lady_sitting}
              alt='Fashionista lady'
              className='w-full sm:w-[45%] aspect-video object-top object-cover rounded-2xl'
            />
            <div className='w-full sm:w-[45%]'>
              <h2 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 font-extrabold'>
                Our Services
              </h2>
              <p className='font-medium text-base sm:text-lg'>
                Empowering Your Style Journey: Our Services Tailored to Your
                Fashion Dreams. Experience Excellence, Unmatched Quality, and
                Personalized Attention.
              </p>
            </div>
          </div>
          <BrownCurveIcon className='absolute w-[110vw] lg:w-[800px] -ml-3 -top-60 sm:-top-10 -z-10' />
          <div className='mt-16 flex flex-wrap gap-3 sm:px-8 justify-around'>
            {ourServices.map((service, i) => (
              <Service key={i} {...service} />
            ))}
          </div>
        </section>

        <section id='gallery' className='sm:px-8 mb-20'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 font-extrabold text-center'>
            Gallery
          </h2>
          <p className='text-center font-medium text-lg sm:text-xl mb-10'>
            Step into our style gallery: where every image tells a story.
            Explore Inspiration, Elegance, and Endless <br /> Possibilities.
          </p>
          <Gallery />
        </section>

        <section id='training-offer' className='relative mb-20'>
          {/* <svg
            width='1728'
            height='1131'
            viewBox='0 0 1728 1131'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute -left-10 w-full -z-10'
          >
            <path
              d='M-69.4009 646.303C-107.894 545.794 -174.384 451.44 -167.505 339.727C-163.594 276.204 -154.89 204.08 -135.234 143.195C-120.587 97.8245 -78.3557 78.4884 -37.4524 60.9039C103.458 0.325378 260.007 14.0095 375.942 120.283C439.044 178.127 475.915 258.544 515.999 332.627C555.801 406.191 595.07 479.503 644.115 547.553C708.82 637.332 833.714 720.034 938.751 647.594C1004.32 602.375 1045.67 548.774 1132.7 557.235C1278.04 571.365 1353.89 750.961 1417.66 856.711C1485.08 968.515 1553.92 1105.2 1699.06 1105.2C1727.59 1105.2 1754.53 1099.39 1783.61 1099.39'
              stroke='#4A6599'
              strokeWidth='50'
              strokeLinecap='round'
            />
          </svg> */}
          <header className='text-center mb-5'>
            <h1 className='font-bold text-4xl sm:text-5xl mb-2'>
              Training offers
            </h1>
            <p className='font-semibold text-base sm:text-xl'>
              Step into our Style Gallery: Where Every Image Tells a Story.
              Explore Inspiration, Elegance, and Endless Possibilities.
            </p>
          </header>

          <div className='bg-btn-grad flex items-center p-2 pl-4 gap-3 mx-auto mb-2 rounded-xl w-max'>
            <p className='text-xl text-white'>Our training packages</p>
            <div className='bg-white rounded-xl w-max flex items-center justify-center ml-auto'>
              <ArrowDiagonal className='w-3/5' />
            </div>
          </div>

          <div className='my-10 flex flex-wrap gap-3 sm:px-8 justify-around'>
            <div className='w-full sm:w-[45%] md:w-[30%] h-[400px] relative p-4 rounded-3xl text-white overflow-hidden bg-dark-overlay flex flex-col justify-end'>
              <img
                src={half_girl}
                alt='Banner'
                className='absolute w-full h-full -m-4 -z-10 object-cover'
              />
              <div className='font-bold'>
                <h1 className='text-2xl mb-3'>Basic Training Class</h1>
                <h2 className='text-4xl'>1 month</h2>
              </div>
              <button className='bg-[#b9987c] py-4 rounded-full mt-3 flex gap-2 items-center justify-center'>
                <span>Apply now</span>
                <svg
                  width='53'
                  height='16'
                  viewBox='0 0 53 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M52.7071 8.70711C53.0976 8.31658 53.0976 7.68342 52.7071 7.29289L46.3431 0.928932C45.9526 0.538408 45.3195 0.538408 44.9289 0.928932C44.5384 1.31946 44.5384 1.95262 44.9289 2.34315L50.5858 8L44.9289 13.6569C44.5384 14.0474 44.5384 14.6805 44.9289 15.0711C45.3195 15.4616 45.9526 15.4616 46.3431 15.0711L52.7071 8.70711ZM0 9H52V7H0V9Z'
                    fill='white'
                  />
                </svg>
              </button>
            </div>

            <div className='w-full sm:w-[45%] md:w-[30%] h-[400px] relative p-4 rounded-3xl text-white overflow-hidden bg-dark-overlay flex flex-col justify-end'>
              <img
                src={half_girl}
                alt='Banner'
                className='absolute w-full h-full -m-4 -z-10 object-cover'
              />
              <div className='font-bold'>
                <h1 className='text-2xl mb-3'>Basic Training Class</h1>
                <h2 className='text-4xl'>1 month</h2>
              </div>
              <button className='bg-[#b9987c] py-4 rounded-full mt-3 flex gap-2 items-center justify-center'>
                <span>Apply now</span>
                <svg
                  width='53'
                  height='16'
                  viewBox='0 0 53 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M52.7071 8.70711C53.0976 8.31658 53.0976 7.68342 52.7071 7.29289L46.3431 0.928932C45.9526 0.538408 45.3195 0.538408 44.9289 0.928932C44.5384 1.31946 44.5384 1.95262 44.9289 2.34315L50.5858 8L44.9289 13.6569C44.5384 14.0474 44.5384 14.6805 44.9289 15.0711C45.3195 15.4616 45.9526 15.4616 46.3431 15.0711L52.7071 8.70711ZM0 9H52V7H0V9Z'
                    fill='white'
                  />
                </svg>
              </button>
            </div>

            <div className='w-full sm:w-[45%] md:w-[30%] h-[400px] relative p-4 rounded-3xl text-white overflow-hidden bg-dark-overlay flex flex-col justify-end'>
              <img
                src={half_girl}
                alt='Banner'
                className='absolute w-full h-full -m-4 -z-10 object-cover'
              />
              <div className='font-bold'>
                <h1 className='text-2xl mb-3'>Basic Training Class</h1>
                <h2 className='text-4xl'>1 month</h2>
              </div>
              <button className='bg-[#b9987c] py-4 rounded-full mt-3 flex gap-2 items-center justify-center'>
                <span>Apply now</span>
                <svg
                  width='53'
                  height='16'
                  viewBox='0 0 53 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M52.7071 8.70711C53.0976 8.31658 53.0976 7.68342 52.7071 7.29289L46.3431 0.928932C45.9526 0.538408 45.3195 0.538408 44.9289 0.928932C44.5384 1.31946 44.5384 1.95262 44.9289 2.34315L50.5858 8L44.9289 13.6569C44.5384 14.0474 44.5384 14.6805 44.9289 15.0711C45.3195 15.4616 45.9526 15.4616 46.3431 15.0711L52.7071 8.70711ZM0 9H52V7H0V9Z'
                    fill='white'
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section id='testimonials'>
          <h1 className='font-bold text-4xl sm:text-5xl text-center mb-5 sm:mb-10'>
            Testimonials
          </h1>
          <Testimonials />
        </section>

        <section
          id='review'
          className='bg-[#2f2f2f] text-white -mx-3 py-5 sm:py-10'
        >
          <h1 className='font-bold mb-3 text-center text-3xl sm:text-4xl'>
            Leave your review
          </h1>
          <p className='text-center font-medium'>
            Kindly leave us a review if youre satisfied with our services
          </p>
          <form
            action=''
            className='flex flex-wrap my-5 sm:my-10 gap-5 justify-center p-3'
            onSubmit={e => e.preventDefault()}
          >
            <textarea
              placeholder='Write a review'
              name='review'
              rows={4}
              className='rounded-lg p-3 w-full sm:w-2/5 appearance-none outline-none bg-[#0000001A]'
            ></textarea>
            <div className='w-full sm:w-2/5'>
              <input
                type='text'
                placeholder='Enter your name'
                className='rounded-lg w-full p-3 appearance-none outline-none mb-3 bg-[#0000001A]'
              />
              <div className='flex gap-5 mt-3'>
                <p>Please rate our services</p>
                <div className='flex gap-2'>
                  <ReviewWhite />
                  <ReviewWhite />
                  <ReviewWhite />
                  <ReviewWhite />
                  <ReviewWhite />
                </div>
              </div>
            </div>
            <div className='w-full mt-5'>
              <button className='bg-[#b9987c] block w-max mx-auto px-5 py-3 rounded-full'>
                Submit Review
              </button>
            </div>
          </form>
        </section>

        <section
          id='contact-us'
          className='py-5 sm:py-10 overflow-hidden min-h-80 relative -m-3 px-3'
        >
          <WaveIcon className='absolute -z-10 top-0 left-0 sm:w-full h-full scale-110 sm:scale-[1.7] md:scale-[2.3]' />
          <h1 className='text-center mb-5 font-bold text-3xl sm:text-4xl'>
            Get in touch
          </h1>
          <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-2 mx-auto w-full sm:w-11/12 md:w-10/12'>
            <a
              href='tel+2348068891959'
              className='flex gap-1 items-center hover:underline w-full sm:w-[32%]'
            >
              <PhoneIcon />
              <span>+2348068891959</span>
            </a>
            <p className='flex gap-1 items-center hover:underline w-full sm:w-[32%]'>
              <Available />
              <span>Mon - Fri: 9am - 5pm</span>
            </p>
            <a
              href='https://www.instagram.com'
              className='flex gap-1 items-center hover:underline w-full sm:w-[32%]'
            >
              <Instagram />
              <span>krisfilkouture</span>
            </a>
            <a
              href='mailto:krisfilkouture@gmail.com'
              className='flex gap-1 items-center hover:underline w-full sm:w-[32%]'
            >
              <Mail />
              krisfilKouture@gmail.com
            </a>
            <a
              href=''
              className='flex gap-1 items-center hover:underline w-full sm:w-[32%]'
            >
              <Location />
              <span>Aule Estate, Akure, Ondo State</span>
            </a>
            <a
              href=''
              className='flex gap-1 items-center hover:underline w-full sm:w-[32%]'
            >
              <Whatsapp />
              <span>+2348068891959</span>
            </a>
          </div>
        </section>
        <footer className='-m-3 h-32 bg-[#2f2f2f] flex items-center justify-center text-white'>
          <p>
            &copy; {new Date().getFullYear()} Krisfil Koutures. All rights
            reserved
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
