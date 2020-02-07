//
// const houseKeeper1 = {
//   name: "Jane",
//   yearsOfExperience: 12,
//   cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
// }

function HouseKeeper (name, yearsOfExperience, cleaningRepertoire) {
  this.name = name;
  this.yearsOfExperience = yearsOfExperience;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function () {
    alert("Cleaning in progress ... ")
  }
}

const houseKeeper1 = new HouseKeeper("Jane", 12, ["bathroom", "lobby", "bedroom"])
const houseKeeper2 = new HouseKeeper("Tom", 9, ["lobby", "bedroom"])
const houseKeeper3 = new HouseKeeper("Omi", 8, ["bedroom", "kitchen"])

console.log(houseKeeper1.name);


// TL;DR keypress is now deprecated, you should use keydown instead.
//
// Just a quick heads up, as technology moves incredibly fast, every week or so something else will change. This is just a quick reminder that in the next lesson, when we cover detecting key presses, you should be using the keydown event listener instead of keypress.
