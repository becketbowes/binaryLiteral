// const sequelize = require('../../controller/connection');
const { Literal } = require('../Literal');

const literaldata = [
  {
    title: 'Franklin Minting Money',
    image: 'blimg2.jpg',
    imageAlt: 'flower potatoes',
    keywords: 'green, aranacia, grenoble',
    article: 'I love bankrolls, stank hoes, camera shots, Kangols, bangles Pink records, check it, yeah, I make those More paper than Kinkos, check my lingo, bingo On my face, honey, not a wrinkle, trinkle My twinkle twinkle, make your toenails crinkle Twist up a dinkle, and honey, lets mingle, jingle When the nightfall, Im tight with my white walls The greedy pain, draining on my life force Behold the pale white horse, the hype loss with tight jaws Fight law off, cause I dont like yall Huh, Im from the tar pits, the hard target to squash the market Youre brain washed, watch the starships I make cars flip, Deck bomb atomic, Islamic arms Kiss the comet, this time, hes gone I grip the don, rip arms out the socket, cock it Fly logic, now watch me sky rocket, watch it Hot as the tropic get, bulletproof asaphogus Steel cage confidence, burn it on a floppy disc Swerve the metropolis, my whole team in back of me You just a half of ki, Im a coke factory',
    readerkey: 6
  },
  {
  title: 'Not all that blooms is healthy',
  keywords: 'kim deal, black francis, joey santiago',
  article: 'Do we have any evidence that time happens in the order that we perceive it? Could it be that the arrow of time the sense of one thing happening after another exists only as an individuals conscious perception tracing a dimensional arc through a omni present, omni chronic reality?  That every infinitesimal choice we make is a an infinitesimal node that already exists and that our experience- our consciousness, our experience with this particular moment, the sense of you currently have of reading this sentence, that consciousness is the only manifestation of time as we know it.  That consciousness and time essentially are the same thing in a reality of all possible weres, ises and whatwillbes, a truly infinite timespace of everwhere and everytime. And that infinity is much larger than it sounds - you could literally go forever and youd still never reach the edge.',
  readerkey: 3
  },
  {
    title: 'Armpit Waxing Should Be Free',
    image: 'blimg1.jpg',
    imageAlt: 'mary berry',
    keywords: 'smoke, fingernails, aroma',
    article: 'At some point, i began to feel acutely oppressed by the tyranny of mannerism. Having a consistent style and with identifiable persona implies a consistent personality and identity that does not reflect who i am. I struggle to become every day; if i paint the same way today as i did yesterday, then im either lying or ive failed somehow.  I dont think thats uncommon in contemporary art or even modernism. Most artists have very diverse bodies of work. After painting anything the same way for a while, it becomes a rote exercise. You are no longer becoming something new. Being the impatient poser that i am, i think this happens faster than usual for me. Right now i dont want to make the same mark on more than two canvases; id rather move on, find a different mark to make,; a different way to be. Become something new.',
    readerkey: 1
  }
];

const seedliterals = () => Literal.bulkCreate(literaldata);

module.exports = seedliterals;