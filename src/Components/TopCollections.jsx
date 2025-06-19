import React from 'react'
import {  rarePerfumes } from '../assets/assets';
import{ Link} from 'react-router-dom'

const TopCollections = () => {
  return (
    <div className="min-h-[87vh] w-full !mt-[2rem] md:!mt-0 !py-[2%] !px-[1.5rem] md:!px-[3rem] flex flex-col gap-[5rem]">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-xl Poiret">Your Journey Begins Now</h1>
        <p className="text-sm  text-center Poiret">
          Grace in every stitch. Luxury in every detail. Explore timeless pieces
          that tell your story.
        </p>
      </div>
      <div className='md:grid grid-cols-3 flex flex-col  gap-[4rem]'>
        {
          rarePerfumes.map((item , index) => {
            return (
              <Link
                key={index}
                to={`/collections/rare-elixirs/${item.name}`}
                className="flex flex-col"
              >
                <img className="w-full" src={item.image} alt="" />
                <div className="!p-3 ">
                  <h1 className="text-2xl one ">{item.name}</h1>
                  <p className="three text-sm text-gray-700">
                    {item.description}
                  </p>
                </div>
                <button className="border !mt-6 !p-2 bg-amber-950 text-white rounded one">
                  Shop Now
                </button>
              </Link>
            );
          })
        }
      </div>
    </div>
  );
}

export default TopCollections
