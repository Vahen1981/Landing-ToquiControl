# ToquiControl - Domina tu Sonido 🎸

[![Website](https://img.shields.io/badge/Web-ToquiControl-goldenrod)](https://vahen1981.github.io/Landing-ToquiControl/)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

**ToquiControl** es una marca de controladores MIDI profesionales diseñados y construidos en Chile para músicos que exigen precisión, durabilidad y facilidad de configuración en el escenario.

## 🚀 Productos Destacados

### [ToquiControl GMC-001](https://vahen1981.github.io/Landing-ToquiControl/gmc-001)
Controlador MIDI fabricado artesanalmente en madera. Prioriza la estabilidad y la respuesta sólida en vivo.
- **Configuración Web**: No requiere drivers ni software especializado. Se programa directamente desde el navegador.
- **Modos de Uso**: PC (Presets), CC (Parámetros), Note Mode y Looper Mode.
- **Conectividad Total**: DIN 5 pines, USB-MIDI y Bluetooth MIDI integrado.

### [SuperFoot MIDI](https://vahen1981.github.io/Landing-ToquiControl/superfoot-midi)
La evolución de la línea ToquiControl, diseñada para setups complejos que requieren control absoluto.
- **10 Switches**: Configuración total desde presets clásicos hasta selección de escenas complejas (Fractal, Helix, etc.).
- **Doble Pedal de Expresión**: Integración completa para un control dinámico superior.
- **Web App Programmer**: Aplicación dedicada para personalizar cada comando CC y PC.

---

## 🛠 Estructura del Proyecto

El repositorio está organizado como un hub central para la marca, incluyendo las landing pages y las aplicaciones de configuración:

```text
├── public/
│   ├── gmc-app/            # Aplicación web de programación para GMC-001
│   └── superfoot-app/      # Aplicación web de programación para SuperFoot MIDI
├── src/
│   ├── assets/             # Recursos multimedia (imágenes, videos, logos)
│   ├── components/         # Componentes React reutilizables (Hero, Gallery, AppPromo, etc.)
│   ├── i18n/               # Sistema de traducciones (Español / Inglés)
│   └── pages/              # Landing pages principales (Home, GMC-001, SuperFoot MIDI)
└── vite.config.js          # Configuración de compilación y despliegue
```

## 💻 Desarrollo Local

Este proyecto utiliza **React + Vite** para la landing page principal y **Vanilla JavaScript** para las aplicaciones de programación internas.

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Construye el proyecto para producción:
   ```bash
   npm run build
   ```

## 🌐 Despliegue

El sitio está configurado para desplegarse automáticamente en **GitHub Pages**. Asegúrate de mantener la ruta base `/Landing-ToquiControl/` en las configuraciones de Vite y del Router.

---

Desarrollado con ❤️ en Chile por **ToquiControl**.
