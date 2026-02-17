import { FaInstagram, FaDiscord, FaGithub } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="mt-20 text-gray-300 text-xs sm:text-sm sm:px-20 px-5 py-7 gap-5 w-full bg-[#0F172A] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 border-t border-white/5">
            <div>
                <p>&copy; 2026 Phlippe Gael. All rights reserved.</p>
            </div>
            <div className="flex gap-5 items-center md:justify-end">
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div className="flex lg:justify-end gap-5 items-center text-primary">
                <FaInstagram />
                <FaDiscord />
                <FaGithub />
            </div>
        </footer>
    )
}

export default Footer