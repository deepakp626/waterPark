import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import footerBG from '/bg/footerBG.svg';

const Footer = () => {
    const footerLink = [
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
            <div className="mx-2">
                <div className="flex justify-center mt-5">
                    <img className="w-[15em] sm:w-[25em] " src={footerBG} alt="footer bg image" />
                </div>
                <div className="p-8 bg-bg text-center space-y-4 mt-0 ">
                    <div>
                        <img className="mx-auto" src="/logoo.png" alt="logo" />
                    </div>
                    <p className="text-secondary font-normal text-xs">Toofani Water Park- The Largest Water Park in North Bihar</p>
                    <div className="flex gap-4 justify-center text-[1.5rem]">
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />
                        <FaTwitter /> <FaYoutube />
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {
                            footerLink.map((item, index) => (
                                <>
                                    <a key={index} href={item.link}>{item.name}</a>
                                </>
                            ))
                        }
                    </div>

                </div>
                <div className="flex justify-between text-black text-[0.7rem] my-2">
                    <a className="" href="">Copyright ©  | Toofani water park . All Rights Reserved | made by Framedigital solutions with ❤️ </a>
                    <a href="">Privacy and Policy | Terms And Conditions</a>
                </div>
            </div>
        </>
    )
}

export default Footer