import { User, Cpu, Briefcase, LayoutDashboard, Mail, MapPin, Link, Download, GraduationCap, Zap, Rocket, Layers, Send } from "lucide-react"
import { GridBackground } from "../components/ui/Background"
import { Header, Footer } from "../components"
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
            // Find all intersecting entries
            const visibleEntries = entries.filter(entry => entry.isIntersecting);

            if (visibleEntries.length > 0) {
                // If multiple sections are visible (during fast scroll), 
                // pick the one that is MOST visible (highest intersection ratio)
                const mostVisible = visibleEntries.reduce((prev, curr) =>
                    curr.intersectionRatio > prev.intersectionRatio ? curr : prev
                );

                setActiveNav(`#${mostVisible.target.id}`);
            }
        },
            {
                // Using multiple thresholds allows the 'mostVisible' logic to be more granular
                threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
                // Root margin narrowed to detect sections closer to the top-middle
                rootMargin: "-20% 0px -60% 0px"
            }
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
            </div>

            {/* About Section */}
            <section className="px-5 sm:px-45 w-full mt-20 scroll-mt-30" id="about">
                <div className="w-fit">
                    <div className="border-2 border-primary bg-gray-800/70 rounded-tl-[20px] rounded-br-[20px] px-8 py-3 text-2xl font-bold tracking-wider text-white sm:ml-6">
                        About Me
                    </div>
                </div>
            </section>

            <div className="about-cards relative z-30 py-15 px-5 sm:px-50 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 ">
                <div className="flex flex-col gap-10 h-full w-full sm:min-w-[340px]">
                    <div className="flex-1 flex flex-col gap-6 text-white">
                        <div className="bg-gray-800/70 sm:p-8 p-3 rounded-3xl border border-white/5 h-full">
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
                    <p className="text-white mt-4">I had the pleasure of working on these awesome projects</p>
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
                    <p className="text-white mt-4">I had the pleasure of working on these awesome projects</p>
                </div>

                <div className="flex items-center flex-col gap-8">
                    {/* First Blog */}

                    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-x-8 gap-y-4 items-stretch w-full">
                        <img src="/hero-image.webp" alt="" className="w-full h-48 md:h-64 object-cover rounded-2xl" />
                        <div className="flex flex-col justify-between py-1">
                            <div className="flex flex-col gap-3">
                                <a href="#" className="text-primary sm:text-3xl text-xl leading-tight font-bold hover:underline">What does it take to become a web developer?</a>
                                <p className="text-gray-300 line-clamp-3">Web development, also known as website development, encompasses a variety of tasks and processes involved in creating a website for the internet...</p>
                                <p className="text-primary cursor-pointer hover:text-primary/50 font-medium">Read More &gt;&gt;</p>
                            </div>

                            <div className="flex items-center gap-3 mt-4 flex-wrap">
                                <p className="bg-white/10 rounded-xl px-3 py-1 text-gray-300 text-xs">Web Developer</p>
                                <p className="text-gray-300 text-xs"><span className="font-bold text-primary">Text:</span> Philippe</p>
                                <p className="text-gray-300 text-xs font-extralight"><span className="font-bold text-primary">Date:</span> 10.Oct 2023</p>
                                <p className="text-gray-300 text-xs font-extralight"><span className="font-bold text-primary">Read:</span> 1 Min</p>
                            </div>
                        </div>
                    </div>

                    {/* Second Blog */}

                    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-x-8 gap-y-4 items-stretch w-full">
                        <img src="/hero-image.webp" alt="" className="w-full h-48 md:h-64 object-cover rounded-2xl" />
                        <div className="flex flex-col justify-between py-1">
                            <div className="flex flex-col gap-3">
                                <a href="#" className="text-primary sm:text-3xl text-xl leading-tight font-bold hover:underline">The future of Web AI and Agentic Workflow</a>
                                <p className="text-gray-300 line-clamp-3">Artificial Intelligence is reshaping how we build and interact with the web. From autopilots to autonomous coding agents...</p>
                                <p className="text-primary cursor-pointer hover:text-primary/50 font-medium">Read More &gt;&gt;</p>
                            </div>

                            <div className="flex items-center gap-3 mt-4 flex-wrap">
                                <p className="bg-white/10 rounded-xl px-3 py-1 text-gray-300 text-xs">AI & Tech</p>
                                <p className="text-gray-300 text-xs"><span className="font-bold text-primary">Text:</span> Philippe</p>
                                <p className="text-gray-300 text-xs font-extralight"><span className="font-bold text-primary">Date:</span> 15.Feb 2026</p>
                                <p className="text-gray-300 text-xs font-extralight"><span className="font-bold text-primary">Read:</span> 3 Min</p>
                            </div>
                        </div>
                    </div>

                    <a href="#" className="bg-primary px-8 py-2.5 text-slate-950 font-bold rounded-full mt-4 hover:bg-primary/80 transition-all hover:scale-105 shadow-lg shadow-primary/20">View more</a>
                </div>
            </section>

            {/* Contact section */}
            <section className="py-15 px-5 sm:px-20 md:px-50 w-full mt-20 scroll-mt-15" id="contact">
                <div className="relative z-10 flex flex-col items-center mb-6">
                    <div className="w-fit">
                        <p className="relative text-primary text-4xl font-bold border-b pb-2 border-primary 
                            before:content-[''] before:absolute before:bottom-[-4px] before:left-[-4px] before:w-2 before:h-2 before:bg-primary before:rounded-full
                            after:content-[''] after:absolute after:bottom-[-4px] after:right-[-4px] after:w-2 after:h-2 after:bg-primary after:rounded-full">
                            Contact
                        </p>
                    </div>
                    <p className="text-gray-300 mt-4">I'm currently available for freelance work & projects collaborations</p>
                </div>

                <div className="flex flex-col max-w-4xl mx-auto w-full">
                    <div className="flex justify-center items-center">
                        <p className="border-2 border-primary bg-gray-800/70 rounded-tl-[20px] rounded-br-[20px] p-3 text-xl text-white w-max mb-10">Send Me A Message</p>
                    </div>
                    <form className="flex flex-col gap-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-primary font-medium">Your name *</label>
                                <input
                                    type="text"
                                    className="bg-transparent border-0 border-b-2 border-primary py-2 text-white focus:border-white transition-colors outline-none"
                                    placeholder="Philippe Gael"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-primary font-medium">Your email *</label>
                                <input
                                    type="email"
                                    className="bg-transparent border-0 border-b-2 border-primary py-2 text-white focus:border-white transition-colors outline-none"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-primary font-medium">Your message *</label>
                            <textarea
                                rows={1}
                                className="bg-transparent border-0 border-b-2 border-primary py-2 text-white focus:border-white transition-colors outline-none resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <div className="flex items-center justify-center mt-4">
                            <button type="submit" className="flex gap-3 bg-primary border border-primary/50 text-gray-900 rounded-2xl px-8 py-3 font-bold items-center transition-all duration-300">
                                Send Message <Send size={18} />
                            </button>
                        </div>
                    </form>
                </div>
            </section>


            {/* Footer */}
            <Footer />
        </GridBackground >
    )
}

export default Home