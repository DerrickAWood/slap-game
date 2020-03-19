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
let minHealth = 0
let maxHealth = 100
let imgElement = document.getElementById("img-hulk")


function attack(number){
  health-= choices[number].damage
  healthElem.innerText = health.toString()
  knockOut()
}


function beer(){
  health+= 10 
  healthElem.innerText = health.toString()
  toggleImg()
}


function knockOut(){
  if(health <= 0){
    healthElem.innerText = "TKO!"
  }
}


function toggleImg(){
  var img1 = "https://www.adventuresinpoortaste.com/wp-content/uploads/2019/01/hogan-crown-jewel.jpg",
       img2 = "https://thumbs.gfycat.com/DemandingExcitableAmericanquarterhorse-size_restricted.gif";
   var imgElement = document.getElementById('test');
   
   imgElement.src = (imgElement.src === img1)? img2 : img1;
}