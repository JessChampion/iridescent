<template>
  <toggle-control class="toggle-control">
    <div class="demo-controls">
      <h1 class="demo-controls__title">Iridescent</h1>
      <h2 class="demo-controls__subtitle">
        Background experiments
        <a href="https://github.com/JessChampion/iridescent"
           class="demo-controls__github icon icon--link icon--mark-github visible--sm-up"
           title="github"/>
      </h2>
      <DemoNavigation :links="links"
                      class="demo-controls__navigation"/>
      <a href="https://github.com/JessChampion/iridescent"
         class="demo-controls__github icon icon--link icon--mark-github hidden--sm-up"
         title="github"/>
    </div>
  </toggle-control>
</template>

<script>
  import DemoNavigation from './NavigationControl';
  import ToggleControl from './ToggleControl';

  export default {
    name: 'DemoControls',
    components: {
      DemoNavigation,
      ToggleControl
    },
    props: {
      links: {
        type: Array,
        default: () => []
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../style/config';

  .demo-controls {
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

    &__github {
      float: right;
      margin: 2rem 0.75rem 0 0;

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
    }
  }
</style>
