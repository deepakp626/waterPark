import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

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
            <div className="p-8 m-4 bg-bg text-center space-y-4">
                <div>
                    <img className="mx-auto" src="/src/logo/logoo.png" alt="" />
                </div>
                <p className="text-secondary font-normal text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient augue tempor amet lobortis.</p>
                <div className="flex gap-4 justify-center text-[1.5rem]">
                    <FaFacebook />
                    <FaInstagram />
                    <FaLinkedin />
                    <FaTwitter /> <FaYoutube />
                </div>
                <div className="flex gap-4 justify-center">
                    {
                        footerLink.map((item, index) => (
                            <>
                                <a key={index} href={item.link}>{item.name}</a>
                            </>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Footer