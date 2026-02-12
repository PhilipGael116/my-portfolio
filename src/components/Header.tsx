import { FaGithub, FaDiscord, FaInstagram } from "react-icons/fa"

const Header = () => {
    return (
        <div>
            <header className="text-white  lg:px-20 px-10 py-7 flex items-center justify-between sticky top-0 w-full">
                <div className="text-lg font-bold">
                    <span className="text-primary">&lt;C/&gt;</span>PhilippeGael
                </div>
                <div className="text-md flex gap-6">
                    <a href="#">Home</a>
                    <a href="#">Blogs</a>
                    <input type="text" className="border rounded-2xl bg-white border-primary text-slate-900 p-1" placeholder="search..." />
                    <a href="#" className="flex gap-2 items-center"><FaInstagram className="text-primary" /> <span className="hidden md:block">Instagram</span></a>
                    <a href="#" className="flex gap-2 items-center"><FaDiscord className="text-primary" /> <span className="hidden md:block">Discord</span></a>
                    <a href="#" className="flex gap-2 items-center"><FaGithub className="text-primary" /> <span className="hidden md:block">Github</span></a>
                </div>
            </header>
            <hr className="text-slate-600 w-9/10 mx-auto" />
        </div>
    )
}

export default Header