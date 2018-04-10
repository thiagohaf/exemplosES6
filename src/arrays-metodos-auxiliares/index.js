

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
  
  
  Exemplo('forEach');
  
  var nomes = ['maria', 'josé', 'joão'];
  nomes.forEach(function(nome) {
      console.log(nome);
  });
  
  
  Exemplo('map');
  
  let numeros = [1, 2, 3];
  let dobro = numeros.map(numero => numero * 2);
  console.log('numeros: ' + numeros);
  console.log('   ');
  console.log('dobro: ' + dobro);
  
  
  Exemplo('filter');
  
  let alunos = [
      { nome: 'aluno 1', idade: 15 },
      { nome: 'aluno 2', idade: 16 },
      { nome: 'aluno 3', idade: 17 },
      { nome: 'aluno 4', idade: 18 },
      { nome: 'aluno 5', idade: 21 },
      { nome: 'aluno 6', idade: 32 },
  ];
  
  let maiores = alunos.filter(aluno => aluno.idade > 17);
  
  console.log('alunos: ' + JSON.stringify(alunos));
  console.log('   ');
  console.log('maiores: ' + JSON.stringify(maiores));
  console.log('   ');
  console.log(
      'maiores nome: ' + JSON.stringify(maiores.map(aluno => aluno.nome))
  );
  
  Exemplo('find');
  
  let nomeAluno = [
      { nome: 'aluno 1', idade: 15 },
      { nome: 'aluno 2', idade: 16 },
      { nome: 'aluno 3', idade: 17 },
      { nome: 'aluno 4', idade: 18 },
      { nome: 'aluno 5', idade: 21 },
      { nome: 'maria', idade: 32 },
  ];
  
  let procurado = nomeAluno.find(nomeAluno => nomeAluno.nome === 'maria');
  console.log('procurado: ' + JSON.stringify(procurado));
  
  
  Exemplo('every');
  
  alunos = [
      { nome: 'aluno 1', idade: 15 },
      { nome: 'aluno 2', idade: 16 },
      { nome: 'aluno 3', idade: 17 },
      { nome: 'aluno 4', idade: 18 },
      { nome: 'aluno 5', idade: 21 },
      { nome: 'maria', idade: 32 },
  ];
  
  let todosMaior = alunos.every(aluno => aluno.idade >= 18);
  console.log('todosMaior: ' + todosMaior);
  
  
  Exemplo('some');
  
  let pesoMalas = [12,32,21,10];
  
  let pesoAcima30 = pesoMalas.some(peso => peso > 30);
  console.log('acima de 30: ' + pesoAcima30);
  
  
  Exemplo('reduce')
  
  
  alunos = [
      { nome: 'aluno 1', idade: 15 },
      { nome: 'aluno 2', idade: 16 },
      { nome: 'aluno 3', idade: 17 },
      { nome: 'aluno 4', idade: 18 }
  ];
  
  let somenteNome = alunos.reduce(function(arrNomes, aluno){
    arrNomes.push(aluno.nome);
    return arrNomes;
  }, []);
  console.log('Somente Nome: ' + JSON.stringify(somenteNome));
  
  