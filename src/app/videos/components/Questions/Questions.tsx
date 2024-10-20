'use client';

import { useState, useRef, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: '¿Cuáles son los tipos de proyectos de video que editas?',
    answer:
      'Trabajo con una variedad de proyectos, incluyendo videos promocionales, comerciales, cortometrajes, videos para youtube, y más. Me adapto a tus necesidades específicas.',
  },
  {
    question: '¿Cuál es el plazo de entrega para un proyecto de edición?',
    answer:
      'El plazo de entrega depende de la complejidad del proyecto. En promedio, los proyectos más pequeños pueden estar listos en 1-3 días, mientras que los más complejos pueden tomar de 1 a 2 semanas.',
  },
  {
    question: '¿Cómo puedo enviarte mis archivos de video?',
    answer:
      'Puedes enviarme los archivos a través de plataformas de almacenamiento en la nube como Google Drive, Dropbox etc... Te proporcionaré instrucciones claras una vez que el proyecto esté en marcha.',
  },
  {
    question: '¿Puedo solicitar revisiones después de la entrega?',
    answer:
      'Sí, ofrezco revisiones gratuitas dentro de un límite acordado previamente. Mi objetivo es asegurarme de que estés completamente satisfecho con el resultado final.',
  },
  {
    question: '¿Ofreces paquetes de edición de video por volumen?',
    answer:
      'Sí, si tienes varios videos para editar, podemos trabajar en un paquete que ofrezca una tarifa especial según el volumen de trabajo. Contáctame para más detalles y precios personalizados.',
  },
  {
    question: '¿Qué software de edición utilizas?',
    answer:
      'Trabajo con herramientas profesionales como Adobe Premiere Pro, After Effects, Filmora, Capcut, asegurando la mejor calidad para cada proyecto.',
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
