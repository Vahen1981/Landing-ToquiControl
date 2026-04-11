import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import capture2 from '../assets/capture2.png';
import capture5 from '../assets/capture5.png';
import capture3 from '../assets/capture3.png';
import capture4 from '../assets/capture4.png';
import demo1 from '../assets/demo1.mp4';
import NotesMode from '../assets/NotesMode.mp4';
import Ensamblaje from '../assets/Ensamblaje.mp4';
import demoAmplitube from '../assets/demo-amplitube.mp4';

const VideoSection = ({ emptyMedia = false }) => {
    const { t } = useLanguage();

    return (
        <section id="video" className="video-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">{t('video.title')} <span className="text-gradient">{t('video.title_accent')}</span></h2>
                    <p className="section-subtitle">{t('video.subtitle')}</p>
                </div>

                <div className="video-main animate-fade-in">
                    <div className="video-wrapper">
                        {!emptyMedia ? (
                            <video 
                                width="100%" 
                                height="auto" 
                                controls 
                                loop 
                                muted 
                                poster={capture2}
                                className="local-video"
                            >
                                <source src={demo1} type="video/mp4" />
                                {t('video.no_support')}
                            </video>
                        ) : (
                            <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.2)', minHeight: '300px' }}></div>
                        )}
                    </div>
                </div>

                <div className="video-secondary animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="secondary-video-content">
                        <div className="video-wrapper">
                            {!emptyMedia ? (
                                <video 
                                    width="100%" 
                                    height="auto" 
                                    controls 
                                    loop 
                                    muted 
                                    poster={capture5}
                                    className="local-video"
                                >
                                    <source src={NotesMode} type="video/mp4" />
                                    {t('video.no_support')}
                                </video>
                            ) : (
                                <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.2)', minHeight: '200px' }}></div>
                            )}
                        </div>
                        <div className="secondary-video-text">
                            <h3>{t('video.mode_notes')} <span className="text-gradient">{t('video.mode_notes_accent')}</span></h3>
                            <p>
                                {t('video.mode_notes_desc').split('{bold}').map((part, i, arr) => (
                                    <React.Fragment key={i}>
                                        {part}
                                        {i < arr.length - 1 && <strong>{t('video.mode_notes_desc_bold')}</strong>}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="video-secondary animate-fade-in" style={{ animationDelay: '0.3s', marginTop: '4rem' }}>
                    <div className="secondary-video-content video-reverse">
                        <div className="secondary-video-text">
                            <h3>{t('video.assembly')}</h3>
                            <p>
                                {t('video.assembly_desc')}
                            </p>
                        </div>
                        <div className="video-wrapper">
                            {!emptyMedia ? (
                                <video 
                                    width="100%" 
                                    height="auto" 
                                    controls 
                                    loop 
                                    muted 
                                    poster={capture3}
                                    className="local-video"
                                >
                                    <source src={Ensamblaje} type="video/mp4" />
                                    {t('video.no_support')}
                                </video>
                            ) : (
                                <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.2)', minHeight: '200px' }}></div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="video-secondary animate-fade-in" style={{ animationDelay: '0.4s', marginTop: '4rem' }}>
                    <div className="secondary-video-content">
                        <div className="video-wrapper">
                            {!emptyMedia ? (
                                <video 
                                    width="100%" 
                                    height="auto" 
                                    controls 
                                    loop 
                                    muted 
                                    poster={capture4}
                                    className="local-video"
                                >
                                    <source src={demoAmplitube} type="video/mp4" />
                                    {t('video.no_support')}
                                </video>
                            ) : (
                                <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.2)', minHeight: '200px' }}></div>
                            )}
                        </div>
                        <div className="secondary-video-text">
                            <h3>{t('video.demo_amplitube')} <span className="text-gradient">{t('video.demo_amplitube_accent')}</span></h3>
                            <p>
                                {t('video.demo_amplitube_desc').split('{bold}').map((part, i, arr) => (
                                    <React.Fragment key={i}>
                                        {part}
                                        {i < arr.length - 1 && <strong>{t('video.demo_amplitube_desc_bold')}</strong>}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
