# Guía de Contribución

¡Gracias por tu interés en contribuir al proyecto Seur! Este documento proporciona directrices para contribuir al proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo Puedo Contribuir?](#cómo-puedo-contribuir)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Mejoras](#sugerir-mejoras)
- [Pull Requests](#pull-requests)
- [Estándares de Código](#estándares-de-código)
- [Proceso de Revisión](#proceso-de-revisión)

## 📜 Código de Conducta

### Nuestro Compromiso

Este proyecto y todos sus participantes están gobernados por un código de conducta. Al participar, se espera que respetes este código.

### Comportamiento Esperado

- ✅ Usa un lenguaje acogedor e inclusivo
- ✅ Respeta los diferentes puntos de vista y experiencias
- ✅ Acepta críticas constructivas con gracia
- ✅ Enfócate en lo que es mejor para la comunidad
- ✅ Muestra empatía hacia otros miembros

### Comportamiento Inaceptable

- ❌ Uso de lenguaje o imágenes sexualizadas
- ❌ Trolling, comentarios insultantes o ataques personales
- ❌ Acoso público o privado
- ❌ Publicar información privada de otros sin permiso
- ❌ Otra conducta que razonablemente podría considerarse inapropiada

## 🤝 ¿Cómo Puedo Contribuir?

### Reportar Bugs

Los bugs se rastrean como issues de GitHub. Antes de crear un issue, verifica que no exista uno similar.

#### Cómo Reportar un Bug

1. **Usa un título claro y descriptivo** para identificar el problema
2. **Describe los pasos exactos para reproducir el problema** con el mayor detalle posible
3. **Proporciona ejemplos específicos** cuando sea posible
4. **Describe el comportamiento observado** y el comportamiento esperado
5. **Incluye capturas de pantalla** si es relevante
6. **Especifica tu entorno**:
   - Sistema operativo y versión
   - Navegador y versión
   - Resolución de pantalla

#### Plantilla para Reportar Bugs

```markdown
**Descripción del Bug**
Una descripción clara y concisa del bug.

**Pasos para Reproducir**
1. Ve a '...'
2. Haz clic en '...'
3. Desplázate hacia '...'
4. Observa el error

**Comportamiento Esperado**
Una descripción clara de lo que esperabas que sucediera.

**Comportamiento Actual**
Lo que realmente sucede.

**Capturas de Pantalla**
Si aplica, añade capturas de pantalla.

**Entorno**
- OS: [ej. Windows 11]
- Navegador: [ej. Chrome 120]
- Resolución: [ej. 1920x1080]

**Contexto Adicional**
Cualquier otra información relevante.
```

### Sugerir Mejoras

Las sugerencias de mejoras también se rastrean como issues.

#### Cómo Sugerir una Mejora

1. **Usa un título claro y descriptivo**
2. **Proporciona una descripción detallada** de la mejora sugerida
3. **Explica por qué esta mejora sería útil** para la mayoría de los usuarios
4. **Lista ejemplos de cómo funcionaría** la mejora
5. **Incluye mockups o ejemplos visuales** si es posible

#### Plantilla para Sugerir Mejoras

```markdown
**¿Tu solicitud de característica está relacionada con un problema?**
Una descripción clara del problema. Ej. Me frustra que [...]

**Describe la solución que te gustaría**
Una descripción clara y concisa de lo que quieres que suceda.

**Describe alternativas que hayas considerado**
Una descripción clara y concisa de las soluciones alternativas.

**Contexto Adicional**
Añade cualquier otro contexto o capturas de pantalla sobre la solicitud.
```

## 🔧 Pull Requests

### Proceso de Pull Request

1. **Fork el repositorio** y crea tu rama desde `main`
2. **Nombra tu rama** descriptivamente:
   - `feature/nueva-caracteristica` para nuevas características
   - `bugfix/correccion-error` para correcciones
   - `docs/actualizacion-documentacion` para documentación
   - `refactor/mejora-codigo` para refactorización

3. **Realiza tus cambios** siguiendo los estándares de código
4. **Prueba tus cambios** en diferentes navegadores
5. **Actualiza la documentación** si es necesario
6. **Crea el Pull Request** con una descripción clara

### Plantilla de Pull Request

```markdown
## Descripción
Breve descripción de los cambios realizados.

## Tipo de Cambio
- [ ] Bug fix (corrección que soluciona un issue)
- [ ] Nueva característica (cambio que añade funcionalidad)
- [ ] Breaking change (cambio que afecta funcionalidad existente)
- [ ] Documentación

## ¿Cómo Se Ha Probado?
Describe las pruebas realizadas.

## Checklist
- [ ] Mi código sigue los estándares del proyecto
- [ ] He realizado una auto-revisión de mi código
- [ ] He comentado mi código, especialmente en áreas difíciles
- [ ] He actualizado la documentación correspondiente
- [ ] Mis cambios no generan nuevas advertencias
- [ ] He probado en múltiples navegadores
- [ ] He verificado la responsividad
```

## 📝 Estándares de Código

### HTML

```html
<!-- ✅ CORRECTO -->
<section class="hero-section">
  <h1 class="hero-title">Título Principal</h1>
  <p class="hero-description">Descripción del contenido.</p>
</section>

<!-- ❌ INCORRECTO -->
<div>
<h1>Título Principal</h1><p>Descripción del contenido.</p>
</div>
```

**Reglas HTML:**
- Usa HTML5 semántico (`<header>`, `<nav>`, `<main>`, `<footer>`, etc.)
- Indentación de 2 espacios
- Usa comillas dobles para atributos
- Incluye atributos `alt` en imágenes
- Añade atributos ARIA para accesibilidad
- Cierra todas las etiquetas correctamente

### CSS

```css
/* ✅ CORRECTO */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

/* ❌ INCORRECTO */
.hero-section{display:flex;flex-direction:column;align-items:center;padding:2rem}
```

**Reglas CSS:**
- Usa nombres de clase descriptivos en kebab-case
- Indentación de 2 espacios
- Una declaración por línea
- Espacio después de los dos puntos
- Punto y coma al final de cada declaración
- Organiza propiedades alfabéticamente
- Usa variables CSS para valores repetidos
- Comenta secciones importantes

### JavaScript

```javascript
// ✅ CORRECTO
function validatePostcode(postcode) {
  const postcodeRegex = /^\d{5}$/;
  
  if (!postcodeRegex.test(postcode)) {
    return false;
  }
  
  return true;
}

// ❌ INCORRECTO
function validatePostcode(postcode){
if(!(/^\d{5}$/.test(postcode)))return false;
return true;}
```

**Reglas JavaScript:**
- Usa camelCase para variables y funciones
- Usa PascalCase para clases
- Usa UPPER_SNAKE_CASE para constantes
- Indentación de 2 espacios
- Usa `const` y `let`, evita `var`
- Usa comillas simples para strings
- Punto y coma al final de sentencias
- Comentarios JSDoc para funciones importantes
- Usa ES6+ cuando sea apropiado

### Convenciones de Commits

Usa el formato de [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<ámbito>): <descripción>

[cuerpo opcional]

[pie opcional]
```

**Tipos de commit:**
- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (espacios, punto y coma, etc.)
- `refactor`: Refactorización de código
- `test`: Añadir o modificar tests
- `chore`: Cambios en build, herramientas, etc.

**Ejemplos:**
```bash
feat(navbar): add mobile menu toggle
fix(form): correct postcode validation regex
docs(readme): update installation instructions
style(css): format styles.css with prettier
refactor(js): simplify carousel initialization
```

## 🔍 Proceso de Revisión

### Criterios de Revisión

Los Pull Requests serán revisados considerando:

1. **Funcionalidad**: ¿El código hace lo que dice hacer?
2. **Calidad**: ¿El código sigue los estándares establecidos?
3. **Pruebas**: ¿Se han probado los cambios adecuadamente?
4. **Documentación**: ¿Está actualizada la documentación relevante?
5. **Compatibilidad**: ¿Funciona en diferentes navegadores?
6. **Responsive**: ¿Se ve bien en diferentes dispositivos?
7. **Accesibilidad**: ¿Es accesible para todos los usuarios?

### Tiempo de Revisión

- Los mantenedores intentarán revisar los PRs en un plazo de 7 días
- Los PRs urgentes (bugs críticos) se priorizarán
- Puedes solicitar una revisión específica mencionando a un revisor

### Después de la Revisión

- Si se solicitan cambios, realízalos y notifica
- Responde a los comentarios de los revisores
- Una vez aprobado, el PR será fusionado por un mantenedor

## 🎓 Recursos Adicionales

### Documentación Útil

- [Bootstrap 5.3 Documentation](https://getbootstrap.com/docs/5.3/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [HTML Best Practices](https://github.com/hail2u/html-best-practices)
- [CSS Guidelines](https://cssguidelin.es/)
- [JavaScript Style Guide](https://github.com/airbnb/javascript)

### Herramientas Recomendadas

- **Editor**: VS Code con extensiones HTML, CSS, JavaScript
- **Formateo**: Prettier
- **Linting**: ESLint
- **Testing**: Navegadores DevTools
- **Validación**: W3C Validator

## ❓ ¿Preguntas?

Si tienes preguntas sobre el proceso de contribución:

1. Revisa la documentación existente
2. Busca en los issues cerrados
3. Crea un nuevo issue con la etiqueta `question`

## 🙏 Agradecimientos

¡Gracias por contribuir al proyecto Seur! Cada contribución, por pequeña que sea, es valiosa y apreciada.

---

**¡Feliz codificación! 🚀**
