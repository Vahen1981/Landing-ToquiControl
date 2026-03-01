import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-container">
                    <div className="contact-content">
                        <h2 className="section-title">¿Listo para tomar el <span className="text-gradient">Control</span>?</h2>
                        <p className="contact-text">
                            Escríbenos y responderemos todas tus dudas sobre el GMC-001.
                        </p>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" id="name" placeholder="Tu nombre" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="tu@email.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mensaje</label>
                                <textarea id="message" rows="4" placeholder="¿En qué te podemos ayudar?" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full">Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
