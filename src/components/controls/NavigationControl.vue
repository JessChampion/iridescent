<template>
  <div class="navigation-control">
    <router-link v-for="link in links"
                 :key="link.index"
                 :to="link.path"
                 :class="'navigation-control__link'"
    >
      {{ link.name }}
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'NavigationControl',

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

  .navigation-control {
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
      border: $border-standard;
      border-radius: 1rem;
      color: $color-charcoal;
      flex-basis: 25%;
      font-family: 'Cutive Mono', 'Courier New', monospace;
      font-size: $font-size-medium;
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

      &:active,
      &:focus,
      &:hover {
        background-color: $color-charcoal-a65;
        color: $color-white-a85;
      }

      &:active,
      &:focus {
        box-shadow: $shadow-outline;
        outline: none;
      }
    }
  }
</style>
