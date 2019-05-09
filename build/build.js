import { resolve } from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import baseConfig from '.';
import merge from 'webpack-merge';
import SemverWebpackPlugin from 'semver-webpack-plugin';

export default merge(baseConfig, {
  entry: './src/main.js',
  output: {
    library: 'ReactConditionManager',
    libraryTarget: 'umd',
    filename: 'index.js'
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom'
    },
    classnames: {
      commonjs: 'classnames',
      commonjs2: 'classnames',
      amd: 'classnames',
      root: 'classNames'
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'prop-types',
      root: 'PropTypes'
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/components/style.scss',
        to: '.'
      },
      {
        from: './src/assets',
        to: 'assets'
      }
    ])
  ]
});
