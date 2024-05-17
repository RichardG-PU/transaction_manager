import Link from 'next/link';
import React, { ReactNode } from 'react';
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

interface SidebarProps {
  children?: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-30 h-screen p-4 bg-white border-r-[2px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link legacyBehavior href='/dashBoard'>
            <a className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
              <IoDiamondOutline size={20} />
            </a>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link legacyBehavior href='/sales'>
            <a className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <GrTransaction style={{ color: '#333' }} size={20} />
            </a>
          </Link>   
          <Link legacyBehavior href='/artists'>
            <a className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FaUserAlt style={{ color: '#333' }} size={20} />
            </a>
          </Link>
          <Link legacyBehavior href='/volunteers'>
            <a className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <MdOutlineVolunteerActivism style={{ color: '#333' }} size={20} />
            </a>
          </Link>
          
        </div>
        <div>

        </div>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;