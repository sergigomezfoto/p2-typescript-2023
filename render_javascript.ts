

export const renderIndexJs= ()=>`
(() => {
  const indexTitleOpacity = () => {
    const element = document.querySelector(".index-title");
    const space = document.querySelector("body");
    let mY;
    space.addEventListener(
      "mousemove",
      (e) => {
        let elementTop = element.getBoundingClientRect().y;
        let elementBottom = element.getBoundingClientRect().bottom;
        mY = e.pageY;
        if (mY < elementTop - window.scrollY || mY > elementBottom + window.scrollY) {
          element.style.opacity = "0.9";
        } else {
          element.style.opacity = "0.08";
        }
      },
      false
    );
  };
  indexTitleOpacity();
})();

`
