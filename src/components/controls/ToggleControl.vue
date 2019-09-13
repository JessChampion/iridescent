<template>
  <div class="toggle-control">
    <button :class="getToggleClasses()"
            :aria-pressed="[open]"
            :title="getTitle()"
            @click="toggle"/>
    <transition name="fade">
      <slot v-if="open"
            class="toggle-control__panel"/>
    </transition>
  </div>
</template>

<script>
  const TOGGLE_CLASSES = ['icon', 'icon--link', 'toggle-control__close-button'];
  const getClassesString = classes => classes.join(' ');
  const toggleIcon = open => (open ? 'icon--close-outline' : 'icon--menu-outline');
  const toggleTitle = open => (open ? 'hide controls' : 'show controls');

  export default {
    name: 'ToggleControl',
    data() {
      return { open: true };
    },
    methods: {
      getToggleClasses() {
        return getClassesString([...TOGGLE_CLASSES, toggleIcon(this.open)]);
      },
      getTitle() {
        return toggleTitle(this.open);
      },
      toggle() {
        this.open = !this.open;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../style/config';

  .toggle-control {
    &__close-button {
      margin: 0 0.7rem 2rem 0;
      opacity: 0.25;
      position: absolute;
      right: 0;
      top: 2.65rem;

      @include breakpoint-md-up {
        right: 0.5rem;
      }

      &:active,
      &:focus,
      &:hover {
        opacity: 0.65;
      }
    }

    &__panel {
      will-change: opacity;
    }
  }
</style>
