import { Client } from 'pg';

const client = new Client({ connectionString: process.env.DATABASE_URL });

client
  .connect()
  .then(() => console.log('PostgreSQL is connected to database:'));

export default client;
