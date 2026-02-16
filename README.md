# 🚚 Seur - Múdate con Alegría

![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?logo=bootstrap)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Un sitio web moderno y responsive para un servicio profesional de mudanzas y envíos, desarrollado con las últimas tecnologías web.

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#acerca-del-proyecto)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)
- [Componentes Bootstrap](#componentes-bootstrap)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Contribuir](#contribuir)
- [Autor](#autor)
- [Licencia](#licencia)

## 🎯 Acerca del Proyecto

**Seur** es una plataforma web diseñada para ofrecer servicios de mudanzas profesionales. El proyecto destaca por:

- **Servicios Integrales**: Mudanzas locales y nacionales con personal capacitado
- **Transparencia**: Precios claros y sin tarifas ocultas
- **Profesionalismo**: Equipo especializado en el manejo cuidadoso de pertenencias
- **Experiencia Personalizada**: Atención al cliente dedicada y soluciones a medida

Este proyecto fue desarrollado como parte de un curso de desarrollo web, implementando las mejores prácticas de HTML5, CSS3, Bootstrap 5.3 y JavaScript.

## ✨ Características

### Funcionalidades Principales

- ✅ **Diseño Responsive**: Totalmente adaptable a móviles, tablets y desktop
- ✅ **Tema Oscuro**: Soporte nativo para modo oscuro/claro
- ✅ **Navegación Intuitiva**: Menú de navegación con dropdown y búsqueda por código postal
- ✅ **Sección Hero**: Presentación atractiva con imagen destacada
- ✅ **Características del Servicio**: Tres pilares principales (Profesional, Nacional, Personal)
- ✅ **Carrusel de Testimonios**: Galería interactiva de imágenes
- ✅ **Validación de Formularios**: Verificación de códigos postales
- ✅ **Animaciones Suaves**: Efectos de entrada y transiciones
- ✅ **SEO Optimizado**: Meta tags completos para mejor posicionamiento
- ✅ **Accesibilidad Mejorada**: Atributos ARIA y textos alternativos

### Características Técnicas

- **HTML5 Semántico**: Estructura correcta y accesible
- **CSS3 Moderno**: Variables CSS, Flexbox, Grid
- **JavaScript Vanilla**: Sin dependencias adicionales
- **Bootstrap 5.3**: Framework CSS responsive
- **Optimización de Imágenes**: Lazy loading implementado
- **Cross-browser Compatible**: Funciona en todos los navegadores modernos

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| HTML5 | - | Estructura y contenido |
| CSS3 | - | Estilos y diseño visual |
| JavaScript | ES6+ | Interactividad y funcionalidad |
| Bootstrap | 5.3.0 | Framework CSS responsive |
| Bootstrap Icons | - | Iconografía SVG |

## 📁 Estructura del Proyecto

```
Web-Development-Proyect/
├── README.md                          # Documentación principal
├── LICENSE                            # Licencia MIT
├── CONTRIBUTING.md                    # Guía de contribución
├── .editorconfig                      # Configuración del editor
├── .gitignore                         # Archivos ignorados por Git
└── 11.2 Bootstrap Components/
    ├── index.html                     # Página principal
    ├── css/
    │   └── styles.css                 # Estilos personalizados
    ├── js/
    │   └── script.js                  # JavaScript funcional
    └── assets/
        ├── images/
        │   ├── moving-van.jpg         # Imagen hero
        │   ├── couple.jpg             # Testimonio 1
        │   ├── dog.jpg                # Testimonio 2
        │   └── family.jpg             # Testimonio 3
        └── icons/
            ├── box-seam.svg           # Logo/Icono principal
            ├── briefcase.svg          # Icono profesional
            ├── bus-front.svg          # Icono nacional
            ├── chat-square-heart.svg  # Icono personal
            ├── chevron-right.svg      # Icono flecha
            └── MODALAB_Iconos-14.png  # Favicon
```

## 🚀 Instalación

### Prerrequisitos

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Servidor local opcional (Live Server, Python SimpleHTTPServer, etc.)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Skapsis/Web-Development-Proyect.git
   ```

2. **Navegar al directorio del proyecto**
   ```bash
   cd Web-Development-Proyect/11.2\ Bootstrap\ Components
   ```

3. **Abrir el proyecto**
   - Opción 1: Abrir `index.html` directamente en tu navegador
   - Opción 2: Usar un servidor local (recomendado)
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js (npx)
     npx http-server
     ```

4. **Acceder al sitio**
   - Si abriste directamente: Ya está listo
   - Si usaste servidor local: Visita `http://localhost:8000`

## 💻 Uso

### Navegación del Sitio

- **Inicio**: Página principal con información general
- **Más**: Enlaces adicionales (en desarrollo)
- **Servicios**: Dropdown con opciones de servicios
  - Mudanzas
  - Otros servicios
  - Consulta gratuita

### Búsqueda por Código Postal

1. Ingresa tu código postal (5 dígitos) en el campo de búsqueda
2. Haz clic en "Check"
3. El sistema validará el formato y mostrará disponibilidad

### Solicitar Presupuesto

- Haz clic en cualquier botón "Solicita un presupuesto"
- El formulario de contacto se activará (funcionalidad en desarrollo)

## 🎨 Componentes Bootstrap

El proyecto utiliza los siguientes componentes de Bootstrap 5.3:

| Componente | Ubicación | Descripción |
|------------|-----------|-------------|
| **Navbar** | Header | Navegación responsive con dropdown y búsqueda |
| **Collapse** | Navbar | Menú colapsable para móviles |
| **Dropdown** | Servicios | Menú desplegable de servicios |
| **Container** | Global | Contenedores responsive |
| **Grid System** | Características | Sistema de columnas responsive |
| **Cards** | Características | Tarjetas informativas |
| **Carousel** | Testimonios | Carrusel de imágenes automático |
| **Buttons** | CTA | Botones estilizados (primary, outline) |
| **Forms** | Búsqueda | Formulario de búsqueda inline |
| **Footer** | Pie de página | Footer responsive con iconos sociales |
| **Icons** | Global | Bootstrap Icons SVG |
| **Dark Mode** | Global | Tema oscuro/claro con `data-bs-theme` |

## 📸 Capturas de Pantalla

### Vista Desktop
![Desktop View](docs/screenshots/desktop-view.png)
*Página principal en vista desktop con tema oscuro*

### Vista Móvil
![Mobile View](docs/screenshots/mobile-view.png)
*Navegación responsive en dispositivos móviles*

### Características
![Features](docs/screenshots/features-section.png)
*Sección de características con iconos personalizados*

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor, lee [CONTRIBUTING.md](CONTRIBUTING.md) para conocer el proceso de contribución.

### Proceso Rápido

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: Amazing Feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👨‍💻 Autor

**Skapsis**

- GitHub: [@Skapsis](https://github.com/Skapsis)
- Proyecto: [Web Development Proyect](https://github.com/Skapsis/Web-Development-Proyect)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">

**Desarrollado con ❤️ como parte del aprendizaje de desarrollo web**

[⬆ Volver arriba](#-seur---múdate-con-alegría)

</div>
