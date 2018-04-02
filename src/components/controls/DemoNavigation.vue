<template>
  <div class="navigation">
    <router-link v-for="link in links"
                 :key="link.index"
                 :to="link.path"
                 :class="'navigation__link'"
    >
      {{ link.name }}
    </router-link>
  </div>
</template>

<script>
  import { routes } from '../../router';

  const getLinks = routesConfig => routesConfig.map((route, index) => ({
    index,
    name: route.name,
    path: route.path
  }));

  export default {
    name: 'DemoNavigation',
    data() {
      return {
        links: getLinks(routes)
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../style/config';

  .navigation {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3vw;

    @include breakpoint-sm-up {
      justify-content: space-between;
      padding: 0;
    }

    &__link {
      background-color: $color-charcoal-a15;
      border: 0.1rem $color-charcoal-a65 solid;
      border-radius: 1rem;
      color: $color-charcoal;
      flex-basis: 25%;
      font-family: 'Cutive Mono', monospace;
      font-size: $font-size-medium;
      font-weight: 200;
      line-height: 1.5;
      margin: 0.5rem 0;
      min-width: 5rem;
      padding: 0.4rem 1rem;
      text-transform: lowercase;
      text-decoration: none;
      text-align: center;

      @include breakpoint-sm-up {
        flex-basis: unset;
        min-width: 4rem;
      }

      @include breakpoint-md-up {
        min-width: 4.5rem;
      }

      &.router-link-active {
        background-color: $color-white-a15;
      }
    }
  }
</style>
