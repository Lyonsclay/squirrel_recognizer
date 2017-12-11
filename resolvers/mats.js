const mats = require('../data/songs')
const grids = require('../data/grids')
const { find } = require('lodash')
const shortid = require('shortid')
const { save } = require('./save-to-file')

const allMats = () => mats

const mat = (_, { id, name }) => find(mats, { id, name })

module.exports = { mat, allMats }
