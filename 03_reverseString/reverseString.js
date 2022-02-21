const reverseString = function(inputString) {

    let stringArray = inputString.split(" ");

    let finalString = '';

    stringArray.forEach((element) => {
        let elementSplit = element.split("");
        elementSplit = elementSplit.reverse();
        let elementFinal = elementSplit.join("");
        finalString = finalString + ' ' + elementFinal;
      });

      finalString = finalString.split(" ");
      finalString = finalString.reverse("");
      finalString = finalString.join(" ").trim();

    return finalString;

};

// Do not edit below this line
module.exports = reverseString;
