<template>
  <div class="controls">
    <DemoNavigation class="controls__navigation"/>
  </div>
</template>

<script>
  import DemoNavigation from './DemoNavigation';

  export default {
    name: 'DemoControls',
    components: { DemoNavigation }
  };
</script>

<style scoped>
  .controls {
    height: 100%;
    width: 100%;
  }
</style>
