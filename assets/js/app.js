import { initBook } from './book.js';
import { initUI } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  initBook('book');
  initUI();
});

// LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loading");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});