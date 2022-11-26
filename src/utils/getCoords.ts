export function getCoords(elem: HTMLElement) {
  let box = elem.getBoundingClientRect();

  return {
    top: Math.round(box.top + window.pageYOffset),
    right: Math.round(box.right + window.pageXOffset),
    bottom: Math.round(box.bottom + window.pageYOffset),
    left: Math.round(box.left + window.pageXOffset)
  };
}