const hero = {
  name: "Hero",
  heroic: true,
  inventory:[],
  health: 10,
  weapon: {
    type: "sword",
    damage: 2
  }
}

function rest(person){
  if (person.health === 10){
    alert("You are already healthy");
    return null;
  } else {
    person.health = 10;
  }
  return person
}

function pickUpItem(person, weapon){
  person.inventory.push(weapon);
  return person
}

function equipWeapon(person){
  if (person.inventory.length !== 0) {
    person.weapon = person.inventory[0];
  } 
  return person;
}

function invokeRest() {
  rest(hero);
};

function invokePickUpItems() {  
  pickUpItem(hero, {type: "dagger",
  damage: 2})
}

function invokeEquipWepon(){
  equipWeapon(hero)
}