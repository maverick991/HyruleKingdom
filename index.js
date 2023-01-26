let addCreature = false;

document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.querySelector("new-creature-btn");
    const creatureFormContainer =  document.querySelector(".container");
    addBtn.addEventListener("click", () => {
        addCreature = !addCreature;
        if (addCreature){
            creatureFormContainer.style.display = "block";
        } else {
            creatureFormContainer.style.display = "none";
        }
    });
})

const creatureUrl = 'http://localhost:3000/creatures'

fetch(creatureUrl)
.then((resp) => resp.json)
.then((creaturesData) => {
    creatures = (creaturesData.message)
    renderCreatures(creatures)
})

function renderCreatures(creature){
    let addCreature = document.querySelector("#creature-collection")
}
let creatureCard = document.createElement("div");
creatureCard.className = "card";

let creatureName = document.createElement("h2");
  creatureName.innerText = creature.name;

  let creatureImage = document.createElement("img");
  creatureImage.className = "creature-avatar";
  creatureImage.src = creature.image;

  let creatureLikes = document.createElement("p");
  creatureLikes.innerText = creature.likes + " Likes ❤️";

  function postCreature(creature){
    let request = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
    }
  }

  