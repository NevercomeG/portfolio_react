'use client';

import Youtubelayaer from 'react-player/youtube';

export default function MainVideo() {
  return (
    <Youtubelayaer
      url='https://www.youtube.com/watch?v=GBIIQ0kP15E' // Reemplaza con el enlace de tu video principal
      controls
      muted
      loop
    />
  );
}
