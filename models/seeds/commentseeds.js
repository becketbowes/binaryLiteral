const sequelize = require('../../controller/connection');
const { Comment } = require('../Comment');

const commentdata = [
  {
    text: 'Americans tend to steal Cheese',
    readerkey: 6,
    literalKey: 1
  },
  {
    text: 'Armor is not a replacement for good sense, at least thats how i see it.',
    readerkey: 6,
    literalKey: 8
  },
  {
    text: 'cologne, merangue, papaya',
    readerkey: 3,
    literalKey: 10
  },
  {
    text: 'Bitcoins stealth rally over the past two weeks pushed it past a key level of $45,000.',
    readerkey: 3,
    literalKey: 18
  },
  {
    text: 'paraphrased and already cryptic passage',
    readerkey: 7,
    literalKey: 5
  },
  {
    text: 'to the syntax of things will never wholly kiss you; wholly to be a fool while Spring is in the world',
    readerkey: 1,
    literalKey: 20
  },
  {
    text: 'for lifes not a paragraph',
    readerkey: 6,
    literalKey: 7
  },
];

const seedcomments = () => Comment.bulkCreate(commentdata);

module.exports = seedcomments;
