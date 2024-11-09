// components/ComparePlans.tsx
import './tableStyles.css';

type Plan = {
  name: string;
  price: string;
  frequency?: string;
  description: string;
  popular?: boolean;
  features: string[];
  billingInfo: string;
};

const plans: Plan[] = [
  {
    name: 'START',
    price: 'Gratis',
    description: 'Próximos 3 meses',
    features: ['Schlitz single-origin', 'Feature 1', 'Feature 2'],
    billingInfo: 'Literalmente, probablemente no hayas oído hablar de ellos.',
  },
  {
    name: 'PRO',
    price: '$38',
    frequency: '/mes',
    description: 'Cobrando $456 al año',
    features: ['Schlitz single-origin', 'Feature 1', 'Feature 2'],
    billingInfo: 'Literalmente, probablemente no hayas oído hablar de ellos.',
    popular: true,
  },
  {
    name: 'BUSINESS',
    price: '$54',
    frequency: '/mes',
    description: 'Cobrando $648 al año',
    features: ['Schlitz single-origin', 'Feature 1', 'Feature 2'],
    billingInfo: 'Literalmente, probablemente no hayas oído hablar de ellos.',
  },
];

export default function ComparePlans() {
  return (
    <section className='text-gray-700 body-font overflow-hidden border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        {/* Columna izquierda oculta en dispositivos pequeños */}
        <div className='lg:w-1/4 mt-48 hidden lg:block'>
          <div className='mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden'>
            {plans[0]?.features.map((feature, index) => (
              <p
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-100' : ''
                } text-gray-900 h-12 text-center px-4 flex items-center justify-start`}
              >
                {feature}
              </p>
            ))}
          </div>
        </div>

        {/* Columna de comparación de planes */}
        <div className='flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 ${
                plan.popular ? 'border-indigo-500 relative' : 'border-gray-300'
              } lg:border-none rounded-lg lg:rounded-none`}
            >
              {plan.popular && (
                <span className='bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl'>
                  POPULAR
                </span>
              )}

              <div className='px-2 text-center h-48 flex flex-col items-center justify-center'>
                <h3 className='tracking-widest'>{plan.name}</h3>
                <h2 className='text-5xl text-gray-900 font-medium leading-none mb-4 mt-2'>
                  {plan.price}
                  {plan.frequency && (
                    <span className='text-gray-600 text-base ml-1'>
                      {plan.frequency}
                    </span>
                  )}
                </h2>
                <span className='text-sm text-gray-600'>
                  {plan.description}
                </span>
              </div>

              {plan.features.map((feature, featureIndex) => (
                <p
                  key={featureIndex}
                  className={`${
                    featureIndex % 2 === 0 ? 'bg-gray-100' : ''
                  } text-gray-600 text-center h-12 flex items-center justify-center border-t border-gray-300`}
                >
                  {feature}
                </p>
              ))}

              <div className='p-6 text-center border-t border-gray-300'>
                <button className='flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded'>
                  Seleccionar
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 ml-auto'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </button>
                <p className='text-xs text-gray-500 mt-3'>{plan.billingInfo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
