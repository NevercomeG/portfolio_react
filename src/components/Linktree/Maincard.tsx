import BaseCard from './BaseCard';

export default function Maincard({
  href,
  title,
  image,
  message,
}: {
  href: string;
  title: string;
  image?: string;
  message?: string;
}) {
  return (
    <BaseCard
      href={href}
      title={title}
      image={image}
      message={message}
      bgColor='bg-[#222]'
      textColor='text-white'
    />
  );
}
