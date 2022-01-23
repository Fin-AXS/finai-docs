const {resolve} = require('path');

exports.createPages = async ({graphql, actions}) => {
  const {data} = await graphql(`
    query Guides {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            tag
          }
          fileAbsolutePath
        }
      }
    }
  `);
  data.allMarkdownRemark.nodes.forEach(node => {
    const {slug, tag} = node.frontmatter;
    actions.createPage({
      path: `/${tag}/${slug}`,
      component: resolve('./src/templates/documentation.js'),
      context: {slug}
    });
  });
};
