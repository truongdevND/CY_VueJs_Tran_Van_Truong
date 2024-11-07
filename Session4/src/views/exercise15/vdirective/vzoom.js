export const zoomDirective = {
  mounted(el) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      el.style.fontSize = `${scrollPosition}px`;
    });
  }
}
