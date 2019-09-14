<template>
  <button :class="getPauseClasses()"
          :aria-pressed="[paused]"
          :title="label"
          @click="togglePaused"
  />
</template>

<script>
  const TOGGLE_CLASSES = ['icon', 'icon--pause-outline', 'pause-control'];
  const OPEN_CLASS = 'no-animation';

  const toggleClass = (paused) => {
    if (paused) {
      document.body.classList.add(OPEN_CLASS);
      return;
    }
    document.body.classList.remove(OPEN_CLASS);
  };

  export default {
    name: 'PauseControl',
    props: {
      label: {
        type: String,
        default: 'Pause decorative animations'
      }
    },
    data() {
      return { paused: false };
    },
    methods: {
      getPauseClasses() {
        return this.paused ? [...TOGGLE_CLASSES, OPEN_CLASS] : TOGGLE_CLASSES;
      },
      togglePaused() {
        this.paused = !this.paused;
        console.log(this.targets);
        toggleClass(this.paused);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../style/config';

  .pause-control {
    margin: 0 0.7rem 2rem 0;
    opacity: 0.25;
    position: absolute;
    right: 0;
    top: 0.5rem;

    @include breakpoint-md-up {
      right: 0.5rem;
    }

    &:active,
    &:focus,
    &:hover {
      opacity: 0.65;
    }
  }
</style>
