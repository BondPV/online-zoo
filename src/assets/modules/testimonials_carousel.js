const sliderRange = document.querySelector('.slider-range');
const items = document.querySelector('.testimonials__items');
const item = document.querySelector('.testimonials__items > div');
const itemGap = 29; // расстояние меджу элементами

const itemWidth = item.clientWidth + itemGap; // ширина элемента плюс отступ

if (!!sliderRange) {
    sliderRange.addEventListener('change', e => {
      const { target } = e;
      let sliderStep = target.value;
      items.style.transform = 'translateX(-'.concat(sliderStep * itemWidth, 'px)');
    });

    sliderRange.addEventListener('input', e => {
      const { target } = e;
      let sliderStep = target.value;
      items.style.transform = 'translateX(-'.concat(sliderStep * itemWidth, 'px)');
  });
}


