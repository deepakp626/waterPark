import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { ImCancelCircle } from "react-icons/im";

const Nav = () => {
  const [menu, setMenu] = useState(true)

  const ToggleSidebar = () => {
    menu === true ? setMenu(false) : setMenu(true);
  }
  const navLink = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Facilities",
      link: "/",
    },
    {
      name: "Gallery",
      link: "/",
    },
    {
      name: "Review",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/",
    },
  ]
  return (
    <>
      <nav className="flex overflow-visible  justify-between items-center p-2 ">
        <img src="/logoo.png" />
        <div className="hidden sm:flex text-sm gap-2 text-secondary sm:none">

          {
            navLink.map((item, index) => (
              <>
                <p key={index}>{item.name}</p>
              </>
            ))
          }
        </div>


        <button className='hidden sm:block text-white bg-[#2C8ECE] px-2 py-1 rounded-lg'>Book Ticket</button>

        {
          menu ?
            (<FaBars onClick={(e) => setMenu()} className="sm:hidden text-xl" />
            )
            :
            (<div className="sm:hidden z-50 fixed top-4 right-2 bg-white" >
              <Sidebar >
                <div className="flex justify-end">
                  <ImCancelCircle onClick={ToggleSidebar} className="text-3xl" aria-label="Cancel" />
                </div>

                <Menu>
                  {
                    navLink.map((item, index) => (
                      <MenuItem key={index}> {item.name} </MenuItem>
                    ))
                  }

                </Menu>
              </Sidebar>
            </div>)
        }
      </nav>
    </>
  )
}

export default Nav