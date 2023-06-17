import { Icon } from '@iconify/react';
import React, { memo } from 'react';

import { IconData } from '@/components/portfolio/stack/Types';
function IconGrid({ data }: { data?: IconData[] }) {
  const upperIcons = data?.filter((icon) => icon.position === 'Upper');
  const lowerIcons = data?.filter((icon) => icon.position === 'Lower');

  return (
    <div className='flex flex-col space-y-2'>
      <div className='flex flex-row space-x-2'>
        {upperIcons?.map((icon, index) => (
          <div
            key={index}
            className='grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white'
          >
            <Icon
              icon={icon.iconsrc}
              color={icon.color}
              className={icon.classname}
            />
          </div>
        ))}
      </div>
      <div className='flex flex-row space-x-2 pb-6'>
        {lowerIcons?.map((icon, index) => (
          <div
            key={index}
            className='grid h-[75px] w-[75px] flex-col items-center justify-center rounded-lg bg-white text-white'
          >
            <Icon
              icon={icon.iconsrc}
              color={icon.color}
              className={icon.classname}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(IconGrid);
