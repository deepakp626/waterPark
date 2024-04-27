import { FaBars } from "react-icons/fa";
const Nav = ()=>{
    return(
        <>
          <nav className="flex justify-between items-center p-2">
            <img src="src/logo/logoo.png" />
            <FaBars />
          </nav>
        </>
    )
}

export default Nav