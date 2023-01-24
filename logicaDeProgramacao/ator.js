//ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

///imagens
let imagemDoAtor;

///imagens

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
  }


  
/// movimentos


function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){

      console.log(yAtor)
      if(podeSeMover()){
      yAtor += 3;
      }
    }
    if (keyIsDown(LEFT_ARROW)){
      console.log(xAtor)
      
      if(podeSeMoverx()){
        xAtor -= 3;
        }
        
    }
    if (keyIsDown(RIGHT_ARROW)){
      if(podeSeMoverx2()){
        xAtor += 3;
        }
      
    }
  }

  function verificaColisao() {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

    for(let i = 0 ; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
      if(colisao){
        posicaoInicial();
        somGrito.play();
        if(meusPontos > 0){
        meusPontos -= 1;
        }
      }
    }

  }

  function posicaoInicial(){
    yAtor = 366;
  }


function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if(yAtor < 18){
    meusPontos += 1; 
    posicaoInicial();
    somPonto.play();
  }
}

function podeSeMover(){

 return  yAtor < 366;
  
}

function podeSeMoverx(){

  return  xAtor > 0;
   
 }

 function podeSeMoverx2(){

  return  xAtor < 470;
   
 }