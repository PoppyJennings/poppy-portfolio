import Typed from 'typed.js';

const loadDynamicFooterText = () => {
  new Typed('#footer-typed-text', {
    strings: ["Get in touch...", "by email is great", "by WhatsApp is better"],
    typeSpeed: 60,
    loop: true
  });
}

export { loadDynamicFooterText };