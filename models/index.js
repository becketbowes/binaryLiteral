const Reader = require('./Reader');
const Literal = require('./Literal');

//define relationships
Reader.hasMany(Literal, { foreignKey: 'readerKey' });
Literal.belongsTo(Reader, { foreignKey: 'readerKey' });

module.exports = { Reader, Literal };