import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer>
                <nav>
                    <ul className="navbar-nav list-nostyle">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" href="#">Terms & conditions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Privacy Policy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    );
}

export default Footer;