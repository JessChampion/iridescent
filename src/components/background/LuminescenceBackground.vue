<template>
  <div class="background background--luminescence">
    <div class="background__beams">
      <div v-for="beam in beams"
           :key="beam.color"
           :class="getClasses(beam)"
           :style="getStyle(beam)"
      />
    </div>
  </div>
</template>

<script>
  const COLORS = ['pink', 'purple', 'cyan', 'green', 'yellow'];
  const SHADES = ['full', 'white', 'mid', 'light'];
  const RANGE = {
    delay: [1, 5],
    duration: [8, 12],
    width: [5, 25]
  };

  const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;
  const randomNumberInRange = range => randomNumber(...range);
  const lastIndex = items => items.length - 1;
  const createBeam = (color, index, width = randomNumberInRange(RANGE.width)) => ({
    color,
    delay: randomNumberInRange(RANGE.delay) * 100,
    direction: (index === lastIndex(SHADES)) ? 'left' : 'right',
    duration: randomNumberInRange(RANGE.duration),
    width
  });
  const beamFactory = (color) => {
    const tones = SHADES.map(shade => `${color}-${shade}`);
    return tones.map((tone, index) => createBeam(tone, index));
  };
  const flatten = list => list.reduce((a, b) => a.concat(b));
  const swap = (items, a, b) => {
    const swapped = [...items];
    const temp = items[a];
    swapped[a] = swapped[b];
    swapped[b] = temp;
    return swapped;
  };
  const getNext = (index, max) => (index < max ? index + 1 : 0);
  const blend = (items) => {
    let shuffled = [...items];
    for (
      let index = lastIndex(SHADES);
      index <= lastIndex(items);
      index += SHADES.length
    ) {
      shuffled = swap(shuffled, index, getNext(index));
    }
    return shuffled;
  };
  const getBeams = () => blend(flatten(COLORS.map(beamFactory)));

  export default {
    name: 'LuminescenceApp',
    data() {
      return {
        beams: getBeams()
      };
    },
    methods: {
      getStyle(beam) {
        const rules = [
          `animation-duration: ${beam.duration}s;`,
          `animation-delay: ${beam.delay}ms;`,
          `width: ${beam.width}vw;`
        ];
        return rules.join('');
      },
      getClasses(beam) {
        // return `background__beam beam beam--${beam.color}`;
        return `background__beam beam beam--${beam.color} beam--glimmer-${beam.direction}`;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../style/config';

  $colors: (
      'pink-full': $color-pink,
      'pink-mid': $color-pink-mid,
      'pink-light': $color-pink-light,
      'pink-white': $color-pink-white,
      'purple-full': $color-purple,
      'purple-mid': $color-purple-mid,
      'purple-light': $color-purple-light,
      'purple-white': $color-purple-white,
      'cyan-full': $color-cyan,
      'cyan-mid': $color-cyan-mid,
      'cyan-light': $color-cyan-light,
      'cyan-white': $color-cyan-white,
      'green-full': $color-green,
      'green-mid': $color-green-mid,
      'green-light': $color-green-light,
      'green-white': $color-green-white,
      'yellow-full': $color-yellow,
      'yellow-mid': $color-yellow-mid,
      'yellow-light': $color-yellow-light,
      'yellow-white': $color-yellow-white
  );

  .background {
    background: $color-white;
    position: absolute;
    overflow: hidden;
    max-height: 100vh;
    max-width: 100vw;

    &::after {
      background: transparentize($color-white, 0.5);
      content: '';
      min-height: 100vh;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    &__beams {
      display: flex;
      min-height: 100%;
      min-width: 100%;
    }

    .beam {
      height: 100vh;
      opacity: 0.8;

      &--glimmer-left {
        animation-iteration-count: infinite;
        animation-name: glimmer-left;
        animation-timing-function: linear;
      }

      &--glimmer-right {
        animation-iteration-count: infinite;
        animation-name: glimmer-right;
        animation-timing-function: linear;
      }

      @each $color-name, $color-value in $colors {
        &--#{$color-name} {
          background: linear-gradient(
                  to right,
                  transparentize($color-value, 0.9),
                  $color-value,
                  $color-value,
                  transparentize($color-value, 0.9)
          );
        }
      }
    }
  }

  @keyframes glimmer-left {
    0% {
      transform: translate3d(0, 0, 0);
    }
    25% {
      transform: translate3d(-100%, 0, 0)
    }
    50% {
      transform: translate3d(0, 0, 0);
    }
    75% {
      transform: translate3d(100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0)
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
</style>
