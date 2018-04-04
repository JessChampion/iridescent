<template>
  <div class="background">
    <div class="background__pane pane--iridescent"/>
    <div class="background__topography">
      <div v-for="shape in shapes"
           :key="shape.type + '-' + shape.index"
           :class="getClasses(shape)"
           :style="getStyle(shape)"
      />
    </div>
  </div>
</template>

<script>
  const CLASS_OPTIONS = {
    a: 'one',
    b: 'two'
  };
  const SHAPE_INDEXES = [1, 2, 3];
  const SHAPE_TYPES = [1, 2];
  const MODIFIER = { delay: 100 };
  const RANGE = {
    delay: {
      iridescent: [1, 10],
      shimmer: [3, 12]
    },
    dimensions: {
      height: [20, 40],
      width: [20, 40]
    },
    position: {
      vertical: [10, 30]
    },
    duration: {
      iridescent: [10, 15],
      shimmer: [2, 5]
    }
  };

  const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;
  const randomNumberInRange = range => randomNumber(...range);
  const lastIndex = items => items.length - 1;
  const createShape = (index, type) => ({
    delay: {
      iridescent: randomNumberInRange(RANGE.delay.iridescent) * MODIFIER.delay,
      shimmer: randomNumberInRange(RANGE.delay.shimmer) * MODIFIER.delay
    },
    direction: (index === lastIndex(SHAPE_INDEXES)) ? CLASS_OPTIONS.a : CLASS_OPTIONS.b,
    duration: {
      iridescent: randomNumberInRange(RANGE.duration.iridescent),
      shimmer: randomNumberInRange(RANGE.duration.shimmer)
    },
    height: randomNumberInRange(RANGE.dimensions.height),
    index,
    type,
    width: randomNumberInRange(RANGE.dimensions.width)
  });
  const shapeFactory = type => SHAPE_INDEXES.map(index => createShape(type, index));
  const flatten = list => list.reduce((a, b) => a.concat(b));
  const position = list => list.map((item, index) => {
    const section = 100 / (list.length + 1);
    const left = section * (index + 1);
    const verticalVariance = randomNumberInRange(RANGE.position.vertical);
    const top = (index % 2 === 0) ? (50 - verticalVariance) : (50 + verticalVariance);
    return { ...item, left, top };
  });
  const getShapes = () => position(flatten(SHAPE_TYPES.map(shapeFactory)));

  export default {
    name: 'IridescentBackdropDisks',
    data() {
      const shapes = getShapes();
      return {
        shapes
      };
    },
    methods: {
      getStyle(shape) {
        const rules = [
          `animation-duration: ${shape.duration.iridescent}s, ${shape.duration.shimmer}s;`,
          `animation-delay: ${shape.delay.iridescent}ms, ${shape.delay.shimmer}ms;`,
          `height: ${shape.height}vmax;`,
          `left: ${shape.left}vw;`,
          `top: ${shape.top}vh;`,
          `width: ${shape.width}vmax;`
        ];
        return rules.join('');
      },
      getClasses(shape) {
        // return `background__shape shape shape--type-${shape.type}`;
        return `background__shape shape shape--type-${shape.type} shape--glimmer-${shape.direction}`;
      }
    }
  };
</script>

<style lang="scss">
  @import '../../style/config';

  $bg-speed: 25s;
  $tilt: 45;
  $shape-rotate: 90;
  $shape-skew: 45;
  $shape-scale-min: 0.5;
  $shape-scale-max: 2;

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
            $color-orange-30,
            $color-red-30
        );
      }
    }

    &__shapes {
      left: 0;
      min-height: 100%;
      min-width: 100%;
      position: absolute;
      top: 0;
    }

    .shape {
      background: radial-gradient(
              transparentize($color-white, 0),
              transparentize($color-white, 0),
              transparentize($color-white, 0),
              transparentize($color-white, 0.3),
              transparentize($color-white, 1),
              transparentize($color-white, 1),
              transparentize($color-white, 1)
      );
      border-radius: 40%;
      position: absolute;
      opacity: 0;
      will-change: transform, opacity;

      &--glimmer-one {
        animation-iteration-count: infinite;
        animation-name: glimmer-one, shimmer;
        animation-timing-function: linear;
      }

      &--glimmer-two {
        animation-iteration-count: infinite;
        animation-name: glimmer-two, shimmer;
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

  @keyframes shimmer {
    0% {
      opacity: 0.3;
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
      opacity: 0.3;
    }
  }

  @keyframes glimmer-one {
    0% {
      transform:
          translate3d(0%, 100%, 0)
          rotate3d(0, 0, 1, #{$shape-rotate}deg)
          skew(0deg, 0deg)
          scale(1, $shape-scale-max);
    }
    25% {
      transform:
          translate3d(-100%, 0, 0)
          rotate3d(0, 0, 1, 0deg)
          skew(#{$shape-skew}deg, 0deg)
          scale($shape-scale-min, 1);
    }
    50% {
      transform:
          translate3d(0, -100%, 0)
          rotate3d(0, 0, 1, -#{$shape-rotate}deg)
          skew(0deg, #{$shape-skew}deg)
          scale(1, $shape-scale-min);
    }
    75% {
      transform:
          translate3d(100%, 0, 0)
          rotate3d(0, 0, 1, 0deg)
          skew(-#{$shape-skew}deg, 0deg)
          scale($shape-scale-max, 1);
    }
    100% {
      transform:
          translate3d(0, 100%, 0)
          rotate3d(0, 0, 1, #{$shape-rotate}deg)
          skew(0deg, -#{$shape-skew}deg)
          scale(1, $shape-scale-max);
    }
  }

  @keyframes glimmer-two {
    0% {
      transform:
          translate3d(0, -100%, 0)
          rotate3d(0, 0, 1, 0deg)
          skew(-#{$shape-skew}deg, 0deg)
          scale($shape-scale-max, 1);
    }
    25% {
      transform:
          translate3d(100%, 0, 0)
          rotate3d(0, 0, 1, -#{$shape-rotate}deg)
          skew(0deg, #{$shape-skew}deg)
          scale(1, $shape-scale-min);
    }
    50% {
      transform:
          translate3d(0, 100%, 0)
          rotate3d(0, 0, 1, 0deg)
          skew(#{$shape-skew}deg, 0deg)
          scale($shape-scale-min, 1);
    }
    75% {
      transform:
          translate3d(-100%, 0, 0)
          rotate3d(0, 0, 1, #{$shape-rotate}deg)
          skew(0deg, #{$shape-skew}deg)
          scale(1, $shape-scale-max);
    }
    100% {
      transform:
          translate3d(0, -100%, 0)
          rotate3d(0, 0, 1, 0deg)
          skew(-#{$shape-skew}deg, 0deg)
          scale($shape-scale-max, 1);
    }
  }
</style>
