import training from '../assets/hero-bg.jpg';

type Props = {};

function Training({}: Props) {
  return (
    <div className='w-full sm:w-[45%] md:w-[30%] h-[400px] relative p-4 rounded-3xl text-white overflow-hidden bg-dark-overlay flex flex-col justify-end'>
      <img
        src={training}
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
          width='35'
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
  );
}

export default Training;
