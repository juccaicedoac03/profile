"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import TranslateIcon from '@mui/icons-material/Translate';
import CheckIcon from '@mui/icons-material/Check';

const NavBar = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => setIsOpen(!isOpen);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50; // Cambia este valor según tus necesidades
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={ `${styles.navbar} ${isScrolled ? styles.navbarScroll : ''}` }>
            <div className={styles.navContent}>
                <div className={styles.navigation}>
                    <div>
                        <Link href="/" className={styles.link}>
                            LOGO
                        </Link>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link data-scroll="features" href="#features"  className={styles.link}>
                                    <button className='mainButton'>
                                        About
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link data-scroll="pricing" href="#pricing"  className={styles.link}>
                                    <button className='mainButton'>
                                        Contact
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link data-scroll="about" href="#about"  className={styles.link}>
                                    <button className='mainButton'>
                                        Login
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.rightMenu}>
                    <div className='dropdownContainer'>
                        <button className='mainButton'>
                            <TranslateIcon style={{fontSize:'20px'}}  />
                        </button>
                        <div className='dropdownMenu'>
                            <div className='dropdownSelect'>
                                <button className='mainButtonSelect'>
                                    English
                                    <CheckIcon style={{fontSize:'18px', margin:'0px 5px 0px 0px'}} />
                                </button>
                                <button className='mainButtonSelect'>
                                    Spanish
                                    <CheckIcon style={{fontSize:'18px', margin:'0px 5px 0px 0px'}} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <Link href="/login"  className={styles.link}>
                        <button className='mainButtonColor'>
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;