<template>
  <div class="kebab-indicator" v-show="visible" transition="kebab-indicator" >
    <div class="kebab-indicator-wrapper" :style="{ 'padding': text ? '20px' : '10px' }">
      <span class="kebab-indicator-spin"></span>
      <span class="kebab-indicator-text" v-show="text">{{ text }}</span>
    </div>
    <div class="kebab-indicator-mask"></div>
  </div>
</template>

<style>
  @component-namespace kebab {
    @component indicator {
      @descendent wrapper {
        position: fixed 50% * * 50%;
        transform: translate(-50%, -50%);
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        box-sizing: border-box;
        text-align: center;
      }

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

      @descendent mask {
        position: fixed 0 * * 0;
        size: 100%;
        opacity: 0;
        background: transparent;
      }
    }
  }

  @keyframes indicator-spin {
    100% {
      transform: rotate(360deg);
    }
  }

  .kebab-indicator-transition {
    transition: opacity .2s linear;
  }

  .kebab-indicator-enter,
  .kebab-indicator-leave {
    opacity: 0;
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        visible: false
      };
    },

    props: {
      text: String
    }
  };
</script>