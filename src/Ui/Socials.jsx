import React, { useEffect, useState } from 'react'
import { adMessages, socialMedia } from '../assets/assets'
import { Link } from 'react-router-dom'

const Socials = () => {
    const [adIndex, setAdIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setFade(false); // Start fade out
        setTimeout(() => {
          setAdIndex((prev) => (prev + 1) % adMessages.length);
          setFade(true); // Fade in new message
        }, 500); // Duration of fade out
      }, 8000); // 15 seconds

      return () => clearInterval(interval);
    }, []);

  return (
    <div className="bg-primary  w-screen h-[7vh] md:grid grid-cols-3 gap-3 !p-1 !px-[3%]  hidden">
      <div className="flex items-center justify-start gap-5">
        {socialMedia.map((item, index) => {
          return (
            <Link key={index} to={item.link} target="_blank">
              <img className="w-[20px]" src={item.img} alt="" />
            </Link>
          );
        })}
      </div>
      <div
        className={`font-medium text-sm text-center three flex items-center justify-center transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {adMessages[adIndex]}
      </div>
      <div className="two flex items-center text-xs font-medium gap-5 justify-end">
        <p className="hover:underline duration-700 transition-all cursor-pointer">
          +254700809559
        </p>
        <p className="hover:underline duration-700 transition-all cursor-pointer">
          www.Layaliabaya.com
        </p>
        <p className="hover:underline duration-700 transition-all cursor-pointer">
          @Layali_ke
        </p>
      </div>
    </div>
  );
}

export default Socials
