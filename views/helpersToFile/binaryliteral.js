// const text = 'This is the least functional function that i have ever seen.';

const binaryLiteral = function(text) {
    text = text.split('')
    const binaryArray = []
    text.forEach(function (element){
        binaryArray.push(element.charCodeAt(0).toString(2));
    });
    const binaryText = binaryArray.toString().split(',').join(' ');
    return binaryText;
};

module.exports = binaryLiteral; 