import { FaMobileAlt, FaRocket } from 'react-icons/fa';

export interface FeatureCardProps {
  title: string;
  description: string;
  iconName: 'mobile' | 'rocket';
}

const FeatureCard = ({ title, description, iconName }: FeatureCardProps) => {
  let Icon;
  switch (iconName) {
    case 'mobile':
      Icon = FaMobileAlt;
      break;
    case 'rocket':
      Icon = FaRocket;
      break;
    default:
      Icon = null;
  }

  return (
    <div className='shadow-lg p-4 rounded-lg'>
      <div className='text-3xl mb-2'>{Icon && <Icon />}</div>
      <h3 className='font-bold text-lg'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
};

export default FeatureCard;
