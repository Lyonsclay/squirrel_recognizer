const { find } = require('lodash')
const shortid = require('shortid')
const { save } = require('./save-to-file')
const mats = require('../data/mats')
const grids = require('../data/grids')

const allMats = () => mats

const mat = (_, { id, name }) => find(mats, { id, name })

const addMat = (_, { name, gridID}) => ({
  id: shortid.generate(),
  name,
  grid: find(grids, { id: gridID }),
})

module.exports = { allMats, mat, addMat }
