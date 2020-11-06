module.exports = {
    development: {
      client: "postgresql",
      connection: "postgres://postgres@localhost:5432/projects",
      migrations: {
        tableName: "knex_migrations"
      }
    },
  };