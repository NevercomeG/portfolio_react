import BaseCard from './BaseCard';

export default function LinkCard({
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
      bgColor='bg-gray-400'
      textColor='text-gray-700'
    />
  );
}
