// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-strapi',
      options: {
        apiURL: 'http://api:1337',
        contentTypes: ['blogpost'],
        plural: true,
      }
    },
    {
      use: 'gridsome-plugin-tailwind',
      options: {
        config: './tailwind.config.js'
      }
    }
  ],
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true
      }
    }
  }
}
