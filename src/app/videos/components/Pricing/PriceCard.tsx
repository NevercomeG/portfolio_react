import './pricecard.css';

interface PaymentMethod {
  method: string;
  icon: JSX.Element;
  bgColor: string; // Color del botón
}

interface PriceCardProps {
  planName: string;
  price: string;
  originalPrice?: string;
  description: string;
  duration: string; // Nueva propiedad para la duración del video
  features: string[];
  toolsUsed: string[]; // Herramientas utilizadas
  isPopular?: boolean;
  paymentMethods?: PaymentMethod[];
  contact?: boolean; // Para el plan "Contáctame"
}

export default function PriceCard({
  planName,
  price,
  originalPrice,
  description,
  duration, // Nueva propiedad
  features,
  toolsUsed,
  isPopular = false,

  contact = false,
}: PriceCardProps) {
  return (
    <div className='bg-[#212121] price-card border rounded-lg shadow-lg p-6 flex flex-col justify-between'>
      {isPopular && (
        <div className='most-popular bg-blue-500 text-white py-1 px-3 rounded-full inline-block mb-4'>
          Popular
        </div>
      )}
      <h4 className='text-lg font-bold mb-2'>{planName}</h4>

      {/* Precio o Contáctame */}
      {!contact ? (
        <div className='price-area mb-4'>
          <div className='text-4xl font-bold'>
            <span className='symbol'>US$</span>
            {price}
          </div>
          {originalPrice && (
            <span className='text-gray-500 line-through'>
              US${originalPrice}
            </span>
          )}
          <p className='text-sm text-gray-600 mt-2'>{description}</p>
        </div>
      ) : (
        <div className='text-center mb-4'>
          <p className='text-xl font-bold'>Contáctame para más información</p>
        </div>
      )}

      {/* Duración del video */}
      <div className='text-sm text-gray-600 mb-4'>
        <p>
          <strong>Duración del video:</strong> {duration}
        </p>
      </div>

      {/* Funcionalidades */}
      <ul className='text-sm text-gray-600 mb-4'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center'>
            <img
              src='https://images.wondershare.com/pdfelement/2023images/icon/gou.svg'
              alt='check'
              width='16px'
              className='mr-2'
            />
            {feature}
          </li>
        ))}
      </ul>

      {/* Sección de herramientas usadas */}
      <div className='text-sm text-gray-600 mb-4'>
        <h5 className='text-lg font-bold mb-2'>Herramientas Usadas</h5>
        <ul className='flex flex-row'>
          {toolsUsed.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>

      {/* Métodos de Pago */}
      {/* {!contact && (
        <div className='text-center mb-4'>
          <h5 className='text-lg font-bold mb-2'>Métodos de Pago</h5>
          <div className='flex gap-2 justify-around'>
            {paymentMethods.map(({ method, icon, bgColor }, index) => (
              <button
                key={index}
                className='text-white p-2 rounded-lg flex items-center hover:opacity-90 transition duration-300'
                style={{ backgroundColor: bgColor }}
              >
                {icon}
                <span className='ml-2'>{method}</span>
              </button>
            ))}
          </div>
        </div>
      )} */}

      {/* Botón Comprar o Contactar */}
      <div className='text-center mt-4 '>
        <a
          href='#'
          className={`${
            contact ? 'bg-green-600' : 'bg-blue-600'
          } text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 border-2 border-white hover:bg-white hover:text-black`}
        >
          {contact ? 'Contactar' : 'Comprar Ahora'}
        </a>
      </div>
    </div>
  );
}
