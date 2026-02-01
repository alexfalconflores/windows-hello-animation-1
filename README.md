# Windows Hello Animation

<div align="center">
  <img src="public/1.jpg" alt="Screenshot 1" width="45%" />
  <img src="public/2.jpg" alt="Screenshot 2" width="45%" />
</div>

Una animación interactiva inspirada en la pantalla de bienvenida de Windows Hello, creada con JavaScript vanilla y animaciones SVG.

## 📋 Descripción

Este proyecto presenta una animación de una cara sonriente (similar al icono de Windows Hello) que realiza una secuencia animada de movimientos:
- Aparición gradual de la cara
- Transformación de la sonrisa (de boca cerrada a sonrisa abierta)
- Rotación de 900 grados de la cara completa
- Movimiento de los ojos hacia los lados
- Efecto de guiño (parpadeo)
- Desaparición gradual

La animación se repite en bucle infinito con un pequeño delay entre repeticiones.

## 🛠️ Tecnologías y Librerías

### Herramientas de Desarrollo
- **Vite (Rolldown-Vite 7.2.5)**: Bundler y servidor de desarrollo ultra-rápido que proporciona:
  - Hot Module Replacement (HMR) instantáneo
  - Servidor de desarrollo optimizado
  - Build de producción optimizado
  - Soporte nativo para ES modules

### Dependencias
- **GSAP 3.14.2** (GreenSock Animation Platform): Librería de animación profesional utilizada para:
  - Crear timeline de animaciones complejas y sincronizadas
  - Controlar opacidad, rotación y escala de elementos SVG
  - **MorphSVGPlugin**: Plugin especializado de GSAP para transformar (morphing) formas SVG de una a otra de manera fluida
    - Transforma la boca de cerrada (`#smile-down`) a abierta (`#smile-up`)
    - Anima los ojos entre diferentes formas y posiciones
  - Gestionar repeticiones y delays de la animación
  - Proporcionar diferentes tipos de easing (circ.out, circ.inOut, power2.out) para movimientos naturales

## 🎨 Características

- ✨ Animaciones SVG fluidas y profesionales
- 🔄 Loop infinito con delays configurables
- 🎭 Morphing de elementos SVG (transformación de formas)
- 🌀 Rotaciones y transformaciones complejas
- 📱 Diseño responsive (SVG escalable)
- 🎯 Fondo azul característico de Windows (#3e65ff)

## 🚀 Instalación y Uso

### Prerequisitos
- Node.js (versión 18 o superior recomendada)
- npm, yarn, pnpm o bun

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>

# Navegar al directorio
cd windows-hello-animation-1

# Instalar dependencias
npm install
# o
bun install
```

### Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 📂 Estructura del Proyecto

```
windows-hello-animation-1/
├── src/
│   ├── main.js              # Punto de entrada, renderiza el SVG
│   ├── hello-animation.js   # Lógica de animación con GSAP
│   ├── counter.js           # Componente auxiliar (no utilizado en animación)
│   └── style.css            # Estilos globales y del layout
├── index.html               # HTML principal
├── package.json             # Configuración y dependencias
└── bun.lock                 # Lockfile de dependencias
```

## 🎬 Detalles de la Animación

La animación se construye utilizando un timeline de GSAP con la siguiente secuencia:

1. **Fade In** (0.3s): Aparición gradual del contenedor
2. **Morphing de sonrisa** (0.3s): Transforma la boca de cerrada a abierta
3. **Rotación inicial** (0.3s): Gira -30° la cara
4. **Rotación principal** (0.9s): Gira 900° con easing circular
5. **Movimiento de ojos** (0.3s): Los ojos se mueven hacia los lados simultáneamente
6. **Guiño** (0.2s): El ojo derecho se comprime y se expande
7. **Fade Out** (0.6s con 1s de delay): Desaparición gradual
8. **Repetición**: Vuelve a empezar después de 0.3s

## 🔧 Configuración de GSAP

El proyecto utiliza el plugin `MorphSVGPlugin` de GSAP, que debe ser registrado antes de su uso:

```javascript
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);
```

**Nota**: MorphSVGPlugin es un plugin premium de GSAP. Para uso en producción, asegúrate de tener la licencia apropiada.

## 📝 Licencia

Este proyecto es privado según se especifica en `package.json`.

## 👨‍💻 Autor

Alex Falcon Flores

---

Desarrollado con ❤️ usando Vite y GSAP
