const item = document.querySelector('.testimonials__items > div');



const itemWidth = item.clientWidth + 29; // ширина элемента плюс отступ

const sliderRange = document.querySelector('.slider-range');
const items = document.querySelector('.testimonials__items');



if (!!sliderRange) {
    sliderRange.addEventListener('change', e => {
        const { target } = e;
        console.log(target.value);
    let sliderStep = target.value;
    items.style.transform = "translateX(-".concat(sliderStep * itemWidth, "px)");
    });

    sliderRange.addEventListener('input', e => {
    const {
      target
    } = e;
    let sliderStep = target.value;
    items.style.transform = "translateX(-".concat(sliderStep * itemWidth, "px)");
  });
}


