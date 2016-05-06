import Vue from 'vue';

const Indicator = Vue.extend(require('./indicator.vue'));
let instance;

export default {
  open(options) {
    options = options || {};

    if (!instance) {
      instance = new Indicator({
        el: document.createElement('div')
      });
    }
    if (instance.visible) return;
    instance.$appendTo(document.body);

    let defaults = {
      modal: false,
      text: ''
    };
    for (let prop in defaults) {
      if (defaults.hasOwnProperty(prop)) {
        instance[prop] = options[prop] || defaults[prop];
      }
    }
    Vue.nextTick(() => {
      instance.open();
    });
  },

  close() {
    if (instance) {
      Vue.nextTick(() => {
        instance.close();
      });
    }
  }
};
