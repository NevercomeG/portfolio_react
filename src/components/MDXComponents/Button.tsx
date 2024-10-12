const Button = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
    >
      {children}
    </a>
  );
};

export default Button;
