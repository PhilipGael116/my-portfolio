import { User, Computer, EditIcon, MessageCircleCodeIcon, LayoutDashboard } from "lucide-react"

const Home = () => {
    return (
        <div className="lg:px-20 px-10 py-20 min-h-screen">
            <div className="flex items-start justify-between">
                <div className="flex flex-col gap-3 text-white bg-gray-800 p-5 rounded-2xl w-fit">
                    <a href=""><LayoutDashboard /></a>
                    <a href=""><User /></a>
                    <a href=""><Computer /></a>
                    <a href=""><EditIcon /></a>
                    <a href=""><MessageCircleCodeIcon /></a>
                </div>

                <div className="border-2 border-x-primary rounded-tl-[80px] rounded-br-[80px] flex flex-col">
                    <img src="./hero-image.png" alt="my picture" className="border-primary rounded-[50%]" />
                </div>
            </div>
        </div>
    )
}

export default Home