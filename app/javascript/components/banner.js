import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Junior full-stack web developer...", "Let's make something amazing!"],
    typeSpeed: 60,
    loop: true
  });
}

export { loadDynamicBannerText };