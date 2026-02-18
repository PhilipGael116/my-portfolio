import { FaGithub, FaDiscord, FaInstagram, FaSearch } from "react-icons/fa"
import { Menu } from "lucide-react"
import { useState } from "react"

const Header = () => {

    const [isActive, setIsActive] = useState("home");

    return (
        <div className="w-full">
            <header className="text-white sm:px-20 px-5 py-7 flex items-center justify-between w-full fixed top-0 left-0 z-100 bg-[#0F172A]/70 backdrop-blur-md border-b border-white/5">
                <div className="text-lg font-bold tracking-tight">
                    <span className="text-primary">&lt;C/&gt;</span>PhilippeGael
                </div>
                <div className="text-md flex gap-6 items-center">
                    <a href="#home" onClick={() => isActive !== "home" ? setIsActive("home") : null} className={`hidden sm:block ${isActive === "home" ? "text-primary/90" : "text-white"}`}>Home</a>
                    <a href="#" onClick={() => isActive !== "blogs" ? setIsActive("blogs") : null} className={`hidden sm:block ${isActive === "blogs" ? "text-primary/90" : "text-white"}`}>Blogs</a>
                    <FaSearch className="sm:hidden block" />
                    <Menu className="sm:hidden block" />
                    <div className="relative hidden md:block group">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-xs" />
                        <input
                            type="text"
                            className="bg-white/5 border border-white/10 rounded-full py-1.5 pl-9 pr-4 text-sm text-white placeholder:text-gray-500 outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 w-32 focus:w-48"
                            placeholder="Search..."
                        />
                    </div>
                    <a href="#" className="sm:flex gap-2 items-center hidden"><FaInstagram className="text-primary" /> <span className="hidden md:block">Instagram</span></a>
                    <a href="#" className="sm:flex gap-2 items-center hidden"><FaDiscord className="text-primary" /> <span className="hidden md:block">Discord</span></a>
                    <a href="#" className="sm:flex gap-2 items-center hidden"><FaGithub className="text-primary" /> <span className="hidden md:block">Github</span></a>
                </div>
            </header>
        </div>
    )
}

export default Header