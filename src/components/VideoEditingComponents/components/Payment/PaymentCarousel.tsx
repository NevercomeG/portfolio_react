import './paymentmethods.css';

// components/PaymentMethodsList.tsx
import { FaPaypal } from 'react-icons/fa';
import { SiWesternunion, SiVisa, SiMastercard } from 'react-icons/si';
import { BiSolidBank } from 'react-icons/bi';

export default function PaymentMethodsList() {
  return (
    <div className='payment-methods-container my-8'>
      <div className='flex justify-center items-center space-x-6'>
        <FaPaypal className='text-6xl text-sky-500' />
        <SiVisa className='text-6xl text-sky-600' />
        <SiMastercard className='text-6xl text-red' />
        <SiWesternunion className='text-6xl text-yellow-500' />
        <BiSolidBank className='text-5xl text-white' />
      </div>
    </div>
  );
}
