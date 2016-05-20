import Vue from 'vue';

const Indicator = Vue.extend(require('./indicator.vue'));
let instance;

export default {
  open(text) {
    if (!instance) {
      instance = new Indicator({
        el: document.createElement('div')
      });
    }
    if (instance.visible) return;
    instance.text = text || '';
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
