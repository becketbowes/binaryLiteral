const sequelize = require('../../controller/connection');
const { Comment } = require('../');

const commentdata = [
  {
    text: 'Americans tend to steal Cheese',
    readerkey: 3,
    literalKey: 1
  },
  {
    text: 'Armor is not a replacement for good sense, at least thats how i see it.',
    readerkey: 1,
    literalKey: 3
  },
  {
    text: 'cologne, merangue, papaya',
    readerkey: 4,
    literalKey: 2
  },
  {
    text: 'Bitcoins stealth rally over the past two weeks pushed it past a key level of $45,000.',
    readerkey: 3,
    literalKey: 2
  },
  {
    text: 'paraphrased and already cryptic passage',
    readerkey: 2,
    literalKey: 1
  },
  {
    text: 'to the syntax of things will never wholly kiss you; wholly to be a fool while Spring is in the world',
    readerkey: 1,
    literalKey: 3
  },
  {
    text: 'for lifes not a paragraph',
    readerkey: 5,
    literalKey: 3
  },
];

const seedcomments = () => Comment.bulkCreate(commentdata);

module.exports = seedcomments;
