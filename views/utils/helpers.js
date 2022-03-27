module.exports = {
    binaryLiteral: (banana) => {
        //you can't have a banana split if you don't have a banana
        if (banana && banana.length > 0) {
            const binary = [];
            const string = banana.split('');
            string.forEach(function (element) { 
                binary.push(element.charCodeAt(0).toString(2));
            });
            const binaryString = binary.toString().split(',').join(' ');
            return binaryString;
        } else {
            return banana;
        }
    },  
    getYear: () => {
        const year = Date.getFullYear;
        return year;
    },
    formatPlural: (word, amount) => {
        if (amount !== 1) { return `${word}s`; }
        return word;
    }
}