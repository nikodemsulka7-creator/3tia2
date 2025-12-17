const car = {
    brand: "mercedes",
    color: "czerwony",
    showText() { }

}


for (const key in car) {
    console.log(key); //bramd, color, showText
}