import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            Toqui<span className="text-gradient">Control</span>
                        </a>
                        <p className="footer-desc">Controladores MIDI de calidad premium diseñados y construidos en Chile para el mundo.</p>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading">Navegación</h4>
                        <ul>
                            <li><a href="#features">GMC-001</a></li>
                            <li><a href="#app">App Integrada</a></li>
                            <li><a href="#video">Videos</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4 className="footer-heading">Síguenos</h4>
                        <div className="social-icons">
                            <a href="#" className="social-link"><Instagram size={24} /></a>
                            <a href="#" className="social-link"><Facebook size={24} /></a>
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
