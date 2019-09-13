<template>
  <div class="background">
    <div class="background__pane pane--iridescent"/>
    <div class="background__pane pane--beams"/>
  </div>
</template>

<script>
  export default {
    name: 'IridescentBackdropGradients'
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

    .animation-paused & * {
      animation-play-state: paused;
    }

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
        background: linear-gradient(
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

      &--beams {
        animation: shimmer $bg-speed linear;
        animation-iteration-count: infinite;
        background: linear-gradient(
                to right,
                $color-white-a100,
                $color-white-a85,
                color-stop($color-white-a100, 2),
                $color-white-a65,
                color-stop($color-white-a100, 3),
                $color-white-a85,
                color-stop($color-white-a100, 2),
                $color-white-a85,
                $color-white-a100,
                $color-white-a65,
                color-stop($color-white-a100, 3),
                $color-white-a85,
                color-stop($color-white-a100, 1)
        );
      }
    }

    &__beams {
      left: 0;
      min-height: 100%;
      min-width: 100%;
      position: absolute;
      top: 0;
    }
  }

  @keyframes oscillate {
    0% {
      transform: translate3d(0, 0, 0) rotate3d(0, 0, 1, #{$tilt}deg);
    }

    25% {
      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, 0deg);
    }

    50% {
      transform: translate3d(0, 0, 0) rotate3d(0, 0, 1, -#{$tilt}deg);
    }

    75% {
      transform: translate3d(25%, 0, 0) rotate3d(0, 0, 1, 0deg);
    }

    100% {
      transform: translate3d(0, 0, 0) rotate3d(0, 0, 1, #{$tilt}deg);
    }
  }

  @keyframes oscillate2D {
    0% {
      transform: translate(0, 0) rotate(#{$tilt}deg);
    }

    25% {
      transform: translate(-25%, 0) rotate(0deg);
    }

    50% {
      transform: translate(0, 0) rotate(-#{$tilt}deg);
    }

    75% {
      transform: translate(25%, 0) rotate(0deg);
    }

    100% {
      transform: translate(0, 0) rotate(#{$tilt}deg);
    }
  }

  @keyframes shimmer {
    0% {
      transform: translate3d(0, 0, 0);
    }

    25% {
      transform: translate3d(25%, 0, 0);
    }

    50% {
      transform: translate3d(0, 0, 0);
    }

    75% {
      transform: translate3d(-25%, 0, 0);
    }

    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes shimmer2D {
    0% {
      transform: translate(0, 0);
    }

    25% {
      transform: translate(25%, 0);
    }

    50% {
      transform: translate(0, 0);
    }

    75% {
      transform: translate(-25%, 0);
    }

    100% {
      transform: translate(0, 0);
    }
  }
</style>
