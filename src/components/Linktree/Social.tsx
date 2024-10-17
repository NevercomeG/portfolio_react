import Image from 'next/image';

export default function Social({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  // Mapeo de colores de fondo para las redes sociales
  const socialBgColor: { [key: string]: string } = {
    Github: 'bg-[#333]',
    Linkedin: 'bg-[#5fb8e7]',
    Instagram: 'bg-[#F55376]',
    Facebook: 'bg-[#0077b5]',
    Tiktok: 'bg-[#6e6d6d]',
    Youtube: 'bg-[#ff4747]',
  };

  // Verificación explícita para evitar el error de TypeScript
  const bgColor = socialBgColor[title] || 'bg-slate-600';

  // Asignar el color del texto para TikTok, o blanco por defecto
  const textColor = 'text-white';

  return (
    <li className='mb-3 w-full max-w-3xl'>
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={`${bgColor} flex items-center justify-between rounded-sm transition-all hover:scale-105 shadow-lg p-2`}
      >
        {image && (
          <Image
            className='inline-block w-[42px] min-w-[42px] rounded-md'
            alt={title}
            src={image}
            width={42}
            height={42}
          />
        )}

        <div className='flex w-full grow flex-col items-center justify-center'>
          <h1 className={`font-bold text-lg ${textColor}`}>{title}</h1>
        </div>

        {image && (
          <Image
            className='inline-block w-[42px] min-w-[42px] rounded-md'
            alt={title}
            src={image}
            width={42}
            height={42}
          />
        )}
      </a>
    </li>
  );
}
