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
                
            </div>



         
            <h3 className='text-sm leading-tight'>
                    The Blog <br />of Chaaivisva
                </h3>
            {/* Desktop Menu (Visible on md & lg screens) */}
      
        </header>
    );
};
