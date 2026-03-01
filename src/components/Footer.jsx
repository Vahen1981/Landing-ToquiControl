import React from 'react';
import { Instagram, Facebook, Mail, MessageCircle } from 'lucide-react';

const Footer = ({ onOpenApp }) => {
    const handleAppClick = (e) => {
        e.preventDefault();
        onOpenApp();
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <img src="/logo.png" alt="ToquiControl Logo" />
                        </a>
                        <p className="footer-desc">Controladores MIDI diseñados y construidos en Chile para el mundo.</p>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading">Navegación</h4>
                        <ul>
                            <li><a href="#features">GMC-001</a></li>
                            <li><a href="#app-promo">App</a></li>
                            <li><a href="#gallery">Galería</a></li>
                            <li><a href="#video">Videos</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4 className="footer-heading">Síguenos</h4>
                        <div className="social-icons">
                            <a href="https://instagram.com/toquicontrol" className="social-link" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
                            <a href="https://facebook.com/toquicontrol" className="social-link" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
                            <a href="https://wa.me/56988170598" className="social-link" target="_blank" rel="noopener noreferrer"><MessageCircle size={24} /></a>
                            <a href="mailto:hola@toquicontrol.cl" className="social-link"><Mail size={24} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} ToquiControl. Todos los derechos reservados.</p>
                    <p className="footer-made-in">Diseñado en Chile 🇨🇱</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
