const sequelize = require('../../controller/connection');
const { Neat } = require('../');

const neatdata = [
  {
    literalKey: 1,
    readerkey: 5
  },
  {
    literalKey: 2,
    readerkey: 3
  },
  {
    literalKey: 2,
    readerkey: 2
  },
  {
    literalKey: 1,
    readerkey: 2
  },
  {
    literalKey: 3,
    readerkey: 5
  },
];

const seedneats = () => Neat.bulkCreate(neatdata);

module.exports = seedneats;
