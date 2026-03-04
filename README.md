# Actividad DOM (REPETIR / APLICAR / CALCULAR / INVERTIR)

Pequeña aplicación web diseñada para practicar **manipulación del DOM**, eventos y lógica básica.

> ✨ Esta versión incluye un **remake visual moderno**: diseño claro, layout en cuadrícula
> y transiciones suaves. La funcionalidad original permanece intacta.

## ✅ Requisitos cubiertos
1. **Repetir** – pedir una palabra y número de repeticiones, mostrar el resultado.
2. **Aplicar color** – seleccionar un color y usarlo como fondo de un párrafo.
3. **Calcular** – ingresar dos números y mostrar suma, resta, multiplicación, división
   y la suma de todos los resultados (salvo división por cero).
4. **Invertir** – escribir un texto y presentar la cadena invertida.

## ▶️ Uso
1. Abre `index.html` con tu navegador preferido.
2. Completa los campos de cada tarjeta y pulsa el botón correspondiente.
3. Observa la salida en el área designada y revisa la consola (F12 → Console)
   para ver los registros de depuración.

> ��� La interfaz es responsiva y se ajusta a dispositivos móviles gracias a CSS Grid.

## ��� Consejos y snippets rápidos
- Obtener elementos: `const el = document.querySelector('#miId');`
- Detectar clics: `btn.addEventListener('click', () => { /* ... */ });`
- Cambiar estilo: `el.style.backgroundColor = '#ff0';`
- Invertir texto: `const r = texto.split('').reverse().join('');`

## ��� Estructura de archivos
- `index.html` – markup semántico con secciones (`<article>`) para cada ejercicio
- `assets/css/styles.css` – estilos modernos, tema claro y componentes reutilizables
- `assets/js/app.js` – toda la lógica JavaScript. No requiere cambios tras el
  remake visual.

---

Puedes clonar o copiar este repositorio para adaptarlo a tus propias pruebas
o ejercicios similares.

