<template>
  <div class="main">
    <iridescent-backdrop class="main__background"/>
    <div class="main__content">
      <h1>jess makes things</h1>
    </div>
  </div>
</template>

<script>
  import IridescentBackdrop from './components/background/IridescentBackdrop';

  export default {
    name: 'Iridescent',
    components: { IridescentBackdrop },
    data() {
      return {
        content: []
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import './style/config';

  .main {
    height: 100vh;
    overflow: hidden;
    position: relative;
    width: 100vw;

    &__background {
      z-index: 0;
    }

    &__content {
      //background: transparentize($color-white, 0.5);
      left: 0;
      height: calc(100vh - (2 * #{$size-gutter}rem));
      margin: #{$size-gutter}rem;
      overflow: auto;
      position: absolute;
      top: 0;
      width: calc(100vw - (2 * #{$size-gutter}rem));
      z-index: 2;
    }
  }
</style>
