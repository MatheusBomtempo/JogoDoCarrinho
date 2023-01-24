let imagemCarros;
let comprimentoCarro = 50;
let alturaCarro = 40; 


//carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 100, 150, 210, 270, 318];
let velocidade = [2, 2.5, 1.8, 5, 3.3, 2.1];

///imagens

function mostraCarro(){
  for(i = 0; i < imagemCarros.length; i++ ){  // repetição // começo;final;incremento 
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}



/// movimentos


function movimentaCarro(){
  for(i = 0; i < imagemCarros.length; i++ ){
  xCarros[i] -= velocidade[i];
  }
}

// volta Carro

function voltaCarro (){
  
  for(i = 0; i < imagemCarros.length; i++ ){
    if (xCarros[i] < -38){
      xCarros[i] = 600
    }
  }
  
}


