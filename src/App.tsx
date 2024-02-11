import AboutUs from './components/AboutUs';
import Button from './components/Button';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import Review from './components/Review';
import ReviewForm from './components/ReviewForm';
import {ourServices, reviews} from './data';
import Masonry from 'react-masonry-css';

//Add active links and whatsapp Links
//Mobile nav
//Change background image for hero section
function App() {
  return (
    <div className='w-screen min-w-[320px] max-w-[1500px] mx-auto'>
      <Navbar />
      <section className='hero min-h-screen px-4 text-center flex items-center justify-center mb-5'>
        <div className='font-bold leading-loose '>
          <h1 className='text-5xl sm:text-7xl font-heading text-text animate__animated animate__bounce'>
            Krisfil Koutures
          </h1>
          <h1 className='text-4xl sm:text-5xl font-heading text-acc animate__animated animate__bounce'>
            {' '}
            et-al Ltd
          </h1>
          <p className='text-acc text-xl sm:text-2xl mb-5'>
            Fashion &bull; Beauty &bull; Comfort
          </p>
          <a href='https://wa.link/whyvnz' target='blank'>
            <Button>Book a session</Button>
          </a>
        </div>
      </section>

      <AboutUs />
      <hr />
      <section className='our-services min-h-screen px-6' id='our-services'>
        <h1 className='font-heading text-center font-[800] text-3xl my-4'>
          Sevices we offer
        </h1>
        <p className='mb-4 font-semibold text-acc p-3'>
          At Krisfil Koutures, we take pride in offering a wide range of expert
          tailoring services to cater to all your clothing needs. Whether you
          need a simple alteration or a complete wardrobe overhaul, our skilled
          team is here to ensure your garments fit you perfectly and reflect
          your unique style. Here are some of the services we provide
        </p>
        {/* list-decimal list-inside  */}

        <Masonry
          breakpointCols={{default: 3, 768: 2, 640: 1}}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'
        >
          {ourServices.map(service => (
            <div
              key={service.heading}
              className='w-full bg-[#ada6b933] border rounded-xl p-4 h-auto'
            >
              <strong className='block mb-4'>{service.heading}</strong>
              <span>{service.description}</span>
            </div>
          ))}
        </Masonry>
      </section>
      <hr />
      <Gallery />
      <hr />
      <section className='px-6 mb-10' id='testimonials'>
        <h1 className='font-heading text-center font-bold text-3xl mt-4 mb-7'>
          Testimonials
        </h1>
        <div className='flex flex-wrap gap-2 mb-10 items-start justify-center'>
          {reviews.map(review => (
            <div
              key={review.name}
              className='bg-[#0000800d] sm:w-2/5 md:w-[30%] p-4 relative'
            >
              <Review number={review.star} />
              <p className='text-xs mb-3'>"{review.review}"</p>
              <div className='text-right'>
                <p className=' font-semibold text-pry'>- {review.name}</p>
                <p className='text-gray-600 text-right text-xs'>
                  {review.time}
                </p>
              </div>
            </div>
          ))}
        </div>
        <ReviewForm />
      </section>

      <section
        className='contact-us bg-[#00008033] min-h-[80vh] p-5'
        id='contact-us'
      >
        <h1 className='font-heading text-center font-bold text-2xl sm:text-3xl mt-4 mb-7'>
          Get in touch
        </h1>
        <div className='flex flex-wrap justify-center gap-3 mb-4'>
          <div className='bg-bg w-[90%] sm:w-2/5 rounded-lg p-4'>
            <h3 className='font-semibold mb-3 text-2xl'>Phone</h3>
            <a href='tel:+2348068891959' className='hover:underline'>
              +234 806 889 1959
            </a>
          </div>
          <div className='bg-bg w-[90%] sm:w-2/5 rounded-lg p-4'>
            <h3 className='font-semibold mb-3 text-2xl'>Email</h3>
            <a
              href='mailto: krisfilkouture@gmail.com'
              className='hover:underline'
            >
              krisfilkouture@gmail.com
            </a>
          </div>
          <div className='bg-bg w-[90%] sm:w-2/5 rounded-lg p-4'>
            <h3 className='font-semibold mb-3 text-2xl'>Location</h3>
            <address>Aule Estate, Akure, Ondo State</address>
          </div>
          <div className='bg-bg w-[90%] sm:w-2/5 rounded-lg p-4'>
            <h3 className='font-semibold mb-3 text-2xl'>Visit Us</h3>
            <p>Mon - Fri: 9am - 5pm</p>
          </div>
        </div>

        <h4 className='font-semibold mb-2 text-2xl text-center'>
          Follow our socials
        </h4>
        <div className='flex gap-4 justify-center'>
          <a
            href='https://www.instagram.com/krisfil_kouture_et_al_?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D'
            className='w-6'
          >
            <img src='/src/assets/instagram.svg' alt='instagram icon' />
          </a>
          <a href='https://wa.link/j598i6' className='w-6'>
            <img src='/src/assets/whatsapp.svg' alt='whatsapp icon' />
          </a>
        </div>
      </section>

      <footer className='bg-text min-h-3 text-bg p-5'>
        <div className='flex gap-3 justify-center mb-3'>
          <a href='#about-us' className='hover:text-gray-500'>
            About
          </a>
          <a href='#our-services' className='hover:text-gray-500'>
            Services
          </a>
          <a href='#gallery' className='hover:text-gray-500'>
            Gallery
          </a>
          <a href='#testimonials' className='hover:text-gray-500'>
            Reviews
          </a>
        </div>
        <p className='text-center mb-3'>
          &copy; {new Date().getFullYear()} Krisfil Koutures. All rights
          reserved{' '}
        </p>
        <p className='text-center text-[10px]'>
          Designed and developed by Michael Olofin | Click{' '}
          <a
            className='underline text-[10px]'
            href='https://wa.link/260kru'
            target='blank'
          >
            here
          </a>{' '}
          to contact developer
        </p>
      </footer>
    </div>
  );
}

export default App;

/* <a href='tel:+2347033165100'>Call us</a> */
