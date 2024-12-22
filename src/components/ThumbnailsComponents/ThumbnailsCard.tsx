import Image from 'next/image';
import React from 'react';

import { thumbnail } from '@/types/ThumbnailsTypes'; // Asegúrate de que el tipo 'thumbnail' esté adaptado a tus datos
import { title } from 'process';

export default function ThumbnailsCard({ imageUrl }: thumbnail) {
  return (
    <li className='max-w-sm' key={title}>
      <figure className='w-full'>
        <Image
          src={imageUrl} // Usa el URL del thumbnail
          alt={title}
          width={1280} // Define el ancho base
          height={720} // Define la altura base
          loading='lazy'
          className='rounded-md object-cover' // Asegura que la imagen mantenga su proporción y se adapte al contenedor
          quality={75} // Mantén la calidad alta
          placeholder='blur' // Añade el placeholder
          blurDataURL='/thumbsnails/blur.jpg' // Si tienes una imagen de baja resolución
        />
      </figure>
    </li>
  );
}
