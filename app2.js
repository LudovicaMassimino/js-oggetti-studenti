// rifare l'esercizio con il FORM

const studenti = [
    {nome: 'Giorgio', cognome:'Giorgini', età: '23'},
    {nome: 'Fabio', cognome:'Fabiani', età: '19'},
    {nome: 'Elena', cognome:'Elenati', età: '29'},
    {nome: 'Francesca', cognome:'Franceschini', età: '31'},
    {nome: 'Giulia', cognome:'Giuliani', età: '35'},
]

console.log(studenti)

const tBodyElement = document.getElementById('table-body')
console.log(tBodyElement)

// Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome, cognome, età:

for(let i = 0; i < studenti.length; i++){
    const studente = studenti[i]
   /* const nome = studente.nome
    const cognome = studente.cognome
    const età = studente.età

    console.log(nome, cognome, età) */
   
    appendTableHtml(studente);
} 

function appendTableHtml(member){
    const tBodyElement = document.getElementById('table-body')
    /* const trHTML =
    '<tr>' +
    '<td>' + 
        nome +
    '</td>' +
    '<td>' +
        cognome +
    '</td>' +
    '<td>' +
        età +   
    '</td>' +
    '</tr>'  */

// ottimizzato con backtick e ${}
const trHTML = `
    <tr>
    <td>${member.nome}</td>
    <td>${member.cognome}</td>
    <td>${member.età}</td>
    </tr>
    `

tBodyElement.innerHTML += trHTML
}


const form = document.getElementById('form-add-students')
console.log(form)
form.addEventListener('submit', aggiungiStudente)

function aggiungiStudente(e) {
    console.log(e);
    e.preventDefault();

    const nomeInputElement = document.getElementById("nome")
    const nome = nomeInputElement.value
    const cognomeInputElement = document.getElementById("cognome")
    const cognome = document.getElementById("cognome").value
    const etàInputElement = document.getElementById("età")
    const età = document.getElementById("età").value

     // creo la variabile per il nuovo studente

    const nuovoStudente = {
        nome: nome,
        cognome: cognome,
        età: età
    };
    console.log(nuovoStudente)

    // pusho il nuovo studente nell'array di studenti
    studenti.push(nuovoStudente)
    console.log(studenti)

    appendTableHtml(nuovoStudente);

    // per svuotare il form:
    nomeInputElement.value = ''
    cognomeInputElement.value = ''
    etàInputElement.value = ''

    
} 
