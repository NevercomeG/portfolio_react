// components/SecurityAndGuarantees.tsx
import { MdOutlineGppGood } from 'react-icons/md';
import { FaRegComments } from 'react-icons/fa6';
import { FaCheckDouble } from 'react-icons/fa';

export default function SecurityAndGuarantees() {
  return (
    <div className='security-guarantees-container max-w-6xl mx-auto p-6'>
      <h2 className='text-center text-4xl font-bold mb-6'>
        Compromiso y Garantías
      </h2>
      <div className=' grid grid-rows-1 md:grid-cols-3 gap-6 text-center'>
        {/* Tarjeta de Profesionalismo */}
        <div className='bg-[#212121] p-6 rounded-lg shadow-lg'>
          <div className='flex justify-center items-center py-4'>
            <MdOutlineGppGood className='text-6xl' />
          </div>
          <h3 className='text-xl font-semibold mb-2'>Profesionalismo</h3>
          <p className='text-gray-600'>
            Cada proyecto es tratado con el máximo nivel de profesionalismo y
            atención al detalle. Mi enfoque está en entregar un resultado que
            supere tus expectativas.
          </p>
        </div>

        {/* Tarjeta de Comunicación Clara */}
        <div className='bg-[#212121] p-6 rounded-lg shadow-lg'>
          <div className='flex justify-center items-center py-4'>
            <FaRegComments className='text-6xl' />
          </div>
          <h3 className='text-xl font-semibold mb-2'>Comunicación Clara</h3>
          <p className='text-gray-600'>
            Mantengo una comunicación constante y clara durante todo el proceso,
            asegurando que estés al tanto de cada paso y satisfecho con el
            progreso.
          </p>
        </div>

        {/* Tarjeta de Satisfacción Garantizada */}
        <div className='bg-[#212121] p-6 rounded-lg shadow-lg'>
          <div className='flex justify-center items-center py-4'>
            <FaCheckDouble className='text-6xl' />
          </div>
          <h3 className='text-xl font-semibold mb-2'>
            Satisfacción Garantizada
          </h3>
          <p className='text-gray-600'>
            Mi prioridad es tu satisfacción. Me comprometo a realizar las
            revisiones necesarias para asegurarme de que el resultado final sea
            exactamente lo que necesitas.
          </p>
        </div>
      </div>
    </div>
  );
}
