import './css/style.css';

export default function page() {
  return (
    <body>
      <div className='main'>
        <div className='greetings'>
          <span>M</span>
          <span>a</span>
          <span>m</span>
          <span>o</span>
          <span>r</span>
          <span>!</span>
        </div>
        <div className='description'>
          <span className='text-sky-200'>
            Te amo <br />
            muchisimo <br />
            💖😊
          </span>
        </div>
        <div className='button'>
          <div className='botones'>
            <a
              href='/mamor/oamamor'
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
            >
              ¡AQUI!
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}
