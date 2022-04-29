const executeSQL = (con, sql) => {
    con.connect(function(err) {
        con.query(sql, function (err, result) {
        })})
}

module.exports = { executeSQL }