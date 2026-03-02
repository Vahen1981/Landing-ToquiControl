import React from 'react';

const VideoSection = () => {
    return (
        <section id="video" className="video-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">El GMC-001 en <span className="text-gradient">Acción</span></h2>
                    <p className="section-subtitle">Mira cómo el GMC-001 funciona para un guitarrista real</p>
                </div>

                <div className="video-main animate-fade-in">
                    <div className="video-wrapper">
                        <video 
                            width="100%" 
                            height="auto" 
                            controls 
                            loop 
                            muted 
                            poster="/capture2.png"
                            className="local-video"
                        >
                            <source src="/demo1.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                </div>

                <div className="video-secondary animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="secondary-video-content">
                        <div className="video-wrapper">
                            <video 
                                width="100%" 
                                height="auto" 
                                controls 
                                loop 
                                muted 
                                poster="/capture5.png"
                                className="local-video"
                            >
                                <source src="/NotesMode.mp4" type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video>
                        </div>
                        <div className="secondary-video-text">
                            <h3>Modo <span className="text-gradient">Notas</span></h3>
                            <p>
                                En este modo es posible lanzar acordes o notas sueltas de forma instantánea. 
                                Lo más potente es que dichas notas son <strong>completamente programables </strong> 
                                a través de nuestra aplicación web, permitiéndote adaptar el controlador 
                                a tu flujo de trabajo creativo.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="video-secondary animate-fade-in" style={{ animationDelay: '0.3s', marginTop: '4rem' }}>
                    <div className="secondary-video-content video-reverse">
                        <div className="secondary-video-text">
                            <h3>Ensamblaje</h3>
                            <p>
                                Aquí puedes ver el proceso de ensamble del circuito. 
                                Cada controlador es fabricado con dedicación y precisión profesional, 
                                asegurando la máxima calidad y durabilidad en cada unidad que llega 
                                a tus manos.
                            </p>
                        </div>
                        <div className="video-wrapper">
                            <video 
                                width="100%" 
                                height="auto" 
                                controls 
                                loop 
                                muted 
                                poster="/capture3.png"
                                className="local-video"
                            >
                                <source src="/Ensamblaje.mp4" type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video>
                        </div>
                    </div>
                </div>
                <div className="video-secondary animate-fade-in" style={{ animationDelay: '0.4s', marginTop: '4rem' }}>
                    <div className="secondary-video-content">
                        <div className="video-wrapper">
                            <video 
                                width="100%" 
                                height="auto" 
                                controls 
                                loop 
                                muted 
                                poster="/capture4.png"
                                className="local-video"
                            >
                                <source src="/demo-amplitube.mp4" type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video>
                        </div>
                        <div className="secondary-video-text">
                            <h3>Demo en <span className="text-gradient">Amplitube</span></h3>
                            <p>
                                Descubre cómo el GMC-001 se integra a la perfección con el famoso software 
                                <strong> Amplitube</strong>. En este video puedes ver el proceso de configuración 
                                y uso, demostrando la versatilidad de nuestro controlador con las mejores 
                                herramientas del mercado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;