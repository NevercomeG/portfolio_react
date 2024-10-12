import Image from 'next/image';

const HeroImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className='w-full h-auto'>
      <Image
        src={src}
        alt={alt}
        layout='responsive'
        width={1920}
        height={1080}
        className='rounded-lg shadow-lg'
      />
    </div>
  );
};

export default HeroImage;
