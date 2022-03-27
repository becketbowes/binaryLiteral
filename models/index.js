const Reader = require('./Reader');
const Literal = require('./Literal');
const Neat = require('./Neat');
const Comment = require('./Comment');

//define relationships
Reader.hasMany(Literal, { foreignKey: 'readerkey' });
Reader.belongsToMany(Literal, { through: Neat, as: 'ohNeat', foreignKey: 'readerkey' });
Reader.hasMany(Neat, { foreignKey: 'readerkey' });
Reader.hasMany(Comment, { foreignKey: 'readerkey' });
Literal.belongsTo(Reader, { foreignKey: 'readerkey' });
Literal.belongsToMany(Reader, { through: Neat, as: 'ohNeat', foreignKey: 'literalKey' });
Literal.hasMany(Neat, { foreignKey: 'literalKey' });
Literal.hasMany(Comment, { foreignKey: 'literalKey'});
Neat.belongsTo(Reader, { foreignKey: 'readerkey' });
Neat.belongsTo(Literal, { foreignKey: 'literalKey' });
Comment.belongsTo(Reader, { foreignKey: 'readerkey' });
Comment.belongsTo(Literal, { foreignKey: 'literalKey' });

module.exports = { Reader, Literal, Neat, Comment };