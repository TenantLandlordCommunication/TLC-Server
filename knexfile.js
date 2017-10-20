// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgress://localhost/tlc'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL

}
};
