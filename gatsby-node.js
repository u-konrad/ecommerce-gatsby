const path = require("path")

const categoriesF = ['kurtki','sukienki','swetry','spodnie','koszule','t-shirty']
const categoriesM = ['kurtki','swetry','spodnie','koszule','t-shirty']


exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  categoriesF.forEach(category => {
    createPage({
      path: `/women/${category}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category,
        gender:'female'
      },
    })
  })

  categoriesM.forEach(category => {
    createPage({
      path: `/men/${category}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category,
        gender:'male'
      },
    })
  })
}
