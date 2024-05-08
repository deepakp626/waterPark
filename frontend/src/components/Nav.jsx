import { FaBars } from "react-icons/fa";
const Nav = () => {
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
      <nav className="flex justify-between items-center p-2">
        <img src="src/logo/logoo.png" />
        <div className="hidden sm:flex text-sm gap-2 text-secondary sm:none">

          {
            navLink.map((item, index) => (
              <>
                <p key={index}>{item.name}</p>
              </>
            ))
          }
        </div>


        <button className='hidden sm:block text-white bg-[#2C8ECE] px-2 py-1 '>Book Ticket</button>

        <FaBars className="sm:hidden" />
      </nav>
    </>
  )
}

export default Nav