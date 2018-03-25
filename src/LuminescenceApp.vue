<template>
  <div class="main">
    <LuminescenceBackground class="main__background"/>
    <div class="main__content">
      <h1>jess makes things</h1>
    </div>
  </div>
</template>

<script>
  import LuminescenceBackground from './components/background/LuminescenceBackground';

  export default {
    name: 'LuminescenceApp',
    components: { LuminescenceBackground },
    data() {
      return {
        content: []
      };
    }
  };
</script>

<style lang="scss">
  @import './style/config';

  .main {
    height: 100vh;
    overflow: hidden;
    position: relative;
    width: 100vw;

    &__background,
    &__content {
      height: 100vh;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    &__background {
      z-index: 1;
    }

    &__content {
      height: calc(100vh - 2rem);
      overflow: auto;
      padding: 1rem;
      width: calc(100vw - 2rem);
      z-index: 2;
    }
  }
</style>
