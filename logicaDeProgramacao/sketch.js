let imagemDaEstrada;
let somTrilha;
let somGrito;
let somPonto;




function preload(){
  imagemDaEstrada = loadImage("material/estrada.png");
  imagemDoAtor = loadImage("material/ator-1.png");
  imagemCarro = loadImage("material/carro-1.png");
  imagemCarro2 = loadImage("material/carro-2.png");
  imagemCarro3 = loadImage("material/carro-3.png");
  imagemCarros = [imagemCarro,imagemCarro2,imagemCarro3,imagemCarro,imagemCarro2,imagemCarro3];
  somTrilha =  loadSound("material/sons/trilha.mp3");
  somGrito = loadSound("material/grito.mp3");
  somPonto = loadSound("material/sons/pontos.wav");
}

function setup() {
  createCanvas(500, 400);
  //somTrilha.loop();
}


///posicionamento 

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}



