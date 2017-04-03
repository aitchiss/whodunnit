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

//Episode3

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )

//prints out 'Jay, Val, Harvey, Rick'
// and then 'suspect three is Keith'

//Episode4

var detective = {
    name : 'Ace Ventura',
    pet : 'monkey'
  }

var printName = function(detective) {
  return detective.name
}

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
}

console.log(detectiveInfo());

//prints out Poirot. DetectiveInfo function is called, which reassigned the detective's namd before printing it out.