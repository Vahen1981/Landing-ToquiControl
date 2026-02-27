import React from 'react';
import { Settings, Zap, Repeat, Shield, Sliders, Smartphone } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Settings className="text-cyan" size={32} />,
            title: "Totalmente Programable",
            desc: "Asigna cualquier mensaje MIDI (PC, CC, Note) a cualquiera de los switches con nuestra app dedicada."
        },
        {
            icon: <Zap className="text-magenta" size={32} />,
            title: "Latencia Cero",
            desc: "Respuesta instantánea para cambios de preset o activación de efectos en tiempo real."
        },
        {
            icon: <Shield className="text-cyan" size={32} />,
            title: "Construcción Robusta",
            desc: "Chasis metálico resistente diseñado para sobrevivir a los escenarios más exigentes."
        },
        {
            icon: <Repeat className="text-magenta" size={32} />,
            title: "Modo Looper",
            desc: "Layouts configurables ideales para controlar loopers de software o pedales avanzados."
        },
        {
            icon: <Sliders className="text-cyan" size={32} />,
            title: "Pantalla OLED",
            desc: "Visualiza claramente qué preset o banco está activo, incluso en escenarios oscuros."
        },
        {
            icon: <Smartphone className="text-magenta" size={32} />,
            title: "App Integrada",
            desc: "Configura todo desde tu dispositivo sin necesidad de menús complicados."
        }
    ];

    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Diseñado para el <span className="text-gradient">Músico Moderno</span></h2>
                    <p className="section-subtitle">El GMC-001 combina la tecnología más avanzada con la durabilidad de un pedal clásico.</p>
                </div>

                <div className="features-grid">
                    {features.map((feat, index) => (
                        <div className="feature-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="feature-icon">{feat.icon}</div>
                            <h3 className="feature-title">{feat.title}</h3>
                            <p className="feature-desc">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
