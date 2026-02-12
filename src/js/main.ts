export function initSiteScripts() {
  const summaryBlocks = document.querySelectorAll<HTMLElement>(".summary-anim");

  if (!summaryBlocks.length) {
    return () => {};
  }

  if (!("IntersectionObserver" in window)) {
    summaryBlocks.forEach((block) => block.classList.add("is-inview"));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const target = entry.target as HTMLElement;
        target.classList.add("is-inview");
        currentObserver.unobserve(target);
      });
    },
    { threshold: 0.2 }
  );

  summaryBlocks.forEach((block) => observer.observe(block));

  return () => {
    observer.disconnect();
  };
}
