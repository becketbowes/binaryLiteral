const Reader = require('./Reader');
const Literal = require('./Literal');
const Neat = require('./Neat');

//define relationships
Reader.hasMany(Literal, { foreignKey: 'readerKey' });
Literal.belongsTo(Reader, { foreignKey: 'readerKey' });
Reader.belongsToMany(Literal, { through: Neat, as: 'ohNeat', foreignKey: 'readerKey' });
Literal.belongsToMany(Reader, { through: Neat, as: 'ohNeat', foreignKey: 'literalKey' });
Neat.belongsTo(Literal, { foreignKey: 'literalKey' });
Literal.hasMany(Neat, { foreignKey: 'literalKey' });
Neat.belongsTo(Reader, { foreignKey: 'readerKey' });
Reader.hasMany(Neat, { foreignKey: 'readerKey' });

module.exports = { Reader, Literal, Neat };