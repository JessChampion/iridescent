<template>
  <div class="controls">
    <h1 class="controls__title">Iridescent</h1>
    <DemoNavigation class="controls__navigation"/>
    <h2 class="controls__subtitle">
      Background experiments
      <a class="controls__github icon icon--mark-github"
         title="github"/>
    </h2>
  </div>
</template>

<script>
  import DemoNavigation from './DemoNavigation';

  export default {
    name: 'DemoControls',
    components: { DemoNavigation }
  };
</script>

<style lang="scss" scoped>
  @import '../../style/config';

  .controls {
    height: 100%;

    &__title,
    &__subtitle,
    &__navigation {
      flex-basis: 33%;
    }

    &__title,
    &__subtitle {
      font-family: 'Poiret One', 'Helvetica Neue', sans-serif;
      display: inline-block;
      color: $color-charcoal-a65;
      margin: 0;
      padding-bottom: 0.6rem;
      text-align: center;
      white-space: nowrap;
    }

    &__title {
      font-size: 6.75rem;
      font-weight: 400;
      //transform: rotate3d(0.5, 0.5, 1, -90deg);
      text-transform: uppercase;
    }

    &__subtitle {
      font-size: 2.5rem;
      //transform: rotate3d(0, 0, 1, 90deg);
      padding-top: 0.8rem;
      text-transform: lowercase;
      width: 100%;
    }

    &__github {
      margin: -0.25rem 0 0 0.5rem;
      opacity: 0.45;

      &:hover {
        cursor: pointer;
        opacity: 0.65;
      }
    }
  }
</style>
