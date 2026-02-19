import { Header, Footer } from "@/components"

const Blogs = () => {
    return (
        <div>
            <Header />
            <div className="text-white grid grid-cols-3 gap-5 py-15 px-5 sm:px-20 md:px-50 w-full mt-20">
                <div className="bg-cover bg-no-repeat bg-[url('/hero-image.jpg')] h-90 w-70 shadow-[10px_10px_15px_rgba(0,0,0,0.3)]">
                    <p className="text-slate-900">Sample article title</p>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="bg-cover bg-no-repeat bg-[url('/hero-image.jpg')] h-90 w-70 flex-1 shadow-[10px_10px_15px_rgba(0,0,0,0.3)]">

                    </div>
                    <div className="bg-cover bg-no-repeat bg-[url('/hero-image.jpg')] h-90 w-70 flex-1 shadow-[10px_10px_15px_rgba(0,0,0,0.3)]">

                    </div>
                </div>

                {/* Trending Part */}
                <div className="text-white bg-gray-800/70 shadow-[10px_10px_15px_rgba(0,0,0,0.3)]">
                    <div>
                        <img src="/hero-image.jpg" alt="image" />
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3">
                                <p>23 Dec 2023  3 Min read</p>
                            </div>
                            <p className="text-xl font-bold">Sample article title</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Blogs