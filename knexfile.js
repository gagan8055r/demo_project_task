module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'Gagan@489',
            database: 'SecondDb',
        },
        migrations: {
            directory: './migrations',
        },
        seeds: { directory: './seeds' },

    }
    ,
    production: {
        client: 'pg',
        connection: process.env.DB_URL,
        migrations: {
            directory: './migrations',
        },
        seeds: { directory: './seeds' },
    },

};