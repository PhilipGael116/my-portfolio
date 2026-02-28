import { Cpu, Rocket, Layers, Send } from "lucide-react"
import { GridBackground } from "../components/ui/Background"
import { Header, Footer, HeroSection } from "../components"
import { SpinningGlobe } from "../components/ui/spinning-globe"
import { CanvasRevealEffect, Card } from "@/components/ui/canvas-reveal-effect";
import { CarouselDemo } from "../components/ui/carousel"
import { InfiniteMovingCardsDemo } from "@/components/ui/testimonials"

import { useEffect } from "react"

const Home = () => {

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

    const blogs = [
        {
            id: 1,
            src: "/hero-image.webp",
            title: "The future of Web AI and Agentic Workflow",
            content: "Artificial Intelligence is reshaping how we build and interact with the web. From autopilots to autonomous coding agents..."
        },

        {
            id: 1,
            src: "/hero-image.webp",
            title: "What does it take to become a web developer?",
            content: "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating a website for the internet..."
        },
    ]



    return (
        <GridBackground>
            <div>
                <Header />
                <HeroSection />
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

                    {
                        blogs.map(({ id, title, src, content }) => (
                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-x-8 gap-y-4 items-stretch w-full" key={id}>
                                <img src={`${src}`} alt="" className="w-full h-48 md:h-64 object-cover rounded-2xl" />
                                <div className="flex flex-col justify-between py-1">
                                    <div className="flex flex-col gap-3">
                                        <a href="#" className="text-primary sm:text-3xl text-xl leading-tight font-bold hover:underline">{title}</a>
                                        <p className="text-gray-300 line-clamp-3">{content}</p>
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
                        ))
                    }

                    <a href="/blogs" className="bg-primary px-8 py-2.5 text-slate-950 font-bold rounded-full mt-4 hover:bg-primary/80 transition-all hover:scale-105 shadow-lg shadow-primary/20">View more</a>
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