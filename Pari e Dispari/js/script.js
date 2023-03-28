const pariDispari = prompt('pari o dispari')
const numero = parseInt(prompt('inserisci un numero da 1 a 5'))

const risultato = winLoss(pariDispari, numero)

console.log(risultato)

function numeroRandom(){
  return Math.floor(Math.random() * 5) + 1;
}

function winLoss(pariDispari, numero){
  const randomNumber = numeroRandom()
  let somma = numero + randomNumber

  if(somma % 2 === 0){
    message = 'pari'
  }
  else{
    message = 'dispari'
  }

  if(pariDispari == message ){
    return 'hai vinto'
  }
  else{
    return 'hai perso'
  }
    
}