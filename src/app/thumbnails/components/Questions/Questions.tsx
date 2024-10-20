'use client';

import { useState, useRef, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: '¿Qué tipo de miniaturas para YouTube creas?',
    answer:
      'Creo miniaturas personalizadas para todo tipo de contenido, incluyendo vlogs, videos de gaming, tutoriales, videos educativos, contenido promocional, y más. Me adapto a la temática de tu canal para maximizar la atracción de clics.',
  },
  {
    question: '¿Cuál es el plazo de entrega para una miniatura?',
    answer:
      'El plazo de entrega depende de la complejidad del diseño. En promedio, las miniaturas básicas pueden estar listas en menos de una hora, mientras que las miniaturas avanzadas con gráficos complejos pueden tomar entre 1 y 3 horas.',
  },
  {
    question: '¿Cómo te envío el material para la miniatura?',
    answer:
      'Puedes enviarme tus imágenes, logos o cualquier material que quieras incluir en la miniatura a través de plataformas como Google Drive, Dropbox o WeTransfer. Te proporcionaré las instrucciones una vez que iniciemos el proyecto.',
  },
  {
    question: '¿Puedo solicitar revisiones después de la entrega?',
    answer:
      'Sí, ofrezco revisiones gratuitas dentro de un límite razonable previamente acordado. Mi objetivo es asegurarme de que estés completamente satisfecho con la miniatura final.',
  },
  {
    question: '¿Ofreces descuentos para miniaturas por volumen?',
    answer:
      'Sí, si necesitas varias miniaturas, podemos trabajar en un paquete personalizado que te ofrezca un precio especial por volumen. Contáctame para más detalles y precios personalizados.',
  },
  {
    question: '¿Qué software utilizas para diseñar las miniaturas?',
    answer:
      'Utilizo herramientas profesionales como Photoshop, Illustrator y Canva para garantizar la mejor calidad en cada miniatura. También puedo trabajar con After Effects si es necesario agregar elementos animados.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (activeIndex !== null && contentRefs.current[activeIndex]) {
      const content = contentRefs.current[activeIndex];
      if (content) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    }
  }, [activeIndex]);

  return (
    <div className='faq-section max-w-5xl mx-auto p-10 lg:p-4'>
      <h2 className='text-4xl font-bold text-center mb-6'>
        Preguntas Frecuentes
      </h2>
      <div className='space-y-4'>
        {faqData.map((faq, index) => (
          <div key={index} className='border-b pb-4'>
            <button
              onClick={() => toggleFAQ(index)}
              className='w-full text-left flex justify-between items-center py-2 font-semibold text-lg focus:outline-none'
            >
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            <div
              ref={(el) => {
                contentRefs.current[index] = el; // Aquí no retornamos ningún valor
              }}
              className={`overflow-hidden transition-max-height duration-1000 ease-in-out ${
                activeIndex === index ? 'max-h-screen' : 'max-h-0'
              }`}
              style={{ maxHeight: activeIndex === index ? 'none' : '0' }}
            >
              <p className='mt-2 text-gray-600'>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
