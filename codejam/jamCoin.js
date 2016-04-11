//Coin Jam

var T = 1,
    N = 16,          //6, 16 jamcoin length
    J = 50;          //3, 50 jamcoin number
    upperLimit = 63; //63, 65535
    lowerLimit = 33; //32, 32769
    jamcoinSet = new Set();

function isPrime( num ) {
  //var  isPrime.cache = {};
  ///if ( isPrime.cache[ num ] != null )
  //  return isPrime.cache[ num ];

  //var prime = num != 1; // Everything but 1 can be prime
  for ( var i = 2; i < num; i++ ) {
    if ( num % i == 0 ) {
      return false;
    }
  }
  //isPrime.cache[ num ] = prime
  return true;
}

function isPrimeInterpretStrInBases(str){
  var base, num;
  for (base=2; base<=10; base++){
    if(isPrime(parseInt(str, base))){
      return true;
    }
  }
  return false;
}

function generateValidStr(){
    var str;
    do {
      str = Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit).toString(2).toString();
    }while (str[0] != "1" || str[str.length-1] != "1" ||
      isPrimeInterpretStrInBases(str) || jamcoinSet.has(str));
    jamcoinSet.add(str);
    return str;
}

function getDivisor(n){
  var i, limit = Math.floor(n/2);
  //do {
  //  i = Math.floor(Math.random() * (limit-1) + 2);
  //}while (n % i !== 0)
  for (i=2; i<limit; i++){
    if (n%i === 0)
      return i
  }
}

function nonTrivialDivisors(str){
  var base, divisorsArr = [];
  for (base=2; base<=10; base++){
    divisorsArr.push(getDivisor(parseInt(str, base)));
  }
  return divisorsArr.join(" ");
}

function testCase(numTest){
  var jamcoinStr;
    console.log("Input\t\tOutput\n\n");
    console.log(1 + "\t\t\tCase #1:\n");
    for (var i=1; i<=J; i++){
        jamcoinStr = generateValidStr();
        if (i == 1){
          console.log(N + " " + J + "\t\t\t" + jamcoinStr + "\t" + nonTrivialDivisors(jamcoinStr) + "\n");
        }else {
          console.log("\t\t\t" + jamcoinStr + "\t" + nonTrivialDivisors(jamcoinStr) + "\n");
        }
    }
}

testCase(T);


//test
//var str = "111000";
//console.log(str[0] != "1" && str[str.length-1] != "1");






