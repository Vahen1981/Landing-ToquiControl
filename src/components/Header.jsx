import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#" className="logo">
                    Toqui<span className="text-gradient">Control</span>
                </a>

                <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>GMC-001</a>
                    <a href="#app" onClick={() => setIsMobileMenuOpen(false)}>App</a>
                    <a href="#video" onClick={() => setIsMobileMenuOpen(false)}>Videos</a>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>

                    <div className="social-links-mobile">
                        <a href="#" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
                    </div>
                </nav>

                <div className="social-links">
                    <a href="#" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
};

export default Header;
