<template>
  <div class="main">
    <router-view class="main__background"/>
    <div class="main__content demo">
      <DemoControls :links="links"
                    class="demo__controls"/>
    </div>
  </div>
</template>

<script>
  import DemoControls from './components/controls/DemoControls';
  import IridescentBackdrop from './components/backgrounds/IridescentBackdrop';
  import IridescentBackdropBeams from './components/backgrounds/IridescentBackdropBeams';
  import IridescentBackdropDisks from './components/backgrounds/IridescentBackdropDisks';
  import IridescentBackdropPlanes from './components/backgrounds/IridescentBackdropPlanes';
  import { routes } from './router';

  const getLinks = routesConfig => routesConfig.map((route, index) => ({
    index,
    name: route.name,
    path: route.path
  }));

  export default {
    name: 'Iridescent',
    components: {
      DemoControls,
      IridescentBackdrop,
      IridescentBackdropBeams,
      IridescentBackdropDisks,
      IridescentBackdropPlanes
    },
    data() {
      return {
        links: getLinks(routes)
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
      align-items: center;
      display: flex;
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

  .demo {
    &__controls {
      max-width: 30rem;
      margin: 0 auto;
      width: 100%;
    }
  }
</style>
