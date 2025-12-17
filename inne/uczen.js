class Uczen {
  #pesel;
  constructor(imie, klasa, pesel) {
    this.imie = imie;
    this.klasa = klasa;
    this.#pesel = pesel;
  }
  wypiszDane() {
    console.log("Imię: " + this.imie);
    console.log("Klasa: " + this.klasa);
    console.log("PESEL: " + this.#pesel);
  }
}
const uczen = new Uczen("Filip", "4TIA", "12345678901");
uczen.wypiszDane();


