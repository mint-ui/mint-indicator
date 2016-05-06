<template>
  <div class="indicator d-popup-center" v-if="rendered" v-show="visible" transition="pop-fade">
    <span class="indicator-text" v-show="text">{{ text }}</span>
    <span class="indicator-spin"></span>
  </div>
</template>

<style>
  .indicator {
    position: fixed;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
  }

  .indicator-text {
    display: block;
    color: #fff;
    text-align: center;
    margin-bottom: 10px;
  }

  .indicator-spin {
    display: inline-block;
    font-size: 0;
    width: 40px;
    height: 40px;
    background: url("loading.svg") center center no-repeat;
    background-size: 100%;
    animation: indicator-spin 1s steps(12,end) infinite;
  }

  @keyframes indicator-spin {
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<script type="text/babel">
  import Popup from 'el-popup';
  require('el-popup/dist/style.css');

  export default {
    mixins: [ Popup ],

    props: {
      text: String,
      modal: {
        type: Boolean,
        default: false
      },
      closeOnClickModal: {
        type: Boolean,
        default: true
      }
    }
  };
</script>