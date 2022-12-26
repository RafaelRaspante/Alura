
//Variaveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diamentro = 15
let raio = diamentro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let raqueteBorda = 20;

//variaves do oponente 
let xRaqueteooponente  = 585;
let yRaqueteooponente   = 150;
let raqueteComprimentooponente   = 10;
let raqueteAlturaoponente  = 90;
let raqueteBordaoponente  = 20;
let velocidadeYoponente;

let colidiu = false 

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;


function setup() {
  createCanvas(600, 400);
 
}

function draw() {
  background(0);
  mostraboLinha();
  movimentaBolinha();
  verificaColicaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  colisaoRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteooponente,yRaqueteooponente);
  movimentaRaqueteDoOponete();
  colisaoRaquete(xRaqueteooponente, yRaqueteooponente)
  incluiplcar();
  
}

function mostraboLinha(){
  circle (xBolinha, yBolinha, diamentro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColicaoBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }

}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura, raqueteBorda );
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }

}

function movimentaRaqueteDoOponete(){
  if (keyIsDown(87)){
    yRaqueteooponente -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteooponente += 10;
  }

}

function colisaoRaquete(x,y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu) {
      velocidadeXBolinha *= -1;
      
  }
}

function incluiplcar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0))
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0))
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
 

  if (xBolinha > 590){
    meusPontos += 1;
  }
  
  if (xBolinha < 10){
    pontosOponente += 1;
    
}
}














