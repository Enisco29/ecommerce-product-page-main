import sneakers from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import { useState } from "react";
import menu from "../assets/images/icon-menu.svg";
import Cart from "./Cart";
import close from "../assets/images/icon-close.svg";

const lists = ["Collections", "Men", "Women", "About", "Contact"];

const Navbar = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [activeList, setActiveList] = useState(lists[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCartToggle = () => {
    setCartIsOpen(!cartIsOpen);
  };

  const handleListClick = (list: string) => {
    setActiveList(list);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div className="inset-0 bg-black h-[100%] absolute w-[100%] sm:hidden bg-opacity-70 z-50 ">
          <div className="w-[70%] h-[100%] bg-white  top-0 left-0 p-6 font-bold ">
            <div onClick={handleMobileMenuToggle}>
              <img src={close} alt="close" className="mb-[40px] w-4" />
            </div>{" "}
            <ul className="flex flex-col gap-4">
              {lists.map((list, index) => {
                return (
                  <li
                    key={index}
                    className={`relative cursor-pointer transition-colors duration-300 ${
                      activeList === list ? "text-black" : "text-gray-600"
                    } 
              after:content-[''] after:absolute after:left-0 after:-bottom-[-1px] after:h-[3px] 
              after:transition-all after:duration-500 
              ${
                activeList === list
                  ? "after:w-[63px] after:bg-orange-500"
                  : "after:w-0 after:bg-transparent"
              }`}
                    onClick={() => handleListClick(list)}
                  >
                    {list}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      <div className="flex flex-col sm:w-[80%] w-full relative">
        {cartIsOpen && <Cart />}

        <div className="flex justify-between items-center  h-[110px] ">
          <div className="flex sm:ml-0 ml-5 items-center sm:gap-[50px] gap-4">
            <img
              src={menu}
              alt="mobile-menu"
              className="sm:hidden block w-[20px]"
              onClick={handleMobileMenuToggle}
            />
            <img src={sneakers} alt="logo " />
            <ul className="sm:flex gap-6 font-[400] text-[16px] text-Dark_grayish_blue hidden">
              {lists.map((list, index) => {
                return (
                  <li
                    key={index}
                    className={`relative cursor-pointer transition-colors duration-300 ${
                      activeList === list ? "text-black" : "text-gray-600"
                    } 
                  after:content-[''] after:absolute after:left-0 after:-bottom-11 after:h-[3px] 
                  after:transition-all after:duration-500 
                  ${
                    activeList === list
                      ? "after:w-full after:bg-orange-500"
                      : "after:w-0 after:bg-transparent"
                  }`}
                    onClick={() => handleListClick(list)}
                  >
                    {list}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center sm:mr-12 mr-6 h-[60px] sm:w-[120px] w-[80px] sm:gap-[40px] gap-[20px]">
            <img
              src={cart}
              alt="cart"
              className="cursor-pointer"
              onClick={handleCartToggle}
            />
            <div className="hover:border-2 hover:border-Orange rounded-full">
              <img
                src={avatar}
                alt="avatar"
                className="rounded-full w-[50px] cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center h-[1px] w-full bg-Light_grayish_blue"></div>
      </div>
    </>
  );
};

export default Navbar;
