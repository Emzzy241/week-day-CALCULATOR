const path = require("path");

// we did require("path") to configure the path where our output files will be saved

// after downloading the htmlWebpackPlugin, let us now update this file to work with this dependency: NOTE: by now 
// we ought to have moved our index.html file away from the dist directory



const HtmlWebpackPlugin = require("html-webpack-plugin");

// update the configuration file to work with the clean up plugin we just downloaded
// we first require the new plugin and save it in a variable
// then we add it to module.exports in the plugin section below
// lastly we create a new instance of the plug in and then specify that we would like our dist folder cleaned out
// now when we run npm run build, webpack will automatically clean out the contents of our dist folder before creating new bundle files.... once again THIS IS ALL THANKS TO the webpack Cleanup plug in


const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// we need CleanWebpackPlugin because as we add more assets to our application , our "dist" folder will get cluttered and webpack won't automatically clean itself to avoid cluttering.... and that is why we need CleanWebpackPlugin

// the ESLint configuration
const ESLintPlugin = require('eslint-webpack-plugin');






module.exports = {   
    
    entry: "./src/main.js",
    // entry is the JS file where webpack will enter our application and then use a dependency graph all other required JS files for our application to work
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    
    //  the updated code for hosting

    devtool: 'eval-source-map',
    devServer: {
        static: './dist'

        // the eval-source-map shows us the error of our code in our code and not in our bundled code that's concatenated, minified and unreadable. So the error can be easily traceable, the eval-source-map is slower than other source-maps but so far it shows the error in our code and not in our bundled code, we're good to go with it
    },
    
    plugins: [

    new CleanWebpackPlugin(),
    new ESLintPlugin({
      context: "compiler.context",
      eslintPath: "eslint",
      extensions: 'js',
      exclude: 'node_modules',
      fix: false,
      formatter: 'stylish',
      lintDirtyModulesOnly: false,
      threads: false,
      emitError: true,
      emitWarning: true,
      failOnError: true,
      failOnWarning: false,
      quiet: false,
      outputReport: false
    }),
    new HtmlWebpackPlugin({
      title: 'Weekday Calculator',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  
};
