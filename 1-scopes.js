aHero = () => {
  const hero = ['superman','batman','spider-man','daredevil','iron-man','wolverine','black panther', 'black widow', 'thor']
  return hero[Math.floor(Math.random() * hero.length)]
}

// global scope
var hero = aHero();

var newSaga = function () {
  // middle scope
  var foil = aFoil();
  var saga = function () {
    // inner scope
    var deed = aDeed();
    console.log(hero + deed + foil)
  }
  saga();
  saga();
}

newSaga();
newSaga();

console.log(hero);