const { Literal } = require('../Literal');

const literaldata = [
  {
    title: 'Franklin Minting Money',
    image: 'blimg2.jpg',
    imageAlt: 'flower potatoes',
    keywords: 'green, aranacia, grenoble',
    article: 'I love bankrolls, stank hoes, camera shots, Kangols, bangles Pink records, check it, yeah, I make those More paper than Kinkos, check my lingo, bingo On my face, honey, not a wrinkle, trinkle My twinkle twinkle, make your toenails crinkle Twist up a dinkle',
    readerkey: 6
  },
  {
    title: 'Not all that blooms is healthy',
    keywords: 'kim deal, black francis, joey santiago',
    article: 'Do we have any evidence that time happens in the order that we perceive it? Could it be that the arrow of time the sense of one thing happening after another exists only as an individuals conscious perception tracing a dimensional arc through a omni present, omni chronic reality?',
    readerkey: 3
  },
  {
    title: 'Armpit Waxing Should Be Free',
    image: 'blimg1.jpg',
    imageAlt: 'mary berry',
    keywords: 'smoke, fingernails, aroma',
    article: 'At some point, i began to feel acutely oppressed by the tyranny of mannerism. Having a consistent style and with identifiable persona implies a consistent personality and identity that does not reflect who i am. I struggle to become every day; if i paint the same way today as i did yesterday, then im either lying or ive failed somehow.',
    readerkey: 1
  }
];

const seedliterals = () => Literal.bulkCreate(literaldata);

module.exports = seedliterals;