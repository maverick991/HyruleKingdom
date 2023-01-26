document.addEventListener("DOMContentLoaded", getCreatures)


    function getCreatures(){
    
        fetch('http://localhost:3000/creatures')
        .then(resp => resp.json())
        .then(creaturesData => creaturesData.forEach(creatureObj => renderCreatures(creatureObj)))
}

let creatureSpace = document.querySelector(".creature-collection")


function renderCreatures(creature){
    
let creatureCard = document.createElement("div");
creatureCard.className = "card";

let creatureName = document.createElement("div");
  creatureName.textContent = creature.name;

  let creatureImage = document.createElement("img");
  creatureImage.className = "creature-avatar";
  creatureImage.src = creature.image;

  let creatureLikes = document.createElement("div");
  creatureLikes.id = creature.id
  creatureLikes.textContent = `${creature.likes} + Likes ❤️`;

  let creatureLikesBtn = document.createElement("button")
  creatureLikesBtn.textContent = "Like ❤️"
  creatureLikesBtn.id = creature.id

  creatureLikesBtn.addEventListener('click', () => {
    creature.likes += 1
    creatureLikes.textContent = `${creature.likes} + Likes ❤️`;
    //patchCreatures(creature)

    })

    creatureCard.append(creatureName, creatureImage, creatureLikes, creatureLikesBtn)

    creatureSpace.appendChild(creatureCard)

  
}

let creatureForm = document.querySelector("form")

creature.addEventListener("submit", createNewCreature)

function createNewCreature(e){
  e.preventDefault()
  let newCreature = {
    "name": e.target.name.value ,
    "image": e.target.image.value,
    "likes": 0,
  }
  //postCreature(newCreature)
  creatureForm.reset
}


//patchCreature



  //function postCreature(creature){
    //let request = {
      //  method: 'POST',
        //headers: {
          //  "Content-Type": "application/json",
            //Accept: "application/json"

            //stringify
       // },
    //}
  //}

  