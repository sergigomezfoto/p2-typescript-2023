

export const renderJs= ()=>`
(() => {

    let mY;
    const element = document.querySelector('.index-title');
    const canvas = document.querySelector('.index-main');
    canvas.addEventListener("mousemove", (e) => {
        let elementTop = element.getBoundingClientRect().y;
        let elementBottom = element.getBoundingClientRect().bottom;
        mY = e.pageY;
        if (mY < elementTop || mY > elementBottom) {
            element.style.opacity = '0.9';
        } else {
            element.style.opacity = '0.05';
        }
    }, false);
})()
`