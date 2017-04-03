//Episode1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
}

printName();

//prints out Keith, since name within the function can see out to the global variable

//Episode2

score = 5;

var result = function() {
  var score = 3;
  return score;
}

console.log(result());
//prints out 3. It looks at the closest-scope 'score'