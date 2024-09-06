let posicaoxbolinha=200 // forneçe a posição x da bolinha
let posicaoybolinha=200 //forneçe a posição y da bolinha
let diametro=50
function setup() {
  createCanvas(400, 400);
   cor=color(random(0,255),random(0,255),random(0,255))
  background("red");
}

function draw() {

  
  circle(posicaoxbolinha,posicaoybolinha,diametro)
  fill(cor)
  posicaoxbolinha=posicaoxbolinha+2
  
if(mouseIsPressed){
  cor=color(random(0,255),random(0,255),random(0,255))
}
}