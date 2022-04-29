const { createDB } = require('./factories/createDB')
const { createTableDDD } = require('./factories/createTableDDD')
const { insertDDD } = require('./factories/insertDDDs')
const { executeSQL } = require('./repositories/mysql')
const {con} = require('./infrastructuries/mysql')

executeSQL(con, createDB)
executeSQL(con, createTableDDD)
executeSQL(con, insertDDD)