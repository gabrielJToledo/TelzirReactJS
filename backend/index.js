const app = require('express')()
const db = require('./config/db')
const consign = require('consign')
const { createDB } = require('./factories/createDB')
const { createTableDDD } = require('./factories/createTableDDD')
const { insertDDD } = require('./factories/insertDDDs')
const { executeSQL } = require('./repositories/mysql')
const {con} = require('./infrastructuries/mysql')

try {
    executeSQL(con, createDB)
    executeSQL(con, createTableDDD)
    executeSQL(con, insertDDD)
}catch{
} finally {
    app.db = db

    consign().then('./api').then('./config/middlewares.js').then('./config/routes.js').into(app)
    
    app.listen(3050, () => console.log('Backend sendo executado na porta 3050'))
}


