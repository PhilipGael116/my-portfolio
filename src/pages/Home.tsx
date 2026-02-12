import { User, Computer, EditIcon, LayoutDashboard, Mail, LocateFixedIcon, ToolCaseIcon, Link, Download } from "lucide-react"

const Home = () => {
    return (
        <div className="lg:px-20 px-10 py-20 min-h-screen">
            {/* Navigation card */}
            <div className="lg:flex flex-col gap-6 text-white bg-gray-800 p-5 rounded-4xl w-fit fixed h-fit hidden">
                <a href="" className="bg-white text-gray-800 rounded-lg p-1"><LayoutDashboard /></a>
                <a href=""><User /></a>
                <a href=""><Computer /></a>
                <a href=""><EditIcon /></a>
                <a href=""><Mail /></a>
            </div>
            <h1 className="text-primary md:text-8xl font-black text-center mb-4 text-6xl">Developer</h1>
            {/* Hero section */}
            <div className="grid md:grid-cols-2 grid-cols-1 items-start gap-6 xl:gap-10">
                {/* Profile Card */}
                <div className="border-2 border-l-primary border-t-primary border-gray-200 bg-gray-800 rounded-tl-[80px] rounded-br-[80px] flex flex-col gap-3 items-center md:p-4 p-2 mx-auto">
                    <img src="./hero-image.jpg" alt="my picture" className="border-3 border-primary rounded-full w-[100px] h-[100px] object-cover" />
                    <h3 className="text-gray-100 text-lg font-bold">Philippe</h3>
                    <p className="text-gray-300 text-sm">Full-stack Developer</p>

                    <div className="flex flex-col gap-2 text-gray-300">
                        <p className="flex items-center gap-2">
                            <Mail size={14} className="text-primary" />
                            <a href="#"> gaelngando@gmail.com</a>
                        </p>

                        <p className="flex items-center gap-2">
                            <LocateFixedIcon size={14} className="text-primary" />
                            <a href="#">Buea, Cameroon</a>
                        </p>

                        <p className="flex items-center gap-2">
                            <ToolCaseIcon size={14} className="text-primary" />
                            <a href="#">gaelngando@gmail.com</a>
                        </p>

                        <p className="flex items-center gap-2">
                            <Link size={14} className="text-primary" />
                            <a href="#">www.philippegael.com</a>
                        </p>
                    </div>

                    {/* My Skills */}
                    <div className="flex gap-2 overflow-x-auto flex-nowrap max-w-[280px] hide-scrollbar">
                        <p className="text-gray-200 bg-[#0F172A] p-2 rounded-2xl shrink-0">HTML</p>
                        <p className="text-gray-200 bg-[#0F172A] p-2 rounded-2xl shrink-0">CSS</p>
                        <p className="text-gray-200 bg-[#0F172A] p-2 rounded-2xl shrink-0">JAVASCRIPT</p>
                        <p className="text-gray-200 bg-[#0F172A] p-2 rounded-2xl shrink-0">REACT</p>
                        <p className="text-gray-200 bg-[#0F172A] p-2 rounded-2xl shrink-0">NODE</p>
                        <p className="text-gray-200 bg-[#0F172A] p-2 rounded-2xl shrink-0">EXPRESS JS</p>
                        <p className="text-gray-200 bg-[#0F172A] p-2 rounded-2xl shrink-0">MONGO DB</p>
                    </div>

                    <button className="border-none bg-white text-gray-800 p-3 flex gap-2 items-center rounded-xl cursor-pointer">Downoload CV <Download /> </button>
                </div>

                {/* Devloper Part */}
                <div className="flex flex-col gap-5 items-center md:items-start w-full md:w-fit mx-auto md:mx-0">
                    <div className="flex flex-col items-start w-fit">
                        <div className="text-white w-fit">
                            <p className="text-primary/80 text-xs">&lt;h1&gt;</p>
                            <h1 className="leading-[0.9] tracking-tighter text-4xl lg:text-5xl ml-4 font-extrabold w-fit">
                                I Build Scalable <br /> <span className="text-primary">Digital Systems.</span>
                            </h1>
                            <p className="text-primary/80 text-xs">&lt;/h1&gt;</p>
                        </div>

                        <div className="text-gray-300 w-fit max-w-[500px]">
                            <p className="text-primary/80 text-xs">&lt;p&gt;</p>
                            <p className="tracking-tighter ml-4">
                                I help business grow by crafting amazing web experiences. <br /> If you're looking for a web developer <br />that likes to get stuff done,
                            </p>
                            <p className="text-primary/80 text-xs">&lt;/p&gt;</p>
                        </div>

                        <div className="flex items-start w-fit mt-5">
                            <a href="#" className="flex gap-2 items-center text-4xl"><span className="text-primary">Let's Talk</span> <Mail className="text-primary" size={31} /></a>
                        </div>
                    </div>
                </div>

                {/* The number of part */}
                {/* <div className="flex flex-col gap-5 bg-gray-800 p-7 rounded-2xl w-fit mx-auto">
                    <p className="text-gray-300 flex gap-2"><span className="text-primary text-4xl font-bold">4</span> Programming <br />languages</p>
                    <p className="text-gray-300 flex gap-2"><span className="text-primary text-4xl font-bold">6</span> Devlopement <br />Tools</p>
                    <p className="text-gray-300 flex gap-2"><span className="text-primary text-4xl font-bold">4</span> Years of<br />Experience</p>
                </div> */}

            </div>
        </div >
    )
}

export default Home