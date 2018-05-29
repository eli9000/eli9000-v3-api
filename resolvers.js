// import db from './db';

const query = {
  dev: 'SELECT * FROM development ORDER BY id ASC',
  contact: 'SELECT * FROM contact_info ORDER BY id ASC',
};

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    skills: async (_, args, { db }) => {
      const { rows } = await db.query(query.dev);
      return rows;
    },
    contacts: async (_, args, { db }) => {
      const { rows } = await db.query(query.contact);
      return rows;
    },
  },
};
