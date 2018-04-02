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
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

    @include breakpoint-md-up {
      flex-direction: row;
      justify-content: space-between;
    }

    &__link {
      background-color: $color-charcoal-a15;
      border: 0.1rem $color-charcoal-a65 solid;
      border-radius: 1rem;
      color: $color-charcoal;
      font-family: 'Cutive Mono', monospace;
      font-size: $font-size-medium;
      font-weight: 200;
      line-height: 1.5;
      margin: 0.5rem 0;
      min-width: 4rem;
      padding: 0.4rem 1.25rem 0.5rem;
      text-transform: lowercase;
      text-decoration: none;
      text-align: center;

      &.router-link-active {
        background-color: $color-white-a15;
      }
    }
  }
</style>
