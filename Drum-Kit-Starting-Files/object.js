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
}

const houseKeeper1 = new HouseKeeper("Jane", 12, ["bathroom", "lobby", "bedroom"])
const houseKeeper2 = new HouseKeeper("Tom", 9, ["lobby", "bedroom"])
const houseKeeper3 = new HouseKeeper("Omi", 8, ["bedroom", "kitchen"])

console.log(houseKeeper1.name);
