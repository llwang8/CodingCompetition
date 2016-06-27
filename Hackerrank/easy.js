//Hackerrank
//

//Plus Minus
/*
Given an array of integers, calculate which fraction of its elements are positive,
which fraction of its elements are negative, and which fraction of its elements are zeroes,
respectively. Print the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six
decimal places, though answers with absolute error of up to  are acceptable.
*/
function plusMinus(arr){
    var countPlus = 0, countMinus = 0, countZero = 0, countTotal, result = "";
    arr.forEach(funciton(item){
        if (item > 0){
            countPlus++;
        }else if (item < 0){
            countMinus++
        }else {
            countZero++;
        }

    });

    countTotal = arr.length;
    result += (countPlus / countTotal).toFixed(6) + "\n";
    result += (countMinus / countTotal).toFixed(6) + "\n";
    result += (countZero / countTotal).toFixed(6) + "\n";
    console.log(result);
}