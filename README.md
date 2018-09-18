# webpack-foundation-boilerplate

## Description
This is a boilerplate starter project featuring Webpack 4 bundler and Foundation for sites 6 framework. The features include:
-  [x] Webpack Development & Production configurations
-  [x] Babel
-  [x] Sass
-  [x] Postcss with Autoprefixer
-  [x] jQuery
-  [x] Js, CSS minify

## Usage
Make sure you have the latest Stable or LTS version of Node.js installed.
1. `git clone https://github.com/rpajo/webpack-foundation-boilerplate.git`
2. Run `npm install` or `yarn install`
3. Start the development server using `npm run serve`
3. Open [http://localhost:9000](http://localhost:9000)

## Available Commands
- `npm run serve` - Run the live-reload development server
- `npm run build` - Build the production bundle

### Notes
The production and development configurations  are located in `webpack.config.prod.js` and `webpack.config.dev.js` respectively.

The configs use some common plugins and loaders. The development bundler also runs the `BundleAnalyzerPlugin`. The foundation settings file has been oved to the project folder for convenience. You can of course tweak the imports/plugins/loaders to your liking.

### License 
Licensed under the MIT license.
