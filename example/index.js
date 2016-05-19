import Indicator from '../src/index.js';
let btn = document.getElementById('button');
btn.addEventListener('click', () => {
  Indicator.open('加载中...');
  setTimeout(() => Indicator.close(), 2000);
});
