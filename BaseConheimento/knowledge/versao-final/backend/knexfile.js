const  db  = {
	host: '127.0.0.1',
    port: 5432,
    database: 'knowledge_final',
    user: 'postgres',
    password: '123'
}

module.exports = {
	client: 'postgresql',
	connection: db,
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
