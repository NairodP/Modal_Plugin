export function toggleOverflow(enableOverflow: boolean) {
  const body = document.body;

  if (enableOverflow) {
    body.style.overflow = "auto";
    // body.style.backgroundColor = 'initial';
  } else {
    body.style.overflow = "hidden";
    // body.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
    // body.style.transition = 'background-color 0.8s linear';
  }
}
