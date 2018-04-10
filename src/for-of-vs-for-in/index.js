function Divisor(){
    console.log('***********************************************************************');
  }
  
  function Quebra(){
    console.log('\n');
    console.log('\n');
  }
  
  function Exemplo(exemplo){
    Quebra();
    Divisor();
    console.log('Exemplo ' + exemplo);
    Divisor();
  }
  
  
  Exemplo('for of')


//tem que ser em objeto iteravel
let numeros = [1,2,3,4,5];

for(numero of numeros){
  console.log(numero);
}


//senao vai dar Erro
let perfilFacebook = {
  nome: 'Thiago',
  idade: 32
}

/*for(let dado of perfilFacebook){
  console.log(dado);
}*/

Exemplo('for in')

//para objetos nao iteraveis se usa o for in

for(let propriedade in perfilFacebook){
  console.log(perfilFacebook[propriedade]);
}


Exemplo('break')

for(let numero of numeros){
  if(numero > 3){
    break;
  }
  console.log(numero);
}

Exemplo('continue')

for(let numero of numeros){
  if(numero == 2){
    continue;
  }
  console.log(numero);
}