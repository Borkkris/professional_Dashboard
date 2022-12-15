import React from 'react';
// allows to switch between some different pages in this app
import { Link, NavLink } from 'react-router-dom';

// icons
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';

import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { links } from '../data/dummy';


const Sidebar = () => {
  const activeMenu = true;

  return (
    <div className="ml-3 h-screen 
      md:overflow-hidden 
      overflow-auto md:hover:overflow-auto pb-10"
    >
      {activeMenu && (<> 
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() =>{}} 
          // tailwind classes for the Link in the Menu
          className="item-center gap-3 ml-3 mt-4 
          flex text-xl font-extrabold tracking-tight
          dark:text-white text-slate-900"
          >
            <SiShopware /> <span>Shoppy</span>
          </Link>
          
        </div>
      </>)}
    </div>
  )
}

export default Sidebar