import { User, Computer, EditIcon, LayoutDashboard, Mail, LocateFixedIcon, ToolCaseIcon, Link, Download } from "lucide-react"
import { GridBackground } from "../components/ui/Background"
import { Header } from "../components"
import { FlipWords } from "../components/ui/flip-words"
import { SpinningGlobe } from "../components/ui/spinning-globe"
import { CanvasRevealEffect, Card } from "@/components/ui/canvas-reveal-effect";

const Home = () => {
    const titles = ["Developer", "Designer", "Engineer", "Architect"]

    return (
        <GridBackground>
            <div>
                <Header />
                <div className="px-5 sm:px-24 py-30 min-h-screen">
                    {/* Navigation card */}
                    <div className="nav-card lg:flex flex-col gap-6 text-white bg-gray-800 p-5 rounded-4xl w-fit fixed h-fit hidden z-100">
                        <a href="#home" className="bg-white text-gray-800 rounded-lg p-1"><LayoutDashboard /></a>
                        <a href="#about"><User /></a>
                        <a href="#projects"><Computer /></a>
                        <a href="#skills"><EditIcon /></a>
                        <a href="#contact"><Mail /></a>
                    </div>
                    {/* Title flipper */}
                    <div className="text-center mb-4">
                        <h1 className="text-white md:text-8xl font-black text-5xl sm:text-6xl inline-block">
                            <FlipWords words={titles} className="text-primary" />
                        </h1>
                    </div>
                    {/* Hero section */}
                    <div className="grid md:grid-cols-2 grid-cols-1 items-start gap-6 xl:gap-10">
                        {/* Profile Card */}
                        <div className="profile-card border-2 border-l-primary border-t-primary border-gray-200 bg-gray-800 rounded-tl-[80px] rounded-br-[80px] flex flex-col gap-3 items-center sm:p-4 p-2 sm:w-[300px] mx-auto">
                            <img src="./hero-image.jpg" alt="my picture" className="border-3 border-primary rounded-full w-[100px] h-[100px] object-cover" loading="lazy" />
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
                            <div className="flex gap-2 overflow-x-auto flex-nowrap max-w-[200px] md:max-w-[280px] hide-scrollbar">
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
                        <div className="flex flex-col gap-5 items-start justify-center w-full h-full">
                            <div className="flex flex-col w-fit">
                                <div className="text-white w-fit">
                                    <p className="text-primary/80 text-xs">&lt;h1&gt;</p>
                                    <h1 className="i-build leading-[0.9] tracking-tighter text-5xl md:text-4xl lg:text-5xl ml-4 font-extrabold w-fit">
                                        I Build Scalable <br className="hidden md:block" /> <span className="text-primary">Digital Systems.</span>
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
            <div className="px-5 sm:px-45 w-full mt-20 scroll-mt-30" id="about">
                <div className="w-fit">
                    <div className="border-2 border-primary bg-gray-800 rounded-tl-[80px] rounded-br-[80px] px-8 py-3 text-2xl font-bold tracking-wider text-white">
                        About Me
                    </div>
                </div>
            </div>

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

            <div className="py-15 px-5 sm:px-50 w-full mt-20">
                <div className="w-fit mb-10">
                    <div className="border-2 border-primary bg-gray-800 rounded-tl-[80px] rounded-br-[80px] px-8 py-3 text-2xl font-bold tracking-wider text-white">
                        My Strategy
                    </div>
                </div>

                <div className="w-full min-h-[500px] relative grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Card 1: Cyan/Teal - Planning */}
                    <Card
                        title="Planning & Strategy"
                        description="We'll collaborate to map out your website's goals, target audience, and key functionalities."
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
            </div>

        </GridBackground>
    )
}

export default Home