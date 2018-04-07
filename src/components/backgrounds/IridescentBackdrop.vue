<template>
  <div class="background">
    <div class="background__pane pane--iridescent"/>
  </div>
</template>

<script>
  export default {
    name: 'IridescentBackdrop'
  };
</script>

<style lang="scss">
  @import '../../style/config';

  $bg-speed: 25s; //25s;
  $tilt: 45;

  body {
    position: relative;
  }

  .background {
    height: 100vh;
    max-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    position: absolute;
    width: 100vw;

    &__pane {
      left: -50vmax;
      min-height: 200vmax;
      min-width: 200vmax;
      position: absolute;
      top: -50vmax;
      will-change: transform;
    }

    .pane {
      &--iridescent {
        animation: oscillate $bg-speed linear;
        animation-iteration-count: infinite;
        background: $color-black;
        background:
          linear-gradient(
            to right,
            $color-red-30,
            $color-pink-30,
            $color-purple-30,
            $color-indigo-30,
            $color-blue-30,
            $color-cyan-30,
            $color-green-30,
            $color-yellow-30,
            //$color-orange-30,
            $color-red-30
          );
      }
    }
  }

  @keyframes oscillate {
    0% {
      transform:
        translate3d(0, 0, 0)
        rotate3d(0, 0, 1, #{$tilt}deg);
    }

    25% {
      transform:
        translate3d(-25%, 0, 0)
        rotate3d(0, 0, 1, 0deg);
    }

    50% {
      transform:
        translate3d(0, 0, 0)
        rotate3d(0, 0, 1, -#{$tilt}deg);
    }

    75% {
      transform:
        translate3d(25%, 0, 0)
        rotate3d(0, 0, 1, 0deg);
    }

    100% {
      transform:
        translate3d(0, 0, 0)
        rotate3d(0, 0, 1, #{$tilt}deg);
    }
  }

  @keyframes oscillate2D {
    0% {
      transform:
        translate(0, 0)
        rotate(#{$tilt}deg);
    }

    25% {
      transform:
        translate(-25%, 0)
        rotate(0deg);
    }

    50% {
      transform:
        translate(0, 0)
        rotate(-#{$tilt}deg);
    }

    75% {
      transform:
        translate(25%, 0)
        rotate(0deg);
    }

    100% {
      transform:
        translate(0, 0)
        rotate(#{$tilt}deg);
    }
  }
</style>
