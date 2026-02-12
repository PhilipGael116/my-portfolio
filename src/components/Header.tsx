import { FaGithub, FaDiscord, FaInstagram, FaSearch } from "react-icons/fa"
import { Menu } from "lucide-react"

const Header = () => {
    return (
        <div>
            <header className="text-white  lg:px-20 px-10 py-7 flex items-center justify-between sticky top-0 w-full">
                <div className="text-lg font-bold">
                    <span className="text-primary">&lt;C/&gt;</span>PhilippeGael
                </div>
                <div className="text-md flex gap-6 items-center">
                    <a href="#" className="text-nav hidden sm:block">Home</a>
                    <a href="#" className="hover:text-nav transition-colors sm:block hidden">Blogs</a>
                    <FaSearch className="sm:hidden block" />
                    <Menu className="sm:hidden block" />
                    <input type="text" className="border rounded-2xl bg-white border-primary text-slate-900 p-1 hidden md:block" placeholder="search..." />
                    <a href="#" className="sm:flex gap-2 items-center hidden"><FaInstagram className="text-primary" /> <span className="hidden md:block">Instagram</span></a>
                    <a href="#" className="sm:flex gap-2 items-center hidden"><FaDiscord className="text-primary" /> <span className="hidden md:block">Discord</span></a>
                    <a href="#" className="sm:flex gap-2 items-center hidden"><FaGithub className="text-primary" /> <span className="hidden md:block">Github</span></a>
                </div>
            </header>
            <hr className="text-slate-600 w-9/10 mx-auto" />
        </div>
    )
}

export default Header