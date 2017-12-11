const { find } = require('lodash')
const shortid = require('shortid')
const { save } = require('./save-to-file')
const colors = require('../data/colors')

const allColors = () => colors

const color = (_, { id, name }) => find(colors, { id, name })

const addColor = (_, { name, red, green, blue }) => {
  const color = {
    id: shortid.generate(),
    name,
    red,
    green,
    blue,
  }
  colors.push(color)

  return color
}

module.exports = { allColors, color, addColor }
