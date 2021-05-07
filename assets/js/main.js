

/*
|   Creare un oggetto che descriva uno studente, con le seguenti proprietà:
|   nome,
|   cognome
|   età.
*/
var studenteAlberto = {
    nome: "Alberto",
    cognome: "Rossi",
    eta: 17
}

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studenteAlberto) {
    console.log(studenteAlberto[key]);
}


// Creare un array di oggetti di studenti.

var classe = [
    {
        nome: "Giulio",
        cognome: "Bertolin",
        eta: 19
    },
    {
        nome: "Francesca",
        cognome: "Ferrari",
        eta: 18
    },
    {
        nome: "Mohamed",
        cognome: "Akhmed",
        eta: 17
    }
];
console.log(classe);

//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < classe.length; i++) {
    var studente = classe[i];
    console.log(`${studente.nome} ${studente.cognome}`);
}



//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var nuovoStudente = {
    nome: prompt("Inserisci il nome dello studente"),
    cognome: prompt("Inserisci il cognome dello studente"),
    eta: parseInt(prompt("Inserisci il eta dello studente"))

}

classe.push(nuovoStudente);
console.log(classe);
console.log(`Il nuovo studente si chiama ${classe[3].nome} ${classe[3].cognome} `);