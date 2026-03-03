import { User, Briefcase, LayoutDashboard, Mail, MapPin, Link, Download, GraduationCap, Zap } from "lucide-react"
import { FlipWords } from "../components/ui/flip-words"

import { useState } from "react";

const HeroSection = () => {

    const titles = ["Developer", "Designer", "Engineer", "Architect"];
    const [activeNav, setActiveNav] = useState("");


    return (
        <div className="px-5 sm:px-24 py-30 min-h-screen">
            {/* Navigation card */}
            <div className="nav-card lg:flex flex-col gap-4 text-white bg-gray-900/60 backdrop-blur-md p-3 rounded-full w-fit fixed top-40 left-6 hidden z-100 border border-white/10 shadow-2xl">
                {[
                    { id: "#home", icon: <LayoutDashboard size={20} />, title: "Home" },
                    { id: "#about", icon: <User size={20} />, title: "About" },
                    { id: "#my-strategy", icon: <Zap size={20} />, title: "Strategy" },
                    { id: "#my-works", icon: <Briefcase size={20} />, title: "Works" },
                    { id: "#contact", icon: <Mail size={20} />, title: "Contact" },
                ].map((item) => (
                    <a
                        key={item.id}
                        href={item.id}
                        title={item.title}
                        onClick={() => setActiveNav(item.id)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 
                                    ${activeNav === item.id
                                ? "bg-white text-gray-900 scale-110"
                                : ""
                            }`}
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
            {/* Title flipper */}
            <section className="text-center mb-4 scroll-mt-30" id="home">
                <h1 className="text-white md:text-8xl font-black text-5xl sm:text-6xl inline-block">
                    <FlipWords words={titles} className="text-primary" />
                </h1>
            </section>
            {/* Hero section */}
            <div className="grid md:grid-cols-2 grid-cols-1 items-start gap-6 xl:gap-10">
                {/* Profile Card */}
                <div className="profile-card border-2 border-l-primary border-t-primary border-gray-200 bg-gray-800/70 rounded-tl-[80px] rounded-br-[80px] flex flex-col gap-3 items-center p-4 w-[300px] mx-auto">
                    <img src="./hero-image.webp" alt="my picture" className="border-3 border-primary rounded-full w-[100px] h-[100px] object-cover" loading="lazy" />
                    <h3 className="text-gray-100 text-lg font-bold">Philippe</h3>
                    <p className="text-gray-300 text-sm">Full-stack Developer</p>

                    <div className="flex flex-col gap-2 text-gray-300">
                        <p className="flex items-center gap-2">
                            <Mail size={14} className="text-primary" />
                            <a href="mailto:gaelngando@gmail.com" className="hover:text-primary transition-colors text-xs">gaelngando@gmail.com</a>
                        </p>

                        <p className="flex items-center gap-2">
                            <MapPin size={14} className="text-primary" />
                            <span className="text-xs">Buea, Cameroon</span>
                        </p>

                        <p className="flex items-center gap-2">
                            <GraduationCap size={14} className="text-primary" />
                            <span className="text-xs">Software Engineering</span>
                        </p>

                        <p className="flex items-center gap-2">
                            <Link size={14} className="text-primary" />
                            <a href="https://www.philippegael.online" target="_blank" className="hover:text-primary transition-colors text-xs">www.philippegael.online</a>
                        </p>
                    </div>

                    {/* My Skills */}
                    <div className="flex gap-2 overflow-x-auto flex-nowrap max-w-[200px] md:max-w-[280px] hide-scrollbar">
                        <p className="text-gray-200 bg-[#0F172A] p-2 rounded-2xl shrink-0 text-xs font-bold">HTML</p>
                        <p className="text-gray-200 bg-[#0F172A] p-2 rounded-2xl shrink-0 text-xs font-bold">CSS</p>
                        <p className="text-gray-200 bg-[#0F172A] p-2 rounded-2xl shrink-0 text-xs font-bold">JS</p>
                        <p className="text-gray-200 bg-[#0F172A] p-2 rounded-2xl shrink-0 text-xs font-bold">REACT</p>
                        <p className="text-gray-200 bg-[#0F172A] p-2 rounded-2xl shrink-0 text-xs font-bold">NODE</p>
                        <p className="text-gray-200 bg-[#0F172A] p-2 rounded-2xl shrink-0 text-xs font-bold">EXPRESS</p>
                        <p className="text-gray-200 bg-[#0F172A] p-2 rounded-2xl shrink-0 text-xs font-bold">MONGO</p>
                    </div>

                    <a href="/my-cv.pdf" className="border-none bg-white text-gray-800 p-3 flex gap-2 items-center rounded-xl font-bold cursor-pointer hover:bg-gray-200 transition-colors" download>Download CV <Download className="animate-bounce" size={18} /> </a>
                </div>

                {/* Devloper Part */}
                <div className="flex flex-col gap-5 items-center sm:items-start justify-center w-full h-full">
                    <div className="i-build-container flex flex-col w-fit items-center sm:items-start">
                        <div className="text-white w-fit">
                            <p className="text-primary/80 text-xs">&lt;h1&gt;</p>
                            <h1 className="i-build leading-[0.9] tracking-tighter text-3xl sm:text-5xl md:text-4xl lg:text-5xl ml-4 font-extrabold w-fit">
                                I Build Scalable <br className="hidden md:block" /> <span className="text-primary">Digital Systems.</span>
                            </h1>
                            <p className="text-primary/80 text-xs">&lt;/h1&gt;</p>
                        </div>

                        <div className="text-gray-300 w-fit max-w-[500px] p-part">
                            <p className="text-primary/80 text-xs">&lt;p&gt;</p>
                            <p className="tracking-tighter ml-4  text-sm sm:text-md">
                                I help business grow by crafting amazing web experiences. <br className="hidden sm:block" /> If you're looking for a web developer <br />that likes to get stuff done,
                            </p>
                            <p className="text-primary/80 text-xs">&lt;/p&gt;</p>
                        </div>

                        <div className="flex items-start w-fit mt-5">
                            <a href="#" className="flex gap-2 items-center sm:text-4xl text-3xl"><span className="text-primary">Let's Talk</span> <Mail className="text-primary animate-pulse" size={31} /></a>
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

export default HeroSection