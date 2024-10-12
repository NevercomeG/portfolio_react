const TestimonialCard = ({
  name,
  role,
  text,
}: {
  name: string;
  role: string;
  text: string;
}) => {
  return (
    <div className='border rounded-lg p-4 bg-gray-50'>
      <p className='italic text-gray-700'>"{text}"</p>
      <p className='font-bold mt-2'>{name}</p>
      <p className='text-sm text-gray-500'>{role}</p>
    </div>
  );
};

export default TestimonialCard;
