// BONUS: FORM

// prendo le info dagli input di nome, cognome, età:
const nomeInputElement = document.getElementById('nome')
const cognomeInputElement = document.getElementById('cognome')
const ageInputElement = document.getElementById('age')

console.log(nomeInputElement , cognomeInputElement , ageInputElement)

// button e ascolto click:
const buttonElement = document.getElementById('submit')

buttonElement.addEventListener('click' , function () {
    console.log('click su Invia')
    
    const nome = nomeInputElement.value ; 
    const cognome = cognomeInputElement.value ; 
    const età = ageInputElement.value ;
    
    console.log("I dati che ha inserito l'utente sono: " + nome, cognome, età)

    const dati = ' ' + nome + ' ' + cognome + ' ' + età + ' anni' ;

    const datiElement = document.getElementById('dati')
     console.log(datiElement)
     datiElement.innerHTML = dati;
})

