//A javascript fuction that takes in the word and write to the console "Isogram"//
function Isogram(str) { //the function name//

    var word = str.split('');
    for (var i = 0, j = 1; i < word.length - 1; i++ , j++) {
        if (word[i] == word[j]) {  //the conditional statment//
            console.log("Isogram");
            return false;
        }
    }
    console.log('Not Isogram');
    return true;
}

isIsogram("six-year-old");//the output of the function//