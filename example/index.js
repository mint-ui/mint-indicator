import Indicator from '../src/index.js';
let btn = document.getElementById('button');
btn.addEventListener('click', () => {
  Indicator.open({ modal: true });
  setTimeout(() => Indicator.close(), 2000);
});
