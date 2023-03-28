const parolaUtente = prompt('inserisci una parola')


function palindroma (parola){

  let parolaContrario = ''

  for(let i = parola.length -1; i >= 0; i--){
    parolaContrario += parola[i]
  }
  
  if(parola === parolaContrario ){
    return 'è palindroma'
  }
  else{
    return 'non è palindroma'
  }
}

const risultato = palindroma(parolaUtente)

console.log(risultato)