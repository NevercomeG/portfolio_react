// pages/pricing.tsx
import PriceCard from './PriceCard';
import { FaPaypal, FaMobileAlt } from 'react-icons/fa';
import { SiWesternunion } from 'react-icons/si';

export default function Pricing() {
  const paymentMethods = [
    { method: 'PayPal', icon: <FaPaypal />, bgColor: '#003087' },
    { method: 'Western', icon: <SiWesternunion />, bgColor: '#FFBC00' },
    { method: 'Nequi', icon: <FaMobileAlt />, bgColor: '#00A859' },
  ];

  return (
    <>
      {' '}
      <h2 className='text-center text-4xl font-bold mb-4'>Métodos de Pago</h2>
      <div className='flex flex-col items-center justify-center gap-4 lg:flex-row'>
        <PriceCard
          planName='Básico'
          price='10-20'
          originalPrice='30-50'
          description='Ideal para videos cortos de 10 a 15 minutos con edición básica. Cortes basicos, transiciones simple, musica simple.'
          duration='1 - 20 minutos'
          features={[
            'Subtítulos simples',
            'Corrección básica de color',
            'Música de fondo',
            'Mezcla básica de audio',
            'Exportación en 1080p-2K',
          ]}
          toolsUsed={['Filmora, ', 'CapCut']}
          paymentMethods={paymentMethods}
        />

        <PriceCard
          planName='Intermedio'
          price='25-30'
          originalPrice='80-125'
          description='Perfecto para videos de 25 a 30 minutos con funciones avanzadas. Transiciones complejas, Simple motion graphics '
          duration='25 - 30 minutos'
          features={[
            'Subtítulos personalizados',
            'Motion graphics simples',
            'Color grading avanzado',
            'Mejora y mezcla de sonido',
            'Exportación en 2k-4K',
          ]}
          toolsUsed={['Premiere Pro,', 'Filmora,', 'CapCut']}
          paymentMethods={paymentMethods}
        />

        <PriceCard
          planName='Avanzado'
          price='50'
          originalPrice='100'
          description='Ideal para videos largos o de alta calidad, La edición más premium que viene con todo lo que puedas necesitar.'
          duration='30+ minutos'
          features={[
            'Subtítulos personalizados y complejos',
            'Motion graphics avanzados',
            'Color grading profesional',
            'Mezcla avanzada de sonido',
            'Exportación en 4K',
          ]}
          toolsUsed={['Premiere Pro,', 'Filmora,', 'CapCut']}
          paymentMethods={paymentMethods}
        />
      </div>
    </>
  );
}
