import React from 'react';

const Header = () => {
    const menuitems = <>
        <li>
            <a href='#Experience' className='py-1  hover:bg-gray focus:bg-gray rounded-lg'>
                Experience
            </a>
        </li>
        <li>
            <a href='#Projects' className='py-1  hover:bg-gray focus:bg-gray rounded-lg'>
                Projects
            </a>
        </li>
        <li>
            <a href='#Skill' className='py-1  hover:bg-gray focus:bg-gray rounded-lg'>
                Skill
            </a>
        </li>
        <li>
            <a href='#contact' className='py-1  hover:bg-gray focus:bg-gray rounded-lg'>
                Contact
            </a>
        </li>


    </>

    return (
        <div className="navbar glass mb-10 shadow-lg sticky top-0">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin">
                        {menuitems}
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl">Hasib's Portfolio</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin">
                    {menuitems}
                </ul>
            </div>
            <div className="navbar-end">

                <a href="https://drive.google.com/file/d/1OFdHjDoSFdrRjpgwGrocjvuW93j9NiEu/view?usp=share_link" target='_blank' rel='noreferrer' className='btn py-1  hover:bg-gray focus:bg-gray rounded-lg'>
                    Resume
                </a>

            </div>
        </div>
    );
};

export default Header;