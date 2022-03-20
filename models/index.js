const Reader = require('./Reader');
const Literal = require('./Literal');
const Neat = require('./Neat');
const Comment = require('./Comment');

//define relationships
Reader.hasMany(Literal, { foreignKey: 'readerKey' });
Reader.belongsToMany(Literal, { through: Neat, as: 'ohNeat', foreignKey: 'readerKey' });
Reader.hasMany(Neat, { foreignKey: 'readerKey' });
Reader.hasMany(Comment, { foreignKey: 'readerKey' });
Literal.belongsTo(Reader, { foreignKey: 'readerKey' });
Literal.belongsToMany(Reader, { through: Neat, as: 'ohNeat', foreignKey: 'literalKey' });
Literal.hasMany(Neat, { foreignKey: 'literalKey' });
Literal.hasMany(Comment, { foreignKey: 'literalKey'});
Neat.belongsTo(Reader, { foreignKey: 'readerKey' });
Neat.belongsTo(Literal, { foreignKey: 'literalKey' });
Comment.belongsTo(Reader, { foreignKey: 'readerKey' });
Comment.belongsTo(Literal, { foreignKey: 'literalKey' });

module.exports = { Reader, Literal, Neat, Comment };