
// Tuesday: Find the longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number. For these algorithms you are allowed to use the split() method.


// findLongestWord("The quick brown fox jumped over the lazy dog")should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog")should return 6.
// findLongestWord("May the force be with you") should return 5.



    let str = "May the forceessss be with you";

    function longestWord(str) { 
    let newStr = str.split(" ");
    let longestWord = newStr[0].length;
    for(let i=0; i<newStr.length; i++){
        if(newStr[i].length > longestWord){            
            longestWord = newStr[i].length;
        }
    }
    return longestWord;
    }
    console.log(longestWord(str));