import {ArrowDiagonal} from './SVGs';
import {OurServices} from '../data';

const Service = ({heading, description, image}: OurServices) => {
  return (
    <div className='w-full sm:w-[45%] md:w-[30%] h-[400px] relative p-2 border-[0.5px] border-black rounded-3xl overflow-hidden bg-dark-overlay flex flex-col'>
      <img
        src={image}
        alt='Krisfil'
        className='absolute w-full h-full -m-2 -z-10 object-cover'
      />
      <div className='bg-white rounded-xl w-max flex items-center justify-center ml-auto'>
        <ArrowDiagonal className='w-3/5' />
      </div>
      <div className='text-white flex flex-col flex-grow justify-end p-2 pb-6'>
        <h2 className='font-bold text-xl mb-2'>{heading}</h2>
        <p className='text-sm'>{description}</p>
      </div>
    </div>
  );
};

export default Service;

//for image -> object-cover object-center
//for container -> w-full h-400px
