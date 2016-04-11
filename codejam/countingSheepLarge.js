//Counting Sheep

function countingSheepSmall(numTest){
    var count =1, result = {};
    //if (numTest < 1 || numTest > 100){
    //   throw new Error("invalid input");
    //}
    console.log("Input\t\tOutput\n");
    console.log(numTest + "\n");
    while (count <= numTest){
        var N = Math.floor(Math.random() * 100000);
        console.log(N + "\t\tCase # " + count + ": " + lastNumBeforeFallAsleep(N) + "\n");
        count ++;
    }
}

function lastNumBeforeFallAsleep(n){
    var d, i, arr;
    var digitsSet = new Set();

    for (i=1; i<50; i++){
        arr = (i * n).toString().split('');
        for (d of arr){
            if (!digitsSet.has(d)){
                digitsSet.add(d);
                if (digitsSet.size == 10){
                    return i*n;
                }
            }
        }
    }
    return "INSOMNIA";
}

countingSheepSmall(99);


function lastNumBeforeFallAsleep2(n){
    var i, j, arr;
    var digitsArr = [];

    for (i=1; i<50; i++){
        arr = (i * n).toString().split('');
        for (j=0; j<arr.length; j++ ){
            if (digitsArr.indexOf(arr[j]) == -1){
                digitsArr.push(arr[j]);
                if (digitsArr.length == 10){
                    return i * n;
                }
            }
        }
    }
    return "INSOMNIA";
}
lastNumBeforeFallAsleep2(2);