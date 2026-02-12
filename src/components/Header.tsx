const Header = () => {
    return (
        <div>
            <header className="text-white  lg:px-20 px-10 py-5 flex items-center justify-between sticky top-0 w-full">
                <div className="text-lg font-bold">
                    <span className="text-primary">&lt;C/&gt;</span>PhilippeGael
                </div>
                <div className="text-md flex gap-6">
                    <a href="#">Home</a>
                    <a href="#">Blogs</a>
                    <input type="text" className="border rounded-2xl bg-white border-primary text-slate-900" placeholder="search..." />
                    <a href="#">Instagram</a>
                    <a href="#">Discord</a>
                    <a href="#">Github</a>
                </div>
            </header>
            <hr className="text-slate-600 w-4/5 mx-auto" />
        </div>
    )
}

export default Header