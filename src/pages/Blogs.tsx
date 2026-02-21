import { Header, Footer } from "@/components"
import { GridBackground } from "@/components/ui/Background"
const Blogs = () => {
    return (
        <div className="min-h-screen bg-[#0F172A] text-white">
            <Header />
            <GridBackground>
                <h2 className="text-2xl font-bold mt-30 -mb-20 px-5 sm:px-10 md:px-20 lg:px-32 flex items-center gap-2">
                    <span className="w-2 h-8 bg-primary rounded-full"></span>
                    Top Picks
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20 px-5 sm:px-10 md:px-20 lg:px-32 w-full mt-10">

                    {/* Main Featured Blog Card */}
                    <div className="relative group cursor-pointer bg-cover bg-center bg-no-repeat bg-[url('/hero-image.jpg')] h-[450px] rounded-2xl overflow-hidden shadow-2xl border-t border-x border-white/10">
                        {/* The Overlay: gradient shadow starting from bottom */}
                        <div className="absolute inset-0 bg-linear-to-t via-black/40 to-transparent flex flex-col justify-end p-6 transition-all duration-300 from-black">
                            <div className="flex items-center gap-3 text-xs font-medium text-primary mb-2">
                                <span>Dec 5th 2023</span>
                                <span className="w-1 h-1 bg-slate-900 rounded-full"></span>
                                <span>8 Min read</span>
                            </div>
                            <p className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                Building Modern Interfaces with React and Tailwind CSS
                            </p>
                        </div>
                    </div>

                    {/* Secondary Cards Column */}
                    <div className="flex flex-col gap-6">
                        <div className="relative flex-1 group cursor-pointer bg-cover bg-center bg-no-repeat bg-[url('/hero-image.jpg')] min-h-[210px] rounded-2xl overflow-hidden shadow-xl border-x border-t border-white/10">
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4">
                                <p className="text-white font-semibold line-clamp-2">Mastering Framer Motion for Smooth Animations</p>
                            </div>
                        </div>
                        <div className="relative flex-1 group cursor-pointer bg-cover bg-center bg-no-repeat bg-[url('/hero-image.jpg')] min-h-[210px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4">
                                <p className="text-white font-semibold line-clamp-2">Why Zustand is my Favorite State Manager</p>
                            </div>
                        </div>
                    </div>

                    {/* Trending Section */}
                    <div className="sticky top-32 md:col-span-2 lg:col-span-1 bg-gray-800/70 backdrop-blur-sm rounded-3xl p-6 border border-white/5 shadow-2xl h-fit">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-8 bg-primary rounded-full"></span>
                            Trending Now
                        </h2>
                        <div className="space-y-6 md:grid md:grid-cols-2 gap-3 md:gap-x-8 md:space-y-0 lg:block lg:space-y-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex gap-4 group cursor-pointer">
                                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border-t border-x border-white/10">
                                        <img src="/hero-image.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="trending" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-xs text-slate-400 mb-1">Mar 12, 2024</p>
                                        <p className="text-sm font-bold text-slate-200 group-hover:text-primary transition-colors line-clamp-2">
                                            Understanding the new Tailwind v4.0 features
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </GridBackground>


            <Footer />
        </div>
    )
}

export default Blogs