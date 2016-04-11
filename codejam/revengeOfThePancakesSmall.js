//Revenge of the Pancakes

function pancakeStack(str){
    var i, j, k,
        count = 0,
        arr = str.split(''),
        length = arr.length;
    while(!checkAllHappy()){
        for (i=0; i<=length-2; i++){
            if (arr[i] != arr[i+1]){
                count ++;
                flipPancakes(i);
                //console.log(arr);
                break;
            }
        }
    }
    return count;

    function checkAllHappy(){
        for (j=0; j<=length-2; j++){
            if (arr[j] != arr[j+1]){
                return false;
            }
        }
        return true;
    }

    function flipPancakes(index){
        var newArr = [];
        var pos = 0;
        var orgSubArr = arr.slice(index+1);
        for (k=index; k>=0; k--){
            if (arr[k] == "+"){
                newArr[pos] = "-";
            }else {
                newArr[pos] = "+";
            }
            pos++;
        }
        //console.log(newArr);
        arr = newArr.concat(orgSubArr);
    }

}
//string = "+++++";
//pancakeStack(string);
// string length 0<=Length <=10
function testCase(numTest){
    console.log("Input\t\tOutput\n\n");

    for (var i=1; i<=numTest; i++){
        var str = Math.floor(Math.random() * 1023 + 1).toString(2).toString().replace(/1/g, "+").replace(/0/g, "-");
        //console.log(str);
        console.log(str + "\t\tCase # " + i + ": " + pancakeStack(str) + "\n");
    }
}

testCase(99); //1 ≤ T ≤ 100.