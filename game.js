let choices = [
  {
    name: "slap",
    damage: 1
  },
  {
    name: "punch",
    damage: 5
  },
  {
    name: "kick",
    damage: 10
  }
]

let health = 100
let healthElem = document.getElementById("health")


function attack(number){
  health-= choices[number].damage
  healthElem.innerText = health.toString()
  knockOut()
}


function beer(){
  health+= 10 
  healthElem.innerText = health.toString()
}


function knockOut(){
  if(health <= 0){
    healthElem.innerText = "TKO!"
  }
}
