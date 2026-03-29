import { PageFlip } from "https://unpkg.com/page-flip/dist/js/page-flip.module.js";

export let book = null;

export async function initBook(containerId) {
  const el = document.getElementById(containerId);
  if (!el) {
    console.error("No existe el contenedor del libro:", containerId);
    return;
  }

  const response = await fetch("assets/data/book.json");
  if (!response.ok) {
    console.error("No se pudo cargar book.json", response.status);
    return;
  }

  const data = await response.json();

  book = new PageFlip(el, {
  width: 420,          // UNA página
  height: 600,
  size: "stretch",

  minWidth: 420,
  maxWidth: 840,       // DOS páginas
  minHeight: 600,
  maxHeight: 1200,

  maxShadowOpacity: 0.4,
  showCover: true,
  mobileScrollSupport: false
});


  const images = [data.cover.front, ...data.pages, data.cover.back];
  console.log("Cargando imágenes:", images);

  book.loadFromImages(images);

  // Forzar modo "libro" cuando ya cargó
  book.on("flip", () => {});
}
