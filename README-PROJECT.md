# 🚀 Web Development Projects - Heart Disease Risk Assessment

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![Python](https://img.shields.io/badge/Python-3.13-3776AB?logo=python)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?logo=tailwind-css)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?logo=bootstrap)
![Jupyter](https://img.shields.io/badge/Jupyter-Notebook-orange?logo=jupyter)

Repositorio de proyectos completos para análisis y predicción de riesgo de enfermedades cardíacas, incluyendo análisis de Machine Learning y aplicación web interactiva.

## 📂 Estructura del Proyecto

```
Web-Development-Proyect/
├── heart-risk-assessment/          # Aplicación React para evaluación de riesgo
├── 11.2 Bootstrap Components/      # Proyecto web Bootstrap
├── ConexionData.ipynb             # Análisis ML con Python
├── heart-disease.csv              # Dataset UCI Heart Disease
└── README.md
```

## 🎯 Proyectos Incluidos

### 1. 💙 CardioCheck - Aplicación Web de Evaluación de Riesgo

**Ubicación:** `heart-risk-assessment/`

Aplicación web moderna (SPA) construida con React para evaluar el riesgo cardiovascular basada en datos clínicos.

#### Características:
- ✅ Formulario interactivo con 7 parámetros clínicos
- ✅ Algoritmo de scoring basado en UCI Heart Disease Dataset
- ✅ Visualización de resultados con progreso circular
- ✅ Recomendaciones personalizadas según nivel de riesgo
- ✅ Diseño HealthTech profesional con Tailwind CSS
- ✅ Completamente responsivo

#### Stack Tecnológico:
- React 18.2
- Tailwind CSS 3.3
- Vite 5.0
- Lucide React (iconos)

#### Ejecutar:
```bash
cd heart-risk-assessment
npm install
npm run dev
# Abrir http://localhost:3000
```

[Ver documentación completa →](heart-risk-assessment/README.md)

---

### 2. 📊 Análisis de Machine Learning - Jupyter Notebook

**Archivo:** `ConexionData.ipynb`

Análisis completo de datos de enfermedades cardíacas usando scikit-learn con visualizaciones profesionales.

#### Incluye:
- ✅ Exploración y limpieza de datos
- ✅ Modelo de Regresión Logística
- ✅ Validación cruzada (5-fold)
- ✅ Matriz de confusión
- ✅ Curva ROC (AUC = 0.87)
- ✅ Análisis de características importantes
- ✅ Métricas completas (Accuracy: 80.3%, Recall: 90.9%)

#### Visualizaciones:
- Matriz de confusión interactiva
- Curva ROC
- Distribución de probabilidades
- Gráfico de métricas de evaluación
- Importancia de características

#### Ejecutar:
```bash
jupyter notebook ConexionData.ipynb
```

---

### 3. 🌐 Proyecto Bootstrap - Seur Mudanzas

**Ubicación:** `11.2 Bootstrap Components/`

Sitio web profesional para servicio de mudanzas desarrollado con Bootstrap 5.3.

#### Características:
- ✅ Diseño responsive
- ✅ Componentes Bootstrap avanzados
- ✅ Navegación con dropdown
- ✅ Hero section atractivo
- ✅ Carrusel de testimonios
- ✅ Formularios validados

[Ver proyecto →](11.2%20Bootstrap%20Components/)

---

## 📊 Dataset

**UCI Heart Disease Dataset**
- Fuente: Cleveland Clinic Foundation
- Registros: 303 pacientes
- Atributos: 14 variables clínicas
- Target: Presencia/ausencia de enfermedad cardíaca

### Variables incluidas:
- `age`: Edad
- `sex`: Sexo (1=masculino, 0=femenino)
- `cp`: Tipo de dolor torácico (0-3)
- `trestbps`: Presión arterial en reposo (mm Hg)
- `chol`: Colesterol sérico (mg/dl)
- `fbs`: Azúcar en sangre en ayunas > 120 mg/dl
- `restecg`: Resultados ECG en reposo
- `thalach`: Frecuencia cardíaca máxima
- `exang`: Angina inducida por ejercicio
- `oldpeak`: Depresión ST inducida por ejercicio
- `slope`: Pendiente del segmento ST
- `ca`: Número de vasos principales (0-3)
- `thal`: Talasemia (1=normal, 2=defecto fijo, 3=defecto reversible)
- `target`: 1=enfermedad, 0=sin enfermedad

---

## 🚀 Inicio Rápido

### Requisitos Previos
- Node.js 18.x o superior
- Python 3.8+ con Jupyter
- Git

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/TU_USUARIO/web-development-proyect.git
cd web-development-proyect

# Instalar dependencias de la aplicación React
cd heart-risk-assessment
npm install

# Instalar dependencias Python (para Jupyter)
pip install pandas numpy matplotlib scikit-learn jupyter
```

### Ejecutar Proyectos

```bash
# Aplicación React
cd heart-risk-assessment
npm run dev

# Jupyter Notebook
jupyter notebook ConexionData.ipynb

# Bootstrap (abrir directamente en navegador)
# Abrir: 11.2 Bootstrap Components/index.html
```

---

## 📈 Resultados del Modelo ML

| Métrica | Valor |
|---------|-------|
| **Accuracy** | 80.33% |
| **Precision** | 76.92% |
| **Recall** | 90.91% |
| **F1-Score** | 83.33% |
| **AUC-ROC** | 86.90% |
| **CV Score** | 83.09% ± 4.09% |

### Características más importantes:
1. **cp** (Tipo de dolor torácico) - Coef: 0.938
2. **sex** (Sexo) - Coef: -0.714
3. **thal** (Talasemia) - Coef: -0.622
4. **oldpeak** (Depresión ST) - Coef: -0.595
5. **ca** (Vasos principales) - Coef: -0.559

---

## ⚠️ Disclaimer Importante

**Uso Educativo Únicamente**

Esta herramienta es EXCLUSIVAMENTE para fines educativos y de demostración técnica.

- ❌ NO sustituye un diagnóstico médico profesional
- ❌ NO debe usarse para tomar decisiones de tratamiento
- ❌ Los resultados son estimaciones aproximadas
- ✅ Consulta siempre con un médico especialista

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- React 18.2
- Tailwind CSS 3.3
- Bootstrap 5.3
- Lucide React
- Vite

### Backend/Análisis
- Python 3.13
- Pandas 2.3
- NumPy 2.2
- Matplotlib
- Scikit-learn 1.7
- Jupyter Notebook

### Herramientas
- Git & GitHub
- VS Code
- npm/Node.js

---

## 📸 Capturas de Pantalla

### Aplicación React - CardioCheck
![CardioCheck Interface](https://via.placeholder.com/800x400/007bff/ffffff?text=CardioCheck+Interface)

### Análisis ML - Jupyter Notebook
![ML Analysis Dashboard](https://via.placeholder.com/800x400/28a745/ffffff?text=ML+Analysis+Dashboard)

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 👨‍💻 Autor

Desarrollado como proyecto educativo de desarrollo web y ciencia de datos.

---

## 🔗 Enlaces Útiles

- [UCI Heart Disease Dataset](https://archive.ics.uci.edu/ml/datasets/heart+disease)
- [Documentación de React](https://react.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [Scikit-learn Documentation](https://scikit-learn.org/)
- [Bootstrap Documentation](https://getbootstrap.com/)

---

## 📞 Contacto

Si tienes preguntas o sugerencias, no dudes en abrir un issue en este repositorio.

---

**⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub ⭐**

---

© 2026 Web Development Projects - Heart Disease Risk Assessment
