<template>
  <div class="controls">
    <h1 class="controls__title">Iridescent</h1>
    <h2 class="controls__subtitle">
      Background experiments
      <a class="controls__github icon icon--mark-github visible--sm-up"
         title="github"/>
    </h2>
    <DemoNavigation class="controls__navigation"/>
    <a class="controls__github icon icon--mark-github hidden--sm-up"
       title="github"/>
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
    text-align: center;

    &__title,
    &__subtitle {
      font-family: 'Poiret One', 'Helvetica Neue', sans-serif;
      display: inline-block;
      color: $color-charcoal-a85;
      margin: 0;
      white-space: nowrap;
      width: 100%;
    }

    &__title {
      font-size: 18vw;
      font-weight: 400;
      margin-left: -1vw;
      text-transform: uppercase;

      @include breakpoint-sm-up {
        font-size: 20vw;
        margin-left: -1.5vw;
      }

      @include breakpoint-md-up {
        font-size: 6.75rem;
        margin-left: -0.4rem;
      }
    }

    &__subtitle {
      color: $color-charcoal-a65;
      font-size: 7.6vw;
      text-transform: lowercase;
      padding: 0.5rem 0 1.5rem;

      @include breakpoint-sm-up {
        text-align: left;
      }

      @include breakpoint-md-up {
        font-size: 2.5rem;
        max-width: unset;
        padding: 0.5rem 0.3rem 1.5rem;
        width: calc(100% - 0.7rem);
      }
    }

    &__navigation {
    }

    &__github {
      float: right;
      opacity: 0.45;
      margin: 2rem 1.2rem 0 0;

      @include breakpoint-sm-up {
        height: 6vw;
        margin: 2.5vw 0 0;
        width: 6vw;
      }

      @include breakpoint-md-up {
        height: 2rem;
        margin: 0.75rem 0 0;
        width: 2rem;
      }

      &:hover {
        cursor: pointer;
        opacity: 0.65;
      }
    }
  }
</style>
