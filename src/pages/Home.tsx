import { User, Cpu, Briefcase, LayoutDashboard, Mail, MapPin, Link, Download, GraduationCap, Zap, Rocket, Layers, Send } from "lucide-react"
import { GridBackground } from "../components/ui/Background"
import { Header } from "../components"
import { FlipWords } from "../components/ui/flip-words"
import { SpinningGlobe } from "../components/ui/spinning-globe"
import { CanvasRevealEffect, Card } from "@/components/ui/canvas-reveal-effect";
import { CarouselDemo } from "../components/ui/carousel"
import { InfiniteMovingCardsDemo } from "@/components/ui/testimonials"

import { useState, useEffect } from "react"

const Home = () => {
    const titles = ["Developer", "Designer", "Engineer", "Architect"];

    const [activeNav, setActiveNav] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveNav(`#${entry.target.id}`);
                }
            });
        },
            { threshold: 0.6 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, [])



    return (
        <GridBackground>
            <div>
                <Header />
                <div className="px-5 sm:px-24 py-30 min-h-screen">
                    {/* Navigation card */}
                    <div className="nav-card lg:flex flex-col gap-6 text-white bg-gray-800 p-5 rounded-4xl w-fit fixed h-fit hidden z-100">
                        <a href="#home" title="Home" onClick={() => setActiveNav("#home")} className={`rounded-lg transition-all duration-300 p-2 ${activeNav === "#home" ? "bg-white text-gray-800" : ""}`}><LayoutDashboard size={20} /></a>
                        <a href="#about" title="About" onClick={() => setActiveNav("#about")} className={`rounded-lg transition-all duration-300 p-2 ${activeNav === "#about" ? "bg-white text-gray-800" : ""}`}><User size={20} /></a>
                        <a href="#my-strategy" title="Strategy" onClick={() => setActiveNav("#my-strategy")} className={`rounded-lg transition-all duration-300 p-2 ${activeNav === "#my-strategy" ? "bg-white text-gray-800" : ""}`}><Zap size={20} /></a>
                        <a href="#my-works" title="Works" onClick={() => setActiveNav("#my-works")} className={`rounded-lg transition-all duration-300 p-2 ${activeNav === "#my-works" ? "bg-white text-gray-800" : ""}`}><Briefcase size={20} /></a>
                        <a href="#contact" title="Contact" onClick={() => setActiveNav("#contact")} className={`rounded-lg transition-all duration-300 p-2 ${activeNav === "#contact" ? "bg-white text-gray-800" : ""}`}><Mail size={20} /></a>
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
                        <div className="profile-card border-2 border-l-primary border-t-primary border-gray-200 bg-gray-800 rounded-tl-[80px] rounded-br-[80px] flex flex-col gap-3 items-center p-4 w-[300px] mx-auto">
                            <img src="./hero-image.jpg" alt="my picture" className="border-3 border-primary rounded-full w-[100px] h-[100px] object-cover" loading="lazy" />
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
                                    <h1 className="i-build leading-[0.9] tracking-tighter text-5xl md:text-4xl lg:text-5xl ml-4 font-extrabold w-fit">
                                        I Build Scalable <br className="hidden md:block" /> <span className="text-primary">Digital Systems.</span>
                                    </h1>
                                    <p className="text-primary/80 text-xs">&lt;/h1&gt;</p>
                                </div>

                                <div className="text-gray-300 w-fit max-w-[500px] p-part">
                                    <p className="text-primary/80 text-xs">&lt;p&gt;</p>
                                    <p className="tracking-tighter ml-4">
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
            </div>

            {/* About Section */}
            <section className="px-5 sm:px-45 w-full mt-20 scroll-mt-30" id="about">
                <div className="w-fit">
                    <div className="border-2 border-primary bg-gray-800 rounded-tl-[80px] rounded-br-[80px] px-8 py-3 text-2xl font-bold tracking-wider text-white">
                        About Me
                    </div>
                </div>
            </section>

            <div className="about-cards relative z-30 py-15 px-5 sm:px-50 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 ">
                <div className="flex flex-col gap-10 h-full w-full sm:min-w-[340px]">
                    <div className="flex-1 flex flex-col gap-6 text-gray-300">
                        <div className="bg-gray-800 sm:p-8 p-3 rounded-3xl border border-white/5 h-full">
                            <p className="text-primary/80 text-xs mb-2">&lt;p&gt;</p>
                            <div className="flex flex-col gap-4 text-lg leading-relaxed ml-4">
                                <p className="text-sm">
                                    My name is Philippe and I specialize in web development that utilizes <span className="text-primary font-bold">REACT</span>, <span className="text-primary font-bold">EXPRESS</span>, and <span className="text-primary font-bold">MONGODB</span>.
                                </p>
                                <p className="text-sm">
                                    I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
                                </p>
                                <p className="text-sm">
                                    When I'm not coding, I am <span className="text-primary font-bold">writing blogs</span>, reading, or picking up some new hands-on art project like <span className="text-primary font-bold">Playing the Piano</span>.
                                </p>
                                <p className="text-sm">
                                    I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                                </p>
                            </div>
                            <p className="text-primary/80 text-xs mt-2">&lt;/p&gt;</p>
                        </div>
                    </div>
                </div>

                <SpinningGlobe />
            </div>

            {/* My Strategy section */}

            <section className="py-15 px-5 sm:px-20 md:px-50 w-full mt-20 scroll-mt-15" id="my-strategy">
                <div className="relative z-10 flex flex-col items-center mb-10">
                    <div className="w-fit">
                        <p className="relative text-primary text-4xl font-bold border-b pb-2 border-primary 
                            before:content-[''] before:absolute before:bottom-[-4px] before:left-[-4px] before:w-2 before:h-2 before:bg-primary before:rounded-full
                            after:content-[''] after:absolute after:bottom-[-4px] after:right-[-4px] after:w-2 after:h-2 after:bg-primary after:rounded-full">
                            Strategy
                        </p>
                    </div>
                </div>

                <div className="w-full min-h-[500px] relative grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Card 1: Cyan/Teal - Planning */}
                    <Card
                        title="Planning & Strategy"
                        description="We'll collaborate to map out your website's goals, target audience, and key functionalities."
                        icon={<Layers size={64} className="text-teal-400" />}
                    >
                        <CanvasRevealEffect
                            animationSpeed={5}
                            containerClassName="bg-teal-900"
                            colors={[
                                [0, 217, 255],    // Bright Cyan
                            ]}
                            dotSize={3}
                            showGradient={false}
                        />
                    </Card>

                    {/* Card 2: Purple/Violet - Development */}
                    <Card
                        title="Development & Build"
                        description="From design to deployment, I'll build your project with clean code and modern technologies."
                        icon={<Cpu size={64} className="text-purple-400" />}
                    >
                        <CanvasRevealEffect
                            animationSpeed={5}
                            containerClassName="bg-purple-900"
                            colors={[
                                [168, 85, 247],   // Vibrant Purple
                            ]}
                            dotSize={3}
                            showGradient={false}
                        />
                    </Card>

                    {/* Card 3: Blue - Launch (matches your primary color) */}
                    <Card
                        title="Launch & Scale"
                        description="Ensuring smooth deployment and providing ongoing support as your project grows."
                        icon={<Rocket size={64} className="text-blue-400" />}
                    >
                        <CanvasRevealEffect
                            animationSpeed={5}
                            containerClassName="bg-blue-900"
                            colors={[
                                [59, 130, 246],   // Primary Blue
                            ]}
                            dotSize={3}
                            showGradient={false}
                        />
                    </Card>
                </div>
            </section>

            {/*  My works section */}

            <section className="py-15 px-5 sm:px-20 md:px-50 w-full mt-20 scroll-mt-15 relative overflow-hidden" id="my-works">
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-fit">
                        <p className="relative text-primary text-4xl font-bold border-b pb-2 border-primary 
                            before:content-[''] before:absolute before:bottom-[-4px] before:left-[-4px] before:w-2 before:h-2 before:bg-primary before:rounded-full
                            after:content-[''] after:absolute after:bottom-[-4px] after:right-[-4px] after:w-2 after:h-2 after:bg-primary after:rounded-full">
                            Works
                        </p>
                    </div>
                    <p className="text-gray-300 mt-4">I had the pleasure of working on these awesome projects</p>
                </div>

                <CarouselDemo />
            </section>

            {/* Testimonials section */}
            <section className="py-15 px-5 sm:px-20 md:px-50 w-full mt-20 scroll-mt-15" id="testimonials">
                <div className="relative z-10 flex flex-col items-center mb-10">
                    <div className="w-fit">
                        <p className="relative text-primary text-4xl font-bold border-b pb-2 border-primary 
                before:content-[''] before:absolute before:bottom-[-4px] before:left-[-4px] before:w-2 before:h-2 before:bg-primary before:rounded-full
                after:content-[''] after:absolute after:bottom-[-4px] after:right-[-4px] after:w-2 after:h-2 after:bg-primary after:rounded-full">
                            Testimonials
                        </p>
                    </div>
                </div>

                <InfiniteMovingCardsDemo />
            </section>

            {/* Blogs section */}
            <section className="py-15 px-5 sm:px-20 md:px-50 w-full mt-20 scroll-mt-15" id="blogs">
                <div className="relative z-10 flex flex-col items-center mb-6">
                    <div className="w-fit">
                        <p className="relative text-primary text-4xl font-bold border-b pb-2 border-primary 
                            before:content-[''] before:absolute before:bottom-[-4px] before:left-[-4px] before:w-2 before:h-2 before:bg-primary before:rounded-full
                            after:content-[''] after:absolute after:bottom-[-4px] after:right-[-4px] after:w-2 after:h-2 after:bg-primary after:rounded-full">
                            Blogs
                        </p>
                    </div>
                    <p className="text-gray-300 mt-4">I had the pleasure of working on these awesome projects</p>
                </div>

                <div className="flex items-center flex-col gap-6">
                    {/* First Blog */}

                    <div className="flex gap-5">
                        <img src="/hero-image.jpg" alt="" className="max-w-[250px] max-h-[200px] rounded-2xl" />
                        <div className="flex flex-col gap-5">
                            <a href="#" className="text-primary sm:text-3xl text-xl leading-[0.9]">What does it take to onlinee a web developer?</a>
                            <a href="#" className="text-gray-300">Web developement, also know as website developement, encompasses a variety of tasks and processes involved in creating website for the internet...</a>
                            <p className="text-primary cursor-pointer hover:text-primary/50">Read More&gt;&gt;</p>

                            <div className="flex items-center gap-3 mt-3">
                                <p className="bg-white/15 rounded-2xl p-2 text-gray-300">Web Developer</p>
                                <p className="text-gray-300"><span className="font-bold">Text</span> Philippe</p>
                                <p className="text-gray-300 font-extralight"><span className="font-bold">Date</span> 10.Oct 2023</p>
                                <p className="text-gray-300 font-extralight"><span className="font-bold">Read</span> 1 Min</p>
                            </div>
                        </div>
                    </div>
                    {/* Second Blog */}

                    <div className="flex gap-5">
                        <img src="/hero-image.jpg" alt="" className="max-w-[250px] max-h-[200px] rounded-2xl" />
                        <div className="flex flex-col gap-5">
                            <a href="#" className="text-primary sm:text-3xl text-xl leading-[0.9]">What does it take to become a web developer?</a>
                            <p className="text-gray-300">Web developement, also know as website developement, encompasses a variety of tasks and processes involved in creating website for the internet...</p>
                            <p className="text-primary cursor-pointer hover:text-primary/50">Read More&gt;&gt;</p>

                            <div className="flex items-center gap-3 mt-3">
                                <p className="bg-white/15 rounded-2xl p-2 text-gray-300">Web Developer</p>
                                <p className="text-gray-300"><span className="font-bold">Text</span> Philippe</p>
                                <p className="text-gray-300 font-extralight"><span className="font-bold">Date</span> 10.Oct 2023</p>
                                <p className="text-gray-300 font-extralight"><span className="font-bold">Read</span> 1 Min</p>
                            </div>
                        </div>
                    </div>

                    <a href="#" className="bg-primary p-2 text-slate-950 text-xl rounded-2xl mt-1">View more</a>
                </div>
            </section>

            {/* Contact section */}
            <section className="py-15 px-5 sm:px-20 md:px-50 w-full mt-20 scroll-mt-15" id="testimonials">
                <div className="relative z-10 flex flex-col items-center mb-6">
                    <div className="w-fit">
                        <p className="relative text-primary text-4xl font-bold border-b pb-2 border-primary 
                            before:content-[''] before:absolute before:bottom-[-4px] before:left-[-4px] before:w-2 before:h-2 before:bg-primary before:rounded-full
                            after:content-[''] after:absolute after:bottom-[-4px] after:right-[-4px] after:w-2 after:h-2 after:bg-primary after:rounded-full">
                            Contact
                        </p>
                    </div>
                    <p className="text-gray-300 mt-4">I'm currenlt available for freelance work</p>
                </div>

                <div className="flex flex-col">
                    <div className="flex justify-center items-center">
                        <p className="border-2 border-primary bg-gray-800 rounded-tl-[20px] rounded-br-[20px] p-3 text-xl text-white w-max">Send Me A Message</p>
                    </div>
                    <div className="flex flex-col gap-10 mt-10">
                        <div className="flex items-center md:px-70 justify-between">
                            <div className="flex flex-col gap-1">
                                <p className="text-sm text-primary">Your name *</p>
                                <input type="text" className="border-none group-focus-within:text-primary border-t-0" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm text-primary">Your email *</p>
                                <input type="email" className="border-none group-focus-within:text-primary border-t-0" />
                            </div>
                        </div>
                        <p className="text-sm text-primary">Your message *</p>
                        <input type="text" />
                    </div>
                    <div className="flex items-center justify-center mt-8">
                        <button className="flex gap-3 bg-gray-800 rounded-2xl px-4 py-3 font-light text-white">Send Message <Send /> </button>
                    </div>
                </div>
            </section>

        </GridBackground >
    )
}

export default Home