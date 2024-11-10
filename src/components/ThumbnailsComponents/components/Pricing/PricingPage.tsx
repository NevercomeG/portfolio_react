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
          originalPrice='10-15'
          description='Miniatura simple con elementos básicos y atractivos, ideal para videos introductorios o de bajo presupuesto.'
          duration='<10 - 15 minutos'
          features={[
            'Diseño simple y atractivo',
            'Tipografía estándar adecuada al tema',
            'Imágenes libres de derechos o simples ediciones',
            'Colores vibrantes sin branding adicional',
            'Optimización básica para YouTube',
          ]}
          toolsUsed={['Canva']}
          paymentMethods={paymentMethods}
        />

        <PriceCard
          planName='Intermedio'
          price='7-10'
          originalPrice='15-25'
          description='Miniatura personalizada y atractiva, perfecta para contenido más elaborado que requiere impacto visual.'
          duration='<20 - 30 minutos'
          features={[
            'Diseño personalizado con enfoque en branding',
            'Tipografía creativa y adaptada al tema',
            'Imágenes editadas o creadas',
            'Colores y elementos visuales con branding básico',
            'Optimización avanzada para YouTube',
          ]}
          toolsUsed={['Adobe Photoshop', 'Canva']}
          paymentMethods={paymentMethods}
        />

        <PriceCard
          planName='Avanzado'
          price='15-20'
          originalPrice='35-50'
          description='Miniatura premium, completamente personalizada para crear un impacto visual poderoso y profesional.'
          duration='<30 - 60 minutos'
          features={[
            'Diseño avanzado y profesional',
            'Tipografía completamente personalizada',
            'Imágenes y gráficos únicos creados desde cero',
            'Integración completa con el branding del canal',
            'Animaciones simples para miniaturas dinámicas (si aplica)',
            'Optimización máxima para YouTube y SEO',
          ]}
          toolsUsed={['Adobe Photoshop', 'Adobe Premiere']}
          paymentMethods={paymentMethods}
        />
      </div>
    </>
  );
}
