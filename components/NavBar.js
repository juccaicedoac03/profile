"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import TranslateIcon from '@mui/icons-material/Translate';

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
                <button className='mainButton'>
                    <TranslateIcon style={{fontSize:'20px'}}  />
                </button>
                <Link href="/login"  className={styles.link}>
                    <button className='mainButtonColor'>
                        Login
                    </button>
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;