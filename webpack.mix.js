const mix = require('laravel-mix');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const SRC = {
  index: 'src/index.html',
  main: 'src/main.js',
  styles: 'src/style/global.scss'
};

const DEST = 'dist/';

mix.config.resourceRoot = '';
mix.config.publicPath = 'dist';

mix.js(SRC.main, DEST);
mix.sass(SRC.styles, DEST);
mix.copy(SRC.index, DEST);

// Custom webpack config
if (mix.inProduction()) {
  mix.webpackConfig({
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  });
}
