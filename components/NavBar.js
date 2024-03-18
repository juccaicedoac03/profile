"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li className={styles.dropdown}>
                    <button onClick={toggleDropdown}>
                        Dropdown
                    </button>
                    {isOpen && (
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <Link href="/link1">
                                    Link 1
                                </Link>
                            </li>
                            <li>
                                <Link href="/link2">
                                    Link 2
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default NavBar;