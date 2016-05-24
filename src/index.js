import Vue from 'vue';

const Indicator = Vue.extend(require('./indicator.vue'));
let instance;

import Spinner from 'kb-spinner';
import 'kb-spinner/lib/all/style.css';

Vue.use(Spinner);

export default {
  open(options) {
    if (!instance) {
      instance = new Indicator({
        el: document.createElement('div')
      });
    }
    if (instance.visible) return;
    if (typeof options === 'string') {
      instance.text = options;
      instance.spinnerType = 'snake';
    } else if (typeof options === 'object') {
      instance.text = options.text || '';
      instance.spinnerType = options.spinnerType || 'snake';
    } else {
      instance.text = '';
      instance.spinnerType = 'snake';
    }
    instance.$appendTo(document.body);

    Vue.nextTick(() => {
      instance.visible = true;
    });
  },

  close() {
    if (instance) {
      Vue.nextTick(() => {
        instance.visible = false;
      });
    }
  }
};
