#  Flipbook – El tren de las noches eternas

Flipbook privado de lectura del libro  
**_El tren de las noches eternas_**  
por **Luis Cristian Marín**

Este proyecto no es un visor de PDF.  
Es una **experiencia de lectura digital** que simula el gesto real de un libro:  
pasar páginas, detenerse, volver atrás, leer con ritmo.

---

##  Objetivo del proyecto

Crear una **edición de lectura privada** del libro, pensada para:

- regalar a personas cercanas
- compartir sin costo económico
- preservar la sensación de “libro”
- evitar la descarga directa del PDF
- respetar la obra y el tiempo del lector

El flipbook funciona como un **puente** entre:
- el libro físico (editorial)
- el libro digital comercial
- y una lectura íntima, cuidada y personal

---

##  Concepto

Un *flipbook* es un libro digital que:
- no se desplaza como una página web
- no se siente como un archivo
- **se pasa como hojas**

La lectura ocurre página por página, con animación, sombra y pausa.
El foco está en **la experiencia**, no en el formato.

---

##  Estructura del proyecto

FLIPBOOK/
├─ index.html
├─ README.md
├─ favicon.ico
└─ assets/
├─ css/
│ ├─ variables.css
│ ├─ base.css
│ └─ book.css
├─ js/
│ ├─ app.js
│ ├─ book.js
│ ├─ ui.js
│ └─ utils.js
├─ data/
│ └─ book.json
├─ img/
│ ├─ cover/
│ │ ├─ cover.jpg
│ │ └─ back.jpg
│ └─ pages/
│ ├─ p001.jpg
│ ├─ p002.jpg
│ └─ ...
└─ vendor/
└─ page-flip/
   ├─ page-flip.browser.js
   └─ page-flip.css


---

##  Tecnologías utilizadas

- **HTML5** – estructura del visor
- **CSS3** – diseño, tipografía y estética del libro
- **JavaScript** – lógica del flipbook y navegación
- **PageFlip (lib)** – motor de animación de páginas

Sin frameworks pesados.  
Código simple, legible y editable.

---

##  Configuración del libro

El archivo `assets/data/book.json` define el contenido del libro:

- título
- autor
- cantidad de páginas
- rutas de imágenes
- extensión de archivos

Esto permite cambiar de libro **sin tocar el código JS**.

---

##  Uso en desarrollo

1. Colocar las páginas del libro en  
   `assets/img/pages/`  
   usando el formato: `p001.jpg`, `p002.jpg`, etc.

2. Ajustar `pageCount` en `book.json`.

3. Abrir el proyecto con **Live Server** desde VS Code.

4. Probar navegación, orden y visualización.

---

##  Estado del repositorio

Este repositorio es **privado**.

Contiene:
- material en desarrollo
- estructura del proyecto
- recursos de lectura no públicos

No está pensado como distribución abierta,  
sino como **espacio de trabajo y resguardo del proceso**.

---

##  Nota del autor

Este flipbook no reemplaza al libro físico  
ni a la edición digital comercial.

Es una **forma de lectura compartida**,  
pensada con respeto por el texto,  
el lector  
y el tiempo.

> *Un libro no siempre se presta.  
> A veces, se acompaña.*

---
