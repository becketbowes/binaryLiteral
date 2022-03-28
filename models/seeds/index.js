const seedreaders = require('./readerseeds');
const seedliterals = require('./literalseeds');
const seedcomments = require('./commentseeds');
const seedneats = require('./neatseeds');

const sequelize = require('../../controller/connection');

const sowTheSeeds = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedreaders();
  console.log('--------------');

  await seedliterals();
  console.log('--------------');

  await seedcomments();
  console.log('--------------');

  await seedneats();
  console.log('--------------');

  process.exit(0);
};

sowTheSeeds();
