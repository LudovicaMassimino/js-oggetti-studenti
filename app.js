console.log('ciao')
/* MILESTONE 1
Creare un array di oggetti di studenti.
Ogni oggetto studente deve avere tre proprietà: nome, cognome, eta
Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.
prima ciclate con un ciclo for
poi commentate il ciclo for e usate il forEach */

const studenti = [
    {nome: 'Giorgio', cognome:'Giorgini', età: '23'},
    {nome: 'Fabio', cognome:'Fabiani', età: '19'},
    {nome: 'Elena', cognome:'Elenati', età: '29'},
    {nome: 'Francesca', cognome:'Franceschini', età: '31'},
    {nome: 'Giulia', cognome:'Giuliani', età: '35'},
]

//const nomeCognome = []

/* 
for(let i = 0; i < studenti.length; i++){
    const studente = studenti[i]
    const name = studente.nome
    const surname = studente.cognome
    console.log(name , surname)
} 
*/

studenti.forEach(function(studente){
    // console.log(studente)
    const name = studente['nome'] // oppure studente.nome
    const surname = studente['cognome'] //oppure studente.cognome
    console.log(name , surname)
    /* nomeCognome.push(name, surname)
    console.log(nomeCognome) */
})

/* MILESTONE 2
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
Aggiungere il nuovo studente all’array di studenti
Ciclare su tutti gli studenti e stampare per ognuno di essi tutte le proprietà nome, cognome, eta
prima ciclate con un ciclo for
poi commentate il ciclo for e usate il forEach */

const nome = prompt('Inserisci il tuo nome'); 
const cognome = prompt('Inserisci il tuo cognome'); 
const età = prompt('Inserisci la tua età');
console.log("I dati che ha inserito l'utente sono: " + nome, cognome, età)

const nuovoStudente = {nome, cognome, età};
console.log(nuovoStudente)
console.log(studenti.push(nuovoStudente))

/*
for(let i = 0; i < studenti.length; i++){
    const studente = studenti[i]
    console.log(studente)
}
*/

studenti.forEach(function(studente){
    console.log(studente)
})


