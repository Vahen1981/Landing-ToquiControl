import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import '../../styles/components/VideoSection.css';
import superfootApp from '../../assets/superfoot/superfoot-app.mp4';
import superfootBancos from '../../assets/superfoot/superfoot-bancos.mp4';
import sfposterApp from '../../assets/superfoot/webvideo-capture.png';
import sfPosterBanks from '../../assets/superfoot/banksvideo-capture.png';
import mainVideo from '../../assets/superfoot/superfoot-mainvideo.mp4';
import sfPosterMain from '../../assets/superfoot/main-capture.png';

const VideoSection = () => {
    const { t } = useLanguage();

    const merged = {
        main: {
            title: t('video.title'),
            titleAccent: t('video.title_accent'),
            subtitle: t('video.subtitle'),
            src: mainVideo,
            poster: sfPosterMain,
        },
        app: {
            title: t('video.app'),
            text: t('video.app_desc'),
            src: superfootApp,
            poster: sfposterApp,
        },
        banks: {
            title: t('video.banks'),
            titleAccent: t('video.banks_accent'),
            text: t('video.banks_desc'),
            src: superfootBancos,
            poster: sfPosterBanks,
        },
        // ampli: {
        //     title: t('video.demo_amplitube'),
        //     titleAccent: t('video.demo_amplitube_accent'),
        //     text: t('video.demo_amplitube_desc'),
        //     textBold: t('video.demo_amplitube_desc_bold'),
        //     src: null,
        //     poster: capture4,
        // }
    };

    return (
        <section id="video" className="video-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">{merged.main.title} <span className="text-gradient">{merged.main.titleAccent}</span></h2>
                    <p className="section-subtitle">{merged.main.subtitle}</p>
                </div>

                <div className="video-main animate-fade-in">
                    <div className="video-wrapper">
                        {merged.main.src ? (
                            <video 
                                width="100%" 
                                height="auto" 
                                controls 
                                loop 
                                muted 
                                poster={merged.main.poster}
                                className="local-video"
                            >
                                <source src={merged.main.src} type="video/mp4" />
                                {t('video.no_support')}
                            </video>
                        ) : (
                            <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.2)', minHeight: '300px' }}></div>
                        )}
                    </div>
                </div>

                <div className="video-secondary animate-fade-in" style={{ animationDelay: '0.3s', marginTop: '4rem' }}>
                    <div className="secondary-video-content video-reverse">
                        <div className="secondary-video-text">
                            <h3>{merged.app.title}</h3>
                            <p>{merged.app.text}</p>
                        </div>
                        <div className="video-wrapper">
                            {merged.app.src ? (
                                <video width="100%" height="auto" controls loop muted poster={merged.app.poster} className="local-video">
                                    <source src={merged.app.src} type="video/mp4" />
                                    {t('video.no_support')}
                                </video>
                            ) : (
                                <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.2)', minHeight: '200px' }}></div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="video-secondary animate-fade-in" style={{ animationDelay: '0.2s', marginTop: '4rem'}}>
                    <div className="secondary-video-content">
                        <div className="video-wrapper">
                            {merged.banks.src ? (
                                <video 
                                    width="100%" 
                                    height="auto" 
                                    controls 
                                    loop 
                                    muted 
                                    poster={merged.banks.poster}
                                    className="local-video"
                                >
                                    <source src={merged.banks.src} type="video/mp4" />
                                    {t('video.no_support')}
                                </video>
                            ) : (
                                <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.2)', minHeight: '200px' }}></div>
                            )}
                        </div>
                        <div className="secondary-video-text">
                            <h3>{merged.banks.title} <span className="text-gradient">{merged.banks.titleAccent}</span></h3>
                            <p>
                                {merged.banks.text.split('{bold}').map((part, i, arr) => (
                                    <React.Fragment key={i}>
                                        {part}
                                        {i < arr.length - 1 && <strong>{merged.banks.textBold}</strong>}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div className="video-secondary animate-fade-in" style={{ animationDelay: '0.4s', marginTop: '4rem' }}>
                    <div className="secondary-video-content">
                        <div className="video-wrapper">
                            {merged.ampli.src ? (
                                <video width="100%" height="auto" controls loop muted poster={merged.ampli.poster} className="local-video">
                                    <source src={merged.ampli.src} type="video/mp4" />
                                    {t('video.no_support')}
                                </video>
                            ) : (
                                <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.2)', minHeight: '200px' }}></div>
                            )}
                        </div>
                        <div className="secondary-video-text">
                            <h3>{merged.ampli.title} <span className="text-gradient">{merged.ampli.titleAccent}</span></h3>
                            <p>
                                {merged.ampli.text.split('{bold}').map((part, i, arr) => (
                                    <React.Fragment key={i}>
                                        {part}
                                        {i < arr.length - 1 && <strong>{merged.ampli.textBold}</strong>}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default VideoSection;
