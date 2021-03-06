// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault:true,
    connection: {
      filename: './data/dev.sqlite3'
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done) // turn on FK enforcement
      },
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations/'
    },
    seeds:{
      directory: './data/seeds/'
    },
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations/'
    },
    seeds:{
      directory: './data/seeds/'
    },
  },

  production: {
    client: 'pg',
    connection: 'postgres://',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations/'
    },
    seeds:{
      directory: './data/seeds/'
    },
  }
}
