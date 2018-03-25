const mix = require('laravel-mix');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const SRC = {
  fonts: 'src/style/fonts',
  index: 'src/index.html',
  main: 'src/main.js',
  styles: 'src/style/global.scss'
};

const DEST = 'dist/';

mix.js(SRC.main, DEST);
mix.sass(SRC.styles, DEST);
mix.copy(SRC.fonts, DEST);
mix.copy(SRC.index, DEST);
mix.config.fonts

// Custom webpack config
if (mix.inProduction()) {
  mix.webpackConfig({
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  });
}