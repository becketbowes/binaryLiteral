module.exports = {
    // binaryLiteral: (banana) => {
    //     const binary = [];
    //     const string = banana.split('');
    //     string.forEach(function (element) { 
    //         binary.push(element.charCodeAt(0).toString(2));
    //     });
    //     const binaryString = binary.toString().split(',').join(' ');
    //     return binaryString;
    // },  
    getYear: () => {
        const year = Date.getFullYear;
        return year;
    },
    formatPlural: (word, amount) => {
        if (amount !== 1) { return `${word}s`; }
        return word;
    }
}