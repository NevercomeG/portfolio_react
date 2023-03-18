import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

import { Menus } from '@/components/dashboard/layout/menu';

const LeftNavbar = ({ menu }: { menu: Menus[] }) => {
  // Initialize the state for the dropdown menus
  const [submenuOpen, setsubmenuOpen] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [submenuOpenlv2, setsubmenuOpenlv2] = useState<{
    [key: number]: boolean;
  }>({});

  return (
    <aside className=' absolute z-[1] h-screen w-64 bg-[#fdf6f1]/80'>
      <div className='mx-auto mb-10 flex items-center bg-[#D95B60] px-4 pt-6'>
        <Image
          src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
          alt='User'
          className='mx-auto mb-6 mt-11 h-14 rounded-l-2xl rounded-r-2xl'
        />
        <p className='mr-14 mt-4 text-lg font-bold text-white '>John Doe</p>
      </div>
      <div className=''>
        <ul className='pt-2'>
          {/* Map through the menu items */}
          {menu.map((menu, index) => (
            <>
              {/* Add the submenuOpen state to the li element */}
              <li
                key={index}
                className={`hover:bg-light-white mt-2 flex cursor-pointer items-center gap-x-4 border-b-[1px] border-slate-600  p-2 text-sm text-gray-800 ${
                  menu.spacing ? 'mt-9' : 'mt-2'
                } `}
              >
                {/* // Add the submenuOpen state to the div element */}
                <div
                  className='flex w-full flex-row justify-between'
                  onClick={() =>
                    setsubmenuOpen({
                      ...submenuOpen,
                      [index]: !submenuOpen[index],
                    })
                  } // Toggle the submenuOpen state*/}
                >
                  <div>
                    <span className='font-medum flex-1 text-base '>
                      <Link href={menu.href}>{menu.title}</Link>
                    </span>
                  </div>
                  <div className='flex flex-1 items-center justify-evenly '>
                    {menu.submenu && (
                      <BsChevronDown
                        className={`  ${submenuOpen[index] && 'rotate-180'}`}
                        onClick={() =>
                          setsubmenuOpen({
                            ...submenuOpen,
                            [index]: !submenuOpen[index],
                          })
                        }
                      />
                    )}
                  </div>
                </div>
              </li>
              {menu.submenu && submenuOpen[index] && (
                <ul className=''>
                  {menu.submenuItems?.map((submenuItems, index) => (
                    <li
                      key={index}
                      className='hover:bg-light-white mt-2 flex cursor-pointer items-center border-b-[1px] border-slate-600 p-2 px-10 text-sm text-gray-800 '
                      onClick={() =>
                        setsubmenuOpenlv2({
                          ...submenuOpenlv2,
                          [index]: !submenuOpenlv2[index],
                        })
                      }
                    >
                      <div>
                        <span className=''>
                          <Link href={submenuItems.href}>
                            {submenuItems.title}
                          </Link>
                        </span>
                      </div>
                      <div className='flex flex-1 items-center justify-evenly '>
                        {submenuItems.submenu && (
                          <BsChevronDown
                            className={`  ${
                              submenuOpenlv2[index] && 'rotate-180'
                            }`}
                          />
                        )}
                      </div>
                      {/* Conditionally render the sub-submenu items */}

                      {submenuItems.submenuItemslv2 &&
                        submenuOpenlv2[index] && (
                          <ul className=''>
                            {submenuItems.submenuItemslv2.map(
                              (submenuItemslv2, index) => (
                                <li
                                  key={index}
                                  className={`} border-b-[1px] 
																	border-slate-600 `}
                                >
                                  <span className='flex-1 text-base font-medium '>
                                    <Link href={submenuItemslv2.href}>
                                      {submenuItemslv2.title}
                                    </Link>
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default LeftNavbar;
