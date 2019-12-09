// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ful-stack',
  templates: {
    Blogpost: [
      {
        path: '/blog/:title',
        component: './src/templates/Blogpost.vue'
      }
    ]
  },
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
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: false,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
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
