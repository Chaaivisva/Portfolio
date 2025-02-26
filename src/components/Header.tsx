import { useState } from 'react';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavigation = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false); // Close menu after clicking
    };

    return (
        <header className='flex justify-between items-center py-4 border-b-2 border-gray-500 px-4 md:px-8 relative z-50 bg-white'>
            <div className='flex space-x-4 items-center'>
                <h1 className='text-3xl font-bold'>ChaaiNotes</h1>
                <h3 className='text-sm leading-tight'>
                    The Blog <br />of Chaaivisva
                </h3>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button 
                    onClick={() => setMenuOpen(!menuOpen)} 
                    className="text-2xl font-semibold focus:outline-none"
                >
                    {menuOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

            {/* Sidebar Menu */}
            <nav className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
                ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <button 
                    onClick={() => setMenuOpen(false)} 
                    className="absolute top-4 right-4 text-2xl"
                >
                    ✖
                </button>
                <ul className='flex flex-col items-center justify-center h-full space-y-6 text-lg font-semibold'>
                    <li>
                        <button onClick={() => handleNavigation("about")} className='w-full text-center'>
                            About
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNavigation("projects")} className='w-full text-center'>
                            Projects
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNavigation("skills")} className='w-full text-center'>
                            Skills
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Desktop Menu (Visible on md & lg screens) */}
            <nav className="hidden md:flex space-x-6">
                <a href='#about' className='text-lg font-semibold'>About</a>
                <a href='#projects' className='text-lg font-semibold'>Projects</a>
                <a href='#skills' className='text-lg font-semibold'>Skills</a>
            </nav>
        </header>
    );
};
