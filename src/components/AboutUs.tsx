import {useRef} from 'react';

function AboutUs() {
  const textRef = useRef(null);
  return (
    <section className='about-us min-h-screen flex items-center justify-center' id='about-us'>
      <div
        className='bg-secLight p-4 w-[95%] sm:w-4/5 mx-auto rounded-lg nimate__animated animate__zoomIn'
        ref={textRef}
      >
        <h2 className='text-center mb-3 font-bold font-heading text-xl'>
          About Us
        </h2>
        <p>
          Welcome to Krisfil Koutures, where passion meets perfection. With over
          7 of experience, we specialize in crafting bespoke garments tailored
          to your unique style. At Krisfil Koutures, we blend traditional
          techniques with modern innovation to create timeless pieces that
          exceed expectations. From custom suits to meticulous alterations, our
          commitment to excellence ensures every garment fits flawlessly and
          reflects your individuality. Our personalized approach means we listen
          to your needs and collaborate with you every step of the way. Whether
          you're preparing for a special occasion or updating your wardrobe,
          trust us to make your sartorial dreams a reality.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
