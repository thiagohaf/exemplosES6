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
  
  
  Exemplo('iteradores');
  
let bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley']

//obtem iterador
let iteradorBruxos = bruxos[Symbol.iterator]();

console.log(iteradorBruxos.next());
console.log(iteradorBruxos.next());
console.log(iteradorBruxos.next());
console.log(iteradorBruxos.next());


