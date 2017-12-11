const { find } = require('lodash')
const shortid = require('shortid')
const { save } = require('./save-to-file')
const rows = require('../data/rows')
const colors = require('../data/colors')

const allRows = () => rows

const row = (_, { id, name }) => find(rows, { id, name })

const addRow = (_, { name, color0ID, color1ID }) => {
  const row = {
    id: shortid.generate(),
    name,
    col0: find(colors, { id: color0ID }),
    col1: find(colors, { id: color1ID }),
  }
  rows.push(row)
  save(rows, 'rows.json')

  return row
}

module.exports = { allRows, row, addRow }
