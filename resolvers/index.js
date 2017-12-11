// const { allMats, mat, addMat } = require('./mats')
const { allColors, color, addColor } = require('./colors')
const { allRows, row, addRow } = require('./rows')

const resolvers = {
  Query: {
    allColors,
    color,
    allRows,
    row,
  },
  Mutation: {
    addColor,
    addRow,
  }
}
