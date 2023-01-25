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