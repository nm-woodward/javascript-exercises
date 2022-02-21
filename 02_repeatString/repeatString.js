const repeatString = function(string, repeats) {
    let finalString = '';

    if(repeats < 0) {
        return 'ERROR';
    }

    for (let i = 0; i < repeats; i++) {
        finalString += string;
    }

    return finalString;

};


// Do not edit below this line
module.exports = repeatString;
