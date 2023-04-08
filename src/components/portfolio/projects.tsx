import React from 'react';

import Projectcards from './cards/projectcards';
//

export default function formation() {
  return (
    <section className="items-center justify-center -space-y-6 bg-cover bg-center p-5 lg:flex lg:flex-col ">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white shadow-lg">Projects</h1>
      </div>
      <div className='grid grid-flow-row pt-24 grid-cols-1 justify-center items-center px-12 md:grid-cols-2 gap-4 lg:grid-cols-3 '>
<Projectcards/>

</div>
    </section>
  );
}
