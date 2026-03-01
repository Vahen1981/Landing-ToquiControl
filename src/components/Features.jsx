import React from 'react';
import { Settings, Zap, Repeat, Shield, Sliders, Smartphone } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Settings className="text-primary" size={32} />,
            title: "Programación Vía Navegador",
            desc: "Configura cada switch directamente desde tu navegador. Sin drivers ni instalaciones adicionales, compatible con cualquier computador."
        },
        {
            icon: <Zap className="text-secondary" size={32} />,
            title: "Respuesta Sólida en Vivo",
            desc: "Envío preciso de mensajes MIDI con funcionamiento estable y confiable para cambios de preset y control en tiempo real."
        },
        {
            icon: <Repeat className="text-primary" size={32} />,
            title: "4 Modos de Uso",
            desc: "Program Change para presets, Control Change para parámetros individuales, Note Mode para enviar notas y acordes a synths, y Looper Mode combinando PC + CC simultáneamente."
        },
        {
            icon: <Shield className="text-secondary" size={32} />,
            title: "Controla Módulos o Apps",
            desc: "Compatible con procesadores y software como Axe-Fx, Line 6 Helix, Kemper, plugins VST y DAWs. Integra tu setup físico o digital con control MIDI preciso y confiable."
        },
        {
            icon: <Sliders className="text-primary" size={32} />,
            title: "Conectividad MIDI Completa",
            desc: "Salida MIDI DIN de 5 pines, USB-MIDI y Bluetooth MIDI integrados. Conéctalo a procesadores, interfaces, computadores o dispositivos móviles con total flexibilidad."
        },
        {
            icon: <Smartphone className="text-secondary" size={32} />,
            title: "Configuración desde el Mismo Dispositivo",
            desc: "Programa el pedal directamente desde el propio GMC-001, sin depender de aplicaciones externas"
        }
    ];

    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Diseñado para el <span className="text-gradient">Escenario Real</span></h2>
                    <p className="section-subtitle">El GMC-001 prioriza estabilidad, versatilidad MIDI y control profesional para músicos que necesitan confiar en su equipo.</p>
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