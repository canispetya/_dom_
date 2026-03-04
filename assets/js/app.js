/**
 * ACTIVIDAD DOM (según actividad4.pdf)
 * 1) REPETIR
 * 2) APLICAR color a un texto
 * 3) CALCULAR operaciones y suma de resultados
 * 4) INVERTIR texto
 *
 * Tip docente:
 * - DOM = "control remoto" del HTML desde JS
 * - querySelector = "encuéntrame este elemento"
 * - addEventListener = "cuando pase X (click), haz Y"
 */

/* =========================
   Helpers de DOM
========================= */
const $ = (selector) => document.querySelector(selector);

function setText(selector, text) {
  $(selector).textContent = text;
}

/* =========================
   1) REPETIR!
========================= */
const txtPalabra = $("#txtPalabra");
const numVeces = $("#numVeces");
const btnRepetir = $("#btnRepetir");
const outRepetir = $("#outRepetir");

btnRepetir.addEventListener("click", () => {
  const palabra = txtPalabra.value.trim();
  const veces = Number(numVeces.value);

  // Validaciones básicas para estudiantes
  if (!palabra) {
    outRepetir.textContent = "⚠️ Escribe una palabra primero.";
    return;
  }
  if (!Number.isFinite(veces) || veces <= 0) {
    outRepetir.textContent = "⚠️ Ingresa un número de repeticiones válido (mayor que 0).";
    return;
  }

  // Forma simple: crear un array con N elementos y unirlos con espacio
  const resultado = Array.from({ length: veces }, () => palabra).join(" ");
  outRepetir.textContent = resultado;

  console.log("[REPETIR]", { palabra, veces, resultado });
});

/* =========================
   2) APLICAR!
========================= */
const colorPicker = $("#colorPicker");
const btnAplicar = $("#btnAplicar");
const lorem = $("#lorem");

btnAplicar.addEventListener("click", () => {
  const color = colorPicker.value;

  // Cambiamos el estilo directamente desde JS
  lorem.style.backgroundColor = color;

  // Si el color es muy oscuro, el texto podría no verse.
  // Solución simple: dejamos el texto siempre oscuro o siempre claro.
  // Aquí lo dejamos oscuro por defecto. (Podrías mejorarlo con contraste.)
  lorem.style.color = "#0b1220";

  console.log("[APLICAR]", { color });
});

/* =========================
   3) CALCULAR!
========================= */
const numA = $("#numA");
const numB = $("#numB");
const btnCalcular = $("#btnCalcular");
const outCalcular = $("#outCalcular");

btnCalcular.addEventListener("click", () => {
  const a = Number(numA.value);
  const b = Number(numB.value);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    outCalcular.textContent = "⚠️ Debes ingresar dos números válidos.";
    return;
  }

  const suma = a + b;
  const resta = a - b;
  const multi = a * b;

  // División: ojo con b = 0
  const division = (b === 0) ? null : (a / b);

  // Suma de resultados:
  // - si b=0, la división no existe, entonces no la incluimos
  const sumaResultados = division === null
    ? (suma + resta + multi)
    : (suma + resta + multi + division);

  // Formateo similar al ejemplo del PDF
  const lineas = [
    `${a} + ${b} = ${suma}`,
    `${a} - ${b} = ${resta}`,
    `${a} * ${b} = ${multi}`,
    division === null
      ? `${a} / ${b} = ❌ (no se puede dividir por 0)`
      : `${a} / ${b} = ${division}`,
    `La suma de los resultados es ${sumaResultados}`
  ];

  outCalcular.textContent = lineas.join("\n");
  console.log("[CALCULAR]", { a, b, suma, resta, multi, division, sumaResultados });
});

/* =========================
   4) INVERTIR!
========================= */
const txtInvertir = $("#txtInvertir");
const btnInvertir = $("#btnInvertir");
const outInvertir = $("#outInvertir");

btnInvertir.addEventListener("click", () => {
  const texto = txtInvertir.value;

  if (!texto.trim()) {
    outInvertir.textContent = "⚠️ Escribe un texto para invertir.";
    return;
  }

  // Invertir string (forma clásica para estudiantes)
  // 1) split("") => array de caracteres
  // 2) reverse() => invierte el array
  // 3) join("") => vuelve a string
  const invertido = texto.split("").reverse().join("");

  outInvertir.textContent = invertido;
  console.log("[INVERTIR]", { texto, invertido });
});