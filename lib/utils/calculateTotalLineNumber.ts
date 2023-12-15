import styles from "../components/Modal/styles.module.css";

export function calculateTotalLineNumber(
  contentRef: React.RefObject<HTMLDivElement>
) {
  if (contentRef.current) {
    const children = contentRef.current.children;
    const lineNumbersArray: number[] = [];

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;

      if (i === 0 && child.classList.contains(styles.showMoreButton)) {
        continue;
      }

      const lineHeight = parseInt(
        window.getComputedStyle(child).lineHeight || "0"
      );

      const totalLines = Math.ceil(child.scrollHeight / lineHeight) - 1;
      lineNumbersArray.push(totalLines);
    }

    return lineNumbersArray.reduce(
      (acc, currentNumber) => acc + currentNumber,
      0
    );
  }

  return 0;
}
