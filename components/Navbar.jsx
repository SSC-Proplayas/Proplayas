
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#00A1FF');
    const [linkColor, setLinkColor] = useState('#1f2937');

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div
            style={{ backgroundColor: `${navBg}` }}
            className={
                shadow
                    ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
                    : 'fixed w-full h-20 z-[100]'
            }
        >
            
            <div className='relative flex justify-between items-center w-full h-full px-3 2xl:px-16'>
                
                    <div className="cursor-pointer flex items-center">
                        <Image
                            src="/../public/assets/logo.png"
                            alt='/'
                            width='70'
                            height='10'
                            className='cursor-pointer'
                        />
                        <h1 class="text-xl text-neutral-200 dark:text-neutral-200 font-bold ml-5" href="#">
                            PROPLAYAS
                        </h1>
                    </div>
              
               
                <div>
                    <ul className='hidden md:flex text-white font-semibold'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/' >Inicio</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/blog'>Blog</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/nodos'>Nodos</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/webinar'>Webinar</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/libros'>Libros</Link>
                        </li>
                    </ul>
                    {/* Hamburger Icon */}
                    <div
                        style={{ color: `${linkColor}` }}
                        onClick={handleNav}
                        className='md:hidden'
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div
                className={
                    nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
                }
            >
                {/* Side Drawer Menu */}
                <div
                    className={
                        nav
                            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/'>

                                <Image
                                    src="/../public/assets/logo.png"
                                    width='87'
                                    height='35'
                                    alt='/'
                                />

                            </Link>
                            <div
                                onClick={handleNav}
                                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>
                            
                            </p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Inicio
                                </li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Blog
                                </li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Nodos
                                </li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Webinar
                                </li>
                            </Link>
                            <Link href='/resume'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Libros
                                </li>
                            </Link>
                            
                        </ul>
                        
                      
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Navbar;
