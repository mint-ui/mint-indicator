<template>
  <div class="kebab-indicator" v-if="rendered" v-show="visible" transition="pop-bounce" :style="{ 'padding': text ? '20px' : '10px' }">
    <span class="kebab-indicator-spin"></span>
    <span class="kebab-indicator-text" v-show="text">{{ text }}</span>
  </div>
</template>

<style>
  @component-namespace kebab {
    @component indicator {
      position: fixed 50% * * 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      box-sizing: border-box;
      text-align: center;

      @descendent text {
        display: block;
        color: #fff;
        text-align: center;
        margin-top: 10px;
      }

      @descendent spin {
        display: inline-block;
        font-size: 0;
        size: 40px;
        background: url("loading.svg") center center no-repeat;
        background-size: 100%;
        animation: indicator-spin 1s steps(12,end) infinite;
      }
    }
  }

  @keyframes indicator-spin {
    100% {
      transform: rotate(360deg);
    }
  }

  .pop-bounce-transition {
    transition: opacity .3s linear;
  }

  .pop-bounce-enter,
  .pop-bounce-leave {
    opacity: 0;
  }

  .d-modal {
    position: fixed 0 * * 0;
    size: 100%;
    opacity: 0;
    background: transparent;
  }
</style>

<script type="text/babel">
  import Popup from 'el-popup';

  export default {
    mixins: [ Popup ],

    props: {
      text: String,
      modal: {
        type: Boolean,
        default: true
      },
      closeOnClickModal: {
        type: Boolean,
        default: false
      }
    }
  };
</script>