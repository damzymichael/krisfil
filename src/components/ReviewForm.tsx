import Button from './Button';

function ReviewForm() {
  return (
    <div className='review-form bg-[#0000800d] p-5 rounded-lg w-[95%] sm:w-[90%] mx-auto'>
      <form className='w-full sm:w-4/5'>
        <h1 className='font-bold text-2xl sm:text-3xl mb-3'>Leave a review </h1>
        <input
          type='text'
          className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
          placeholder='Your name'
          required
        />
        <textarea
          rows={4}
          className='block w-full px-4 py-2 mt-2 mb-4 text-gray-700 bg-white border border-gray-200 rounded-md focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
          required
          placeholder='Your review'
        />
        <input
          placeholder='Please rate our services (Enter a number between 1 and 5)'
          type='number'
          min={1}
          max={5}
          className='block w-full px-4 py-2 mt-2 mb-4 text-gray-700 bg-white border border-gray-200 rounded-md focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default ReviewForm;
