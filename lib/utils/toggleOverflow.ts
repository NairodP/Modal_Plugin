export function toggleOverflow(enableOverflow: boolean) {
  const body = document.body;

  if (enableOverflow) {
    body.style.overflow = 'auto';

  } else {
    body.style.overflow = 'hidden';
  
  }
}