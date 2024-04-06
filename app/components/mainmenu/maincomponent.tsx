import React from 'react';
import Image from 'next/image'; // Importa Image de 'next/image'
import Button from './button';

const MainComponent = () => {
  return (
    <div className="flex justify-between w-[970px] h-[467.09px] opacity-1 bg-white border border-blue-300">
      <div>
        <h1 className="w-[500px] h-[118px] top-[93px] left-[69px] text-left font-inter font-bold text-4xl leading-[59.33px]">
          <span className="text-red-500">I'M Cristian Julio</span> <span className="text-blue-500">Front-End Developer</span>
        </h1>
        <p className="w-[424px] h-[88px] top-[229px] left-[69px] text-left font-inter text-base leading-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
        </p>
        <Button text="HIRE ME" />
      </div>
      <div>
        <Image src="/fd.png" alt="Imagen del desarrollador" width={325.72} height={459.09} className="top-[8px] left-[601px] opacity-1" />
      </div>
    </div>
  );
};

export default MainComponent;
