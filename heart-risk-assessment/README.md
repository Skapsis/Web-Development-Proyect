# 💙 CardioCheck - Evaluación de Riesgo Cardiovascular

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)

Una aplicación web moderna de una sola página (SPA) diseñada para la evaluación educativa del riesgo de enfermedad cardíaca basada en datos clínicos.

## 🎯 Características

### Funcionalidades Principales

- ✅ **Formulario Interactivo**: Recopilación de datos clínicos con controles intuitivos (sliders, selects, checkboxes)
- ✅ **Algoritmo de Evaluación**: Sistema de scoring basado en el dataset UCI Heart Disease
- ✅ **Resultados Visuales**: Barra de progreso circular animada que muestra el porcentaje de riesgo
- ✅ **Recomendaciones Personalizadas**: Sugerencias específicas según el nivel de riesgo (Bajo, Medio, Alto)
- ✅ **Validación en Tiempo Real**: Verificación de rangos válidos para todos los campos
- ✅ **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- ✅ **Disclaimer Educativo**: Aviso legal visible sobre el uso educativo de la herramienta

### Parámetros Clínicos Evaluados

1. **Edad** (1-120 años)
2. **Sexo biológico** (Masculino/Femenino)
3. **Tipo de dolor torácico** (Asintomático, Angina atípica, Dolor no anginoso, Angina típica)
4. **Presión arterial en reposo** (80-220 mm Hg)
5. **Colesterol sérico** (100-600 mg/dl)
6. **Azúcar en sangre en ayunas** (> 120 mg/dl)
7. **Frecuencia cardíaca máxima** (60-220 bpm)

## 🚀 Instalación y Ejecución

### Requisitos Previos

- Node.js 18.x o superior
- npm o yarn

### Pasos de Instalación

```bash
# 1. Navega a la carpeta del proyecto
cd heart-risk-assessment

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev

# 4. Abre tu navegador en http://localhost:3000
```

### Comandos Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run preview  # Previsualiza la build de producción
```

## 🎨 Stack Tecnológico

- **React 18.2**: Componentes funcionales con Hooks
- **Tailwind CSS 3.3**: Estilizado moderno y responsivo
- **Vite 5.0**: Build tool ultrarrápido
- **Lucide React**: Iconos elegantes y profesionales
- **PostCSS & Autoprefixer**: Procesamiento de CSS

## 📊 Algoritmo de Evaluación

El algoritmo utiliza un sistema de **scoring ponderado** basado en factores de riesgo cardiovascular reconocidos:

### Factores de Riesgo Considerados:

- **Edad**: Incremento progresivo del riesgo con la edad
- **Sexo**: Los hombres tienen mayor riesgo estadístico
- **Tipo de dolor torácico**: Angina típica indica mayor riesgo
- **Presión arterial elevada**: Hipertensión (>140 mm Hg)
- **Colesterol alto**: Valores elevados (>200 mg/dl)
- **Diabetes**: Glucosa en ayunas >120 mg/dl
- **Frecuencia cardíaca baja**: Indicador de posible disfunción

### Niveles de Riesgo:

| Porcentaje | Nivel | Código de Color |
|------------|-------|-----------------|
| 0-30% | Riesgo Bajo | 🟢 Verde (#28a745) |
| 30-60% | Riesgo Moderado | 🟡 Naranja (#ffc107) |
| 60-100% | Riesgo Alto | 🔴 Rojo (#dc3545) |

## 🏗️ Estructura del Proyecto

```
heart-risk-assessment/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Encabezado de la aplicación
│   │   ├── Disclaimer.jsx       # Modal de aviso legal
│   │   ├── HeartRiskForm.jsx    # Formulario de entrada de datos
│   │   └── ResultDisplay.jsx    # Visualización de resultados
│   ├── App.jsx                  # Componente principal
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Diseño UI/UX

### Paleta de Colores

```css
Clinical Blue:  #007bff  /* Color principal profesional */
Soft Green:     #28a745  /* Riesgo bajo / Positivo */
Warning Orange: #ffc107  /* Riesgo moderado */
Health Red:     #dc3545  /* Riesgo alto / Alerta */
```

### Principios de Diseño

- **Neumorfismo Sutil**: Sombras suaves para profundidad
- **Material Design**: Elevaciones y transiciones suaves
- **Espacio en Blanco**: Diseño limpio y no abrumador
- **Feedback Visual**: Estados hover, focus y validación clara
- **Accesibilidad**: Contraste adecuado y etiquetas descriptivas

## ⚠️ Aviso Legal Importante

**Esta herramienta es EXCLUSIVAMENTE para fines educativos y demostrativos.**

### Limitaciones:

- ❌ **NO sustituye** un diagnóstico médico profesional
- ❌ **NO debe usarse** para tomar decisiones de tratamiento
- ❌ Los resultados son **estimaciones aproximadas**
- ❌ **NO reemplaza** la consulta con un cardiólogo certificado

### Recomendaciones:

- ✅ Consulta siempre con un médico especialista
- ✅ Realiza chequeos médicos regulares
- ✅ Ante síntomas, busca atención médica inmediata

## 📚 Fuente de Datos

Basado en el **UCI Machine Learning Repository - Heart Disease Dataset**:
- Institución: Cleveland Clinic Foundation
- Atributos: 14 variables clínicas
- Casos: 303 pacientes
- Uso: Investigación y educación

## 👨‍💻 Desarrollo

### Mejoras Futuras Potenciales:

- [ ] Integración con modelos de ML reales (TensorFlow.js)
- [ ] Gráficos de tendencias y comparativas
- [ ] Exportación de resultados en PDF
- [ ] Multiidioma (i18n)
- [ ] Modo offline (PWA)
- [ ] Historial de evaluaciones

### Contribuciones

Este proyecto fue desarrollado como demostración técnica. Para contribuir:

1. Fork el repositorio
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 🔗 Enlaces Útiles

- [Documentación de React](https://react.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [UCI Heart Disease Dataset](https://archive.ics.uci.edu/ml/datasets/heart+disease)
- [Lucide Icons](https://lucide.dev/)

---

**Desarrollado con ❤️ para fines educativos | © 2026 CardioCheck**
