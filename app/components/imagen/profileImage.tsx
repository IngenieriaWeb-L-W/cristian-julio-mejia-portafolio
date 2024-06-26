import React from 'react';
import Image from 'next/image';

const ProfileImage = () => {
  return (
    <div className="relative bg-orange-100">
      <Image
        src="/perfil.png" // Reemplaza esto con la ruta a tu imagen
        alt="Frontend" // Reemplaza esto con una descripción de la imagen
        width={135}
        height={135}
        className="rounded-full top-[50px] center-[74px] opacity-1"/>
      <span className="absolute w-3 h-3 bg-green-400 rounded-full top-[138px] left-[118px] shadow-md opacity-1"></span>
    </div>
  );
};

export default ProfileImage;
