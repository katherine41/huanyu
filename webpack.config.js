var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry:'./app/index.jsx',
  output:{
    path:__dirname,
    filename:'./public/bundle.js'
  },
  resolve:{
    modules: [
     path.join(__dirname, "dist"),
          "node_modules"
    ],
    alias:{
      "~NavBar":path.resolve(__dirname,'./components/NavBar.jsx'),
      "~App":path.resolve(__dirname,'./app.jsx')
   
      },
    extensions:['.','.js','.jsx']
  },
  module:{
    loaders:[
      {
        loader:'babel-loader',
        query:{
          presets:['react','es2015']
        },
        test:/\.jsx?$/,
        exclude:/(node_module|bower_components)/
      },
        {
            test:/\.css$/,
            loader:'style-loader!css-loader',
        }
    ]
  },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]

};
