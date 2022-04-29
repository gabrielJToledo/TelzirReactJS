module.exports = {
    client: 'mysql2',
    connection: {
      host: '172.20.32.1',
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
