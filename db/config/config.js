const env = process.env.NODE_ENV || 'development';

export default {
  [env]: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS || null,
    database: process.env.DB_NAME || 'crypto-corners',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'postgres',
  },
};
