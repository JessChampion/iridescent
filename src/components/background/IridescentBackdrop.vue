<template>
  <div class="background">
    <div class="background__pane pane--iridescent"/>
    <div class="background__beams">
      <div v-for="beam in beams"
           :key="beam.type + beam.index"
           :class="getClasses(beam)"
           :style="getStyle(beam)"
      />
    </div>
  </div>
</template>

<script>
  const BEAM_INDEXES = [1, 2, 3];
  const BEAM_TYPES = [1, 2];
  const MODIFIER = { delay: 100 };
  const RANGE = {
    delay: {
      iridescent: [1, 10],
      shimmer: [3, 12]
    },
    duration: {
      iridescent: [8, 12],
      shimmer: [2, 5]
    },
    width: [5, 15]
  };

  const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;
  const randomNumberInRange = range => randomNumber(...range);
  const lastIndex = items => items.length - 1;
  const createBeam = (index, type) => ({
    delay: {
      iridescent: randomNumberInRange(RANGE.delay.iridescent) * MODIFIER.delay,
      shimmer: randomNumberInRange(RANGE.delay.shimmer) * MODIFIER.delay
    },
    direction: (index === lastIndex(BEAM_INDEXES)) ? 'left' : 'right',
    duration: {
      iridescent: randomNumberInRange(RANGE.duration.iridescent),
      shimmer: randomNumberInRange(RANGE.duration.shimmer)
    },
    index,
    type,
    width: randomNumberInRange(RANGE.width)
  });
  const beamFactory = type => BEAM_INDEXES.map(index => createBeam(type, index));
  const flatten = list => list.reduce((a, b) => a.concat(b));
  const position = list => list.map((item, index) => {
    const section = 100 / (list.length + 1);
    const left = section * (index + 1);
    return { ...item, left };
  });
  const getBeams = () => position(flatten(BEAM_TYPES.map(beamFactory)));

  export default {
    name: 'LuminescenceApp',
    data() {
      const beams = getBeams();
      console.log(beams);
      return {
        beams
      };
    },
    methods: {
      getStyle(beam) {
        const rules = [
          `animation-duration: ${beam.duration.iridescent}s, ${beam.duration.shimmer}s;`,
          `animation-delay: ${beam.delay.iridescent}ms, ${beam.delay.shimmer}ms;`,
          `left: ${beam.left}vw;`,
          `width: ${beam.width}vw;`
        ];
        return rules.join('');
      },
      getClasses(beam) {
        // return `background__beam beam beam--type-${beam.type}`;
        return `background__beam beam beam--type-${beam.type} beam--glimmer-${beam.direction}`;
      }
    }
  };
</script>

<style lang="scss">
  @import '../../style/config';

  $sheen-speed: 5s;
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
        background: linear-gradient(to right,
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

    &__beams {
      left: 0;
      min-height: 100%;
      min-width: 100%;
      position: absolute;
      top: 0;
    }

    .beam {
      height: 100vh;
      background: linear-gradient(
              to right,
              transparentize($color-white, 1),
              transparentize($color-white, 0.1),
              transparentize($color-white, 1)
      );
      position: absolute;
      top: 0;
      opacity: 0;
      will-change: transform, opacity;

      &--glimmer-left {
        animation-iteration-count: infinite;
        animation-name: glimmer-left, sheen;
        animation-timing-function: linear;
      }

      &--glimmer-right {
        animation-iteration-count: infinite;
        animation-name: glimmer-right, sheen;
        animation-timing-function: linear;
      }
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

  @keyframes sheen {
    0% {
      opacity: 0.1;
    }
    25% {
      opacity: 0.45;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 0.45;
    }
    100% {
      opacity: 0.1;
    }
  }

  @keyframes glimmer-left {
    0% {
      transform: translate3d(0%, 0, 0);
      opacity: 0.2;
    }
    25% {
      transform: translate3d(-100%, 0, 0);
      opacity: 0.5;
    }
    50% {
      transform: translate3d(0, 0, 0);
      opacity: 0.8;
    }
    75% {
      transform: translate3d(100%, 0, 0);
      opacity: 0.5;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 0.2;
    }
  }

  @keyframes glimmer-right {
    0% {
      transform: translate3d(0, 0, 0);
    }
    25% {
      transform: translate3d(100%, 0, 0)
    }
    50% {
      transform: translate3d(0, 0, 0);
    }
    75% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0)
    }
  }

  @keyframes glimmer-left-2D {
    0% {
      transform: translate(0%, 0);
    }
    25% {
      transform: translate(-100%, 0)
    }
    50% {
      transform: translate(0, 0);
    }
    75% {
      transform: translate(100%, 0);
    }
    100% {
      transform: translate(0, 0)
    }
  }

  @keyframes glimmer-right-2D {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(100%, 0)
    }
    50% {
      transform: translate(0, 0);
    }
    75% {
      transform: translate(-100%, 0);
    }
    100% {
      transform: translate(0, 0)
    }
  }
</style>
