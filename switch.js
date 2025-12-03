let liczba1=prompt("Podaj pierwsza liczbe")
let liczba2=prompt("podaj druga liczbe")
let operacja=prompt("wybierz rodzaj operacji")
switch(operacja){
  case "+":
    wynik=liczba1+liczba2
    break
  case"-":
  wynik=liczba1-liczba2
  break
  case"*"
  wynik=liczba1*liczba2
  break
  case"/":
  wynik=liczba1/liczba2break


}
document.write("wynik="wynik)