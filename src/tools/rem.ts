function rem() {
  const onResize = () => {
    const rootEl = document.documentElement;
    rootEl.style.fontSize = rootEl.clientWidth / 10.8 + "px";
  };
  window.addEventListener("resize", onResize);
  onResize();
}

export default rem();
