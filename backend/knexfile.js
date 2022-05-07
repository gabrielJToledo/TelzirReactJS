require('dotenv').config()

module.exports = {
    client: 'mysql2',
    connection: {
      host: process.env.IP_LOCALHOST,
      port: 3310,
      user: 'root',
      password: '987412365',
      database: 'telzir'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
