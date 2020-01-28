const config = require('./src/assets/content/data/config.json')

module.exports = {
  siteName: config.title,
  //need this for forestry preview docker image
  host: process.env.HOSTNAME,
  port: 8080,
  //----------------
  //make editable config & data files available to graphql
  metaData: {
    siteName: config.title,
    siteDescription: config.description,
    siteConfig: config
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'ProjectPost',
        baseDir: './src/assets/content/',
        path: 'projects/**/*.md',
        resolveAbsolutePaths: false,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
        }
      }
    }
  ]
}
