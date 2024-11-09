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
      <h2 className='text-center text-4xl font-bold mb-4'>
        Paquetes y Precios
      </h2>
      <div className='flex flex-col items-center justify-center gap-4 lg:flex-row'>
        <PriceCard
          planName='Básico'
          price='3-5'
          originalPrice='15-25'
          description='Miniatura con diseño más personalizado para videos de YouTube con enfoque en atracción visual y detalles.'
          duration='<1 - 3 horas'
          features={[
            'Diseño personalizado y atractivo',
            'Tipografía adaptada al tema del video',
            'Imágenes editadas o creadas',
            'Colores vibrantes y branding básico',
            'Optimización avanzada para YouTube',
          ]}
          toolsUsed={['Adobe Photoshop,', 'Canva']}
          paymentMethods={paymentMethods}
        />

        <PriceCard
          planName='Intermedio'
          price='10-15'
          originalPrice='25-45'
          description='Miniatura con diseño más personalizado para videos de YouTube con enfoque en atracción visual y detalles.'
          duration='<1 - 3 horas'
          features={[
            'Diseño personalizado y atractivo',
            'Tipografía adaptada al tema del video',
            'Imágenes editadas o creadas',
            'Colores vibrantes y branding básico',
            'Optimización avanzada para YouTube',
          ]}
          toolsUsed={['Adobe Photoshop,', 'Canva']}
          paymentMethods={paymentMethods}
        />

        <PriceCard
          planName='Avanzado'
          price='20-30'
          originalPrice='45-70'
          description='Miniatura premium y completamente personalizada para videos que necesitan un impacto visual potente y profesional.'
          duration='<1 - 3 horas'
          features={[
            'Diseño avanzado y profesional',
            'Tipografía personalizada y creativa',
            'Imágenes y gráficos creados desde cero',
            'Integración con branding completo',
            'Animaciones simples para miniaturas (si aplica)',
            'Optimización máxima para YouTube y SEO',
          ]}
          toolsUsed={['Adobe Premiere']}
          paymentMethods={paymentMethods}
        />
      </div>
    </>
  );
}
