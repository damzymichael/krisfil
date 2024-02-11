function Gallery() {
  const images = Array.from(
    {length: 9},
    (_, index) => `/src/assets/showcase_${index + 1}.jpg`
  );
  return (
    <section className='gallery' id="gallery">
      <h1 className='font-heading text-center font-bold text-3xl my-4'>
        Gallery
      </h1>
      <div className='flex w-[90%] mx-auto flex-wrap gap-3 justify-between mb-4'>
        {images.map(img => (
          <div key={img} className='w-full sm:w-[30%] overflow-hidden'>
            <img
              src={img}
              className='w-full h-full object-cover hover:scale-110 transition duration-300'
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
