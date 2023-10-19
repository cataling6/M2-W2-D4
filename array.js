// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
  nrOggettiNelCarrello: 0,
  prezziArticoliNelCarrello: [0],
  sommaTotaleArticoli: 0,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
  nrOggettiNelCarrello: 0,
  prezziArticoliNelCarrello: [0],
  sommaTotaleArticoli: 0,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
  nrOggettiNelCarrello: 0,
  prezziArticoliNelCarrello: [0],
  sommaTotaleArticoli: 0,
};

const prices = [34, 5, 2];
const shippingCost = 50;
let utenti = [];
utenti.push(marco, paul, amy);

let utenteCheEffettuaLAcquisto = marco; //cambia il valore qui per provare se il tuo algoritmo funziona!
let sconto = 0;
let prezzoFinale = 0;

for (let i = 0; i < utenti.length; i++) {
  utenti[i].nrOggettiNelCarrello = Math.round(Math.random() * 10); // mi genero in modo casuale il numero di oggetti nel carrello x ogni utente
  //con questo ciclo mi creo il prezzo totale usando i prices a disposizione scegliendo i prezzi in modo casuale
  for (let j = 0; j < utenti[i].nrOggettiNelCarrello; j++) {
    utenti[i].prezziArticoliNelCarrello[j] =
      prices[Math.floor(Math.random() * prices.length)];
    utenti[i].sommaTotaleArticoli += utenti[i].prezziArticoliNelCarrello[j]; // quii invece mi sommo i valori totali dei prezzi in modo tale da confrontare al checkout del carrello
  }
}

console.log("====================INIZIO SCRIPT=========================");

for (let i = 0; i < utenti.length; i++) {
  if (utenti[i] === utenteCheEffettuaLAcquisto) {
    //verifico che sia l'utente scelto a inizio
    if (utenti[i].isAmbassador) {
      //verifico se ambassador ed avviso
      console.log(
        "Caro utente " +
          utenti[i].name +
          " " +
          utenti[i].lastName +
          " sei un nostro ambassador, hai quindi diritto ad uno sconto del 30% su tutti gli articoli presenti nel tuo carrello!"
      );
      console.log(":::::");
      sconto = (utenti[i].sommaTotaleArticoli / 100) * 30; //setto già lo sconto
      utenti[i].sommaTotaleArticoli -= sconto; //e gli applico lo sconto sulla somma totale
    } else {
      console.log(
        "Caro utente " +
          utenti[i].name +
          " " +
          utenti[i].lastName +
          " non sei un nostro ambassador, quindi devi sostenere il prezzo intero degli articoli..."
      );
      console.log(":::::");
    }
    //verifico che sommaTotale sia  minore di 100 x applicare spesa spedizione e che non sia pari a 0 la somma totale per gestire il carrello vuoto più in basso
    if (
      utenti[i].sommaTotaleArticoli < 100 &&
      utenti[i].sommaTotaleArticoli !== 0
    ) {
      prezzoFinale = utenti[i].sommaTotaleArticoli + shippingCost;
      //con questa console espongo i dati spesa totale
      console.log(
        "La tua spesa totale comprese le spese di spedizone è pari a " +
          prezzoFinale +
          (" (spedizione: " +
            shippingCost +
            "€ + " +
            utenti[i].sommaTotaleArticoli +
            "€ degli articoli). ")
      );
      //qui espongo i prezzi degli articoli sfruttando il join  x aggiungere i caratteri '€' e ','
      console.log(
        "Di seguito i prezzi dei tuoi articoli selezionati 1 per 1: " +
          utenti[i].prezziArticoliNelCarrello.join("€, ") +
          "€."
      );
      console.log("====================FINE SCRIPT=========================");
    } else if (utenti[i].sommaTotaleArticoli >= 100) {
      prezzoFinale = utenti[i].sommaTotaleArticoli; //se sommaTotale supera cento, toglo le spedizioni

      console.log(
        "La tua spesa totale di " +
          prezzoFinale +
          "€ supera i 100€ quindi la spedizione sarà gratuita!!!"
      );
      console.log(
        "Di seguito i prezzi dei tuoi articoli selezionati 1 per 1: " +
          utenti[i].prezziArticoliNelCarrello.join("€, ") +
          "€."
      );
      console.log("====================FINE SCRIPT=========================");
    } else if (utenti[i].sommaTotaleArticoli === 0) {
      console.log("Carrello vuoto, non devi pagare nulla");
      console.log("====================FINE SCRIPT=========================");
    }
  }
}
