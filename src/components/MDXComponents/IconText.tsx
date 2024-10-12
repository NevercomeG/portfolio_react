import { FaCheckCircle } from 'react-icons/fa'; // Necesitas instalar react-icons

const IconText = ({ text }: { text: string }) => {
  return (
    <div className='flex items-center'>
      <FaCheckCircle className='text-green-500 mr-2' />
      <span>{text}</span>
    </div>
  );
};

export default IconText;
