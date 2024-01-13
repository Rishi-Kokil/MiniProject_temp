import "./Navbar.css"
import { navigation_links } from "../constants";
import { useState } from "react";

const Navbar = () => {
  // const close_logo = "../../../assests/close.png";
  // const menu_logo = "../../../assests/menu.png";

  const close_logo = "C:/Users/rishi/OneDrive/Desktop/CognitiveCare/cognitive_care/src/components/navbar/close.png";
  const menu_logo = "C:/Users/rishi/OneDrive/Desktop/CognitiveCare/cognitive_care/src/components/navbar/menu.pn/";

  const [toggle, setToggle] = useState(false)
  console.log(navigation_links);
  return (
    <nav className=" w-full fles py-6 justify-between items-center navbar">
      <img src="#" alt="Logo" className="w-[124px] h-[32]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigation_links.map((ele, index) => (
          <li className={`font-normal cursor-pointer text-[16px] ${index === (navigation_links.length - 1) ? "mr-0" : "mr-10"}`}
            key={ele.id}>
            <a href={ele.url} > {ele.title} </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close_logo : menu_logo}
          alt="CloseMenu"
          className=" w-[28px] h-[28px] object-contain"
          onClick={() => { setToggle((prev) => !prev) }}
        />
        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navigation_links.map((ele, index) => (
              <li className={`font-normal cursor-pointer text-[16px] ${index === (navigation_links.length - 1) ? "mb-0" : "mb-10"}`}
                key={ele.id}>
                <a href={ele.url} > {ele.title} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;  