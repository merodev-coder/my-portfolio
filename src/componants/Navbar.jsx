import React, { useState } from "react";


constNavItems = () => {
    return (
        <ul className="nav-ul">
            { }
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 hover:text-white font-bold text-xl transition-colors">
                        Ammar
                    </a>

                    <button onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex">
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} className="w-6 h-6" />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
