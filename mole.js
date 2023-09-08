let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver = false;

window.onload = function () {
  setGame();
};

function setGame() {
  // create gameboard
  for (let i = 0; i < 9; i++) {
    // <div id="0-8"></div>
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
    console.log(tile);
  }
  setInterval(setMole, 1000);
  setInterval(setPlant, 1700);
}

function getRandomTile() {
  // range becomes 0-9 (Excludes 9)
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) {
    return;
  }

  if (currentMoleTile) {
    currentMoleTile.innerHTML = "";
  }

  let mole = document.createElement("img");
  mole.src = "Assets/monty-mole.png";
  let num = getRandomTile();

  if (currentPlantTile && currentPlantTile.id == num) {
    return;
  }
  currentMoleTile = document.getElementById(num);
  console.log(
    `Current Mole Tile: ${currentMoleTile} \nCurrent Mole id ${currentMoleTile.id} \nNumber = ${num}`
  );
  currentMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) {
    return;
  }

  if (currentPlantTile) {
    currentPlantTile.innerHTML = "";
  }

  let plant = document.createElement("img");
  plant.src = "Assets/piranha-plant.png";
  let num = getRandomTile();

  if (currentMoleTile && currentMoleTile.id == num) {
    return;
  }
  currentPlantTile = document.getElementById(num);
  console.log(currentPlantTile);
  currentPlantTile.appendChild(plant);
}

function selectTile() {
  if (this == currentMoleTile) {
    console.log(this);
    score += 10;
    document.getElementById("score").innerText = score.toString();
  } else if (this == currentPlantTile) {
    document.getElementById("score").innerText =
      "Game Over: " + score.toString();
    gameOver = true;
  }
}

// *Lessons:
/*
 * We can add attributes indirectly to an html element just my using (.)dot notation after a variable.
 * For example we havce added the src attribute to the img tag that was created
 * We also added the id attribute in the tile varible (line 12) which will eventually make <div id"0-8"></div>
 */
