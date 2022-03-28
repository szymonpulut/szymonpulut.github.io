/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.createPages = async ({ actions }) => {
  actions.createRedirect({
    fromPath: '/td-gif/',
    toPath: 'https://gfycat.com/weakrewardingcaterpillar',
    statusCode: 200,
  })

  actions.createRedirect({
    fromPath: '/td-gif/*',
    toPath: 'https://gfycat.com/weakrewardingcaterpillar',
    statusCode: 200,
  })
}
