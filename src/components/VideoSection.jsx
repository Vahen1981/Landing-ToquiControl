import React from 'react';

const VideoSection = () => {
    return (
        <section id="video" className="video-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">El GMC-001 en <span className="text-gradient">Acción</span></h2>
                    <p className="section-subtitle">Mira cómo el GMC-001 revoluciona el setup de diferentes guitarristas.</p>
                </div>

                <div className="video-grid">
                    <div className="video-wrapper">
                        {/* Placeholder IFRAME para video de YouTube */}
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
