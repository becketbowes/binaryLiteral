const sequelize = require('../../controller/connection');
const { Reader, Literal } = require('../');

const readerdata = [
  {
    user: 'sioban',
    email: 'sib0@cbc.ca',
    pass: '1234',
    blackpage: 'true',
  },
  {
    user: 'rogers',
    email: 'neighborhood0@cbc.ca',
    pass: '1234',
    blackpage: 'true',
  },
  {
    user: 'ThickTrunk',
    email: 'america0@aol.ca',
    pass: '1234',
    blackpage: 'false',
  },
  {
    user: 'carawayseeds',
    email: 'carriedaway@poppy.org',
    pass: '1234',
    blackpage: 'true',
  },
  {
    user: 'creeeeepoFrank',
    email: 'notfrankly@west.com',
    pass: '1234',
    blackpage: 'true',
  },
  {
    user: 'NobodyThinkTheyreMe',
    email: 'infinite0@googl.ca',
    pass: '1234',
    blackpage: 'false',
  },
];

const seedreaders = () => Reader.bulkCreate(readerdata, {individualHooks: true});

module.exports = seedreaders;
