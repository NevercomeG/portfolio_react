import { useState } from 'react';

const TabGroup = ({
  tabs,
}: {
  tabs: { title: string; content: React.ReactNode }[];
}) => {
  const [activeTab, setActiveTab] = useState(0);

  // Verifica si el contenido de la pestaña está disponible antes de renderizarlo
  const activeTabContent = tabs[activeTab]?.content || (
    <p>Contenido no disponible.</p>
  );

  return (
    <div>
      <div className='flex border-b'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${index === activeTab ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className='p-4'>
        {activeTabContent}{' '}
        {/* Siempre asegúrate de que el contenido esté definido */}
      </div>
    </div>
  );
};

export default TabGroup;
