const miesiace = ['styczen', 'luty', 'marzec', 'kwiecien', 'maj', 'czerwiec', 'lipiec', 'sierpien', 'wrzesien', 'pazdziernik', 'listopad', 'grudzien'];


let teraz = new Date();
let nr_miesiaca = teraz.getMonth();
let miesiac = miesiace[ nr_mieiaca];
document.write( "aktualny miesiac:" + miesiac );