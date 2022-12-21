import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent 
    content ={title} 
    position="BottomCenter"
  >
    <button 
      type="button" 
      onClick={() => customFunc()} 
      style={{ color }} 
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span 
        style={{ background: dotColor }} 
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
        {/* icon from the NavBar doen below */}
        {icon} 
    </button>
  </TooltipComponent>
);

const Navbar = () => {

  const { activeMenu, setActiveMenu, handleClick, isClicked, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    // everytime the screen rezises, this function is setting the screen size to this specific size
    const handleRezise = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleRezise);
    // call the rezise initially on its own to figure out the initial width
    handleRezise();
    // whenever using window.addEventListener you also want to remove that eventListener
    return () => window.removeEventListener('rezise', handleRezise)
  }, []);

  // Lets the Sidebar disappear when the screen size gets lower or equal 900
  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true)
    }
  },[screenSize]);

  return (
    <div className="flex justify-between 
    p-2 md:mx-6 relative">
      {/* first NavButton with a callback function to see if activeMenu is open, then we close it anf vice versa */}
      <NavButton 
        title="Menu" 
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
        color="blue" 
        icon={<AiOutlineMenu />} />
      
      <div className="flex">
        {/* Cart */}
        <NavButton 
          title="Cart" 
          customFunc={() => handleClick('cart')} 
          color="blue" 
          icon={<FiShoppingCart />} 
        />
        {/* Chat */}
        <NavButton 
          title="Chat" 
          dotColor="#03C9D7"
          customFunc={() => handleClick('chat')} 
          color="blue" 
          icon={<BsChatLeft />} 
        />
        {/* Notifications */}
        <NavButton 
          title="Notifications" 
          dotColor="#03C9D7"
          customFunc={() => handleClick('notification')} 
          color="blue" 
          icon={<RiNotification3Line />} 
        />
        {/* userProfile */}
        <TooltipComponent
          content="Profile"
          position="BottomCenter"
        >
            <div 
              className="flex items-center 
              gap-2 cursor-pointer p-1
              hover:bg-light-gray rounded-lg"
              onClick={() => handleClick('userProfile')}
            >
              <img 
                alt="avatar"
                className="rounded-full w-8 h-8" 
                src={avatar} />
              <p>
                <span className="text-gray-400">Hi, </span> 
                {/* empty space between Hi, and the Name */}
                {''}
                <span className="text-gray-400 font-bold ml-1 text-14">Michael</span>
              </p>
              {/* dropdown Menu inside of the TooltipComponent with the Profile content */}
              <MdKeyboardArrowDown className="text-gray-400" />
            </div>
        </TooltipComponent>

        {/* if icon in Navbar is clicked we want to render the specific component */}
        {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}

      </div>
    </div>
  )
}

export default Navbar