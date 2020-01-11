const hero = {
  name: "Super Man",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "sword",
    damage: 2
  }
}

const enemy = {
  name: "General Zod",
  heroic: false,
  inventory: [],
  health: 10,
  weapon: {
    type: "dragger",
    damage: 2
  }
}

function submitName() {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const getHeroName = document.getElementById("heroName");
  const heroName = capitalizeFirstLetter(getHeroName.value);
  const getEnemyName = document.getElementById("enemyName");
  const enemyName = capitalizeFirstLetter(getEnemyName.value);
  if (heroName) {
    hero.name = heroName;
  }
  if (enemyName) {
    enemy.name = enemyName;
  }
  getHeroName.value = "";
  getEnemyName.value = "";
  displayStat();
}

function rest(person) {
  if (person.health === 10) {
    alert("You are already healthy");
    return null;
  } else {
    person.health = 10;
  }
  return person
}

function pickUpItem(person, weapon) {
  person.inventory.push(weapon);
  return person
}

function equipWeapon(person) {
  if (person.inventory.length !== 0) {
    person.weapon = person.inventory[0];
  }
  return person;
}

function invokeRest() {
  rest(hero);
  displayStat();
};

function invokePickUpItems() {
  pickUpItem(hero, {
    type: "dagger",
    damage: 2
  });
  const draggerElement = document.querySelector(".dragger-item");
  draggerElement.classList.add("hideMe");
}

function invokeEquipWepon() {
  equipWeapon(hero);
  displayStat();
}

const displayStatDiv = document.querySelectorAll(".displayStat");
//Hero Element
const createHeroName = document.createElement("h3");
const createHeroHealth = document.createElement("p");
const createHeroCurrentWeapon = document.createElement("p");
const createHeroAssaultPower = document.createElement("p");
//Enemy Element
const createEnemyName = document.createElement("h3");
const createEnemyHealth = document.createElement("p");
const createEnemyCurrentWeapon = document.createElement("p");
const createEnemyAssaultPower = document.createElement("p");
function displayStat() {
  // Hero Stat
  createHeroName.innerText = `Hero Name : ${hero.name}`;
  createHeroHealth.innerText = `Health: ${hero.health}`;
  createHeroCurrentWeapon.innerText = `Weapon: ${hero.weapon.type}`;
  createHeroAssaultPower.innerText = `Assault Power: ${hero.weapon.damage}`;
  //Enemy Stat
  createEnemyName.innerText = `Enemy Name : ${enemy.name}`;
  createEnemyHealth.innerText = `Health: ${enemy.health}`;
  createEnemyCurrentWeapon.innerText = `Weapon: ${enemy.weapon.type}`;
  createEnemyAssaultPower.innerText = `Assault Power: ${enemy.weapon.damage}`;
}
//Display Hero
displayStatDiv[0].appendChild(createHeroName);
displayStatDiv[0].appendChild(createHeroHealth);
displayStatDiv[0].appendChild(createHeroCurrentWeapon);
displayStatDiv[0].appendChild(createHeroAssaultPower);
//Display Enemy
displayStatDiv[1].appendChild(createEnemyName);
displayStatDiv[1].appendChild(createEnemyHealth);
displayStatDiv[1].appendChild(createEnemyCurrentWeapon);
displayStatDiv[1].appendChild(createEnemyAssaultPower);

displayStat();
const showResult = document.querySelector(".showResult");
function fight() {
  const randomWinner = Math.floor(Math.random() * 2);
  if (hero.health > 3 && enemy.health > 0) {
    if (randomWinner === 0) {
      showResult.innerHTML = `<p>${hero.name} won ${enemy.name}</p>`;
      enemy.health = enemy.health - hero.weapon.damage;

    } else {
      showResult.innerHTML = `<p>${hero.name} lost to ${enemy.name}</p>`;
      hero.health = hero.health - enemy.weapon.damage;
    }
  } else if (enemy.health <= 0) {
    showResult.innerHTML = `<p>${hero.name} killed ${enemy.name} refresh the page to continue playing </p>`;
  } else {
    showResult.innerHTML = "<p>Get rest before fighting</p>";
  }
  showResult.classList.add("publishResult")
}

function invokeFight() {
  fight();
  displayStat();
}

