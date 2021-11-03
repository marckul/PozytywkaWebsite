/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const StringTools = require('./node-tools/stringTools')

console.log("\n\n\n!!!!!!!!!!!!!!!!!!!!!!");
console.log(`.env.${process.env.NODE_ENV}`); // production
console.log("\n!!!!!!!!!!!!!!!!!!!!!!\n\n\n");


/* 
  HOW TO ALLOW ES6 IMPORTS IN GATSBY-NODE.JS
  https://github.com/gatsbyjs/gatsby/issues/7810
*/
const TemplatesRegister = {
  "Post": "artykul-template.js",
  "page": "page-template.js",
}

exports.createPages = async function ({ actions, graphql }) {

  console.log("|||||   CREATE PAGES   |||||");
  

  const { data } = await graphql(`
    query {
      allStoryblokEntry {
        nodes {
          content
          full_slug
          slug
          is_startpage
        }
      }
    }
  `)

  
  
  data.allStoryblokEntry.nodes.forEach( story => {
    story.content = JSON.parse(story.content) 
    const Template = TemplatesRegister[story.content.component]

    console.log(`\n\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`);
    console.log(`CONTENT TYPE ${story.content.component}`);

    if (typeof Template !== "undefined") {
      const templateFullPath = require.resolve(`./src/templates/${Template}`)
      
      
      console.log(`FULL SLUG: ${story.full_slug}`);
      
      // const slug = story.slug
      // const fullSlug = story.full_slug
      // const rootPath = StringTools.RootPath(fullSlug)
      // console.log(`ROOT PATH: ${rootPath}`);

      actions.createPage({
        path: story.full_slug,
        component: templateFullPath,
        context: { 
          slug: story.slug,
          fullSlug: story.full_slug
        },
      })
      
    }
    



  })

}