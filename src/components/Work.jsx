import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;