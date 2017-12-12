const { find } = require('lodash')
const shortid = require('shortid')
const { save } = require('./save-to-file')
const rows = require('../data/rows')
const colors = require('../data/colors')

const allRows = () => rows

const row = (_, { id, name }) => find(rows, { id, name })

const addRow = (_, {
  name,
  color0id,
  color1id,
  color0name,
  color1name,
}) => {
  const color0 = find(colors, {  name: color0name }) || { id: color0id }
  const color1 = find(colors, {  name: color1name }) || { id: color1id }
  const row = {
    id: shortid.generate(),
    name,
    col0id: color0.id,
    color0: color0,
    col1id: color1.id,
    color1: color1
  }
  rows.push(row)
  save(rows, 'rows.json')

  return row
}

module.exports = { allRows, row, addRow }
