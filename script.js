// Scroll Animation Trigger
const scrollElements = document.querySelectorAll('.scroll-animation');

const elementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add('visible');
};

const hideScrollElement = (element) => {
  element.classList.remove('visible');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// Initialize scroll animations on page load
document.addEventListener('DOMContentLoaded', () => {
  handleScrollAnimation();
});
