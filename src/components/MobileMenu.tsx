import { motion, AnimatePresence } from "motion/react";
import { User, LayoutDashboard, Zap, Briefcase, Mail } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    const menuItems = [
        { id: "#home", icon: <LayoutDashboard size={22} />, title: "Home" },
        { id: "#about", icon: <User size={22} />, title: "About" },
        { id: "#my-strategy", icon: <Zap size={22} />, title: "Strategy" },
        { id: "#my-works", icon: <Briefcase size={22} />, title: "Works" },
        { id: "#contact", icon: <Mail size={22} />, title: "Contact" },
    ];

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-150 sm:hidden"
                    />

                    {/* Menu Content */}
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed top-24 right-5 left-5 bg-[#0F172A]/95 border border-white/10 rounded-3xl z-200 p-6 shadow-2xl backdrop-blur-xl sm:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {/* Text Links */}
                            <div className="flex justify-around items-center px-4">
                                <a
                                    href="/"
                                    onClick={onClose}
                                    className="text-lg font-bold text-white hover:text-primary transition-colors px-6 py-2 rounded-xl hover:bg-white/5"
                                >
                                    Home
                                </a>
                                <div className="w-px h-6 bg-white/10" />
                                <a
                                    href="/blogs"
                                    onClick={onClose}
                                    className="text-lg font-bold text-white hover:text-primary transition-colors px-6 py-2 rounded-xl hover:bg-white/5"
                                >
                                    Blogs
                                </a>
                            </div>

                            <div className="h-px bg-white/5" />

                            {/* Icon Navigation (from HeroSection) */}
                            <div className="flex justify-between items-center px-1">
                                {menuItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={item.id}
                                        onClick={onClose}
                                        title={item.title}
                                        className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 text-white/70 hover:bg-primary/20 hover:border-primary/50 hover:text-primary hover:scale-110 active:scale-95 transition-all duration-300"
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Close Indicator */}
                        <div className="mt-6 flex justify-center">
                            <button
                                onClick={onClose}
                                className="w-10 h-1bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
