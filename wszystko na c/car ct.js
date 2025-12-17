const car = {
    brand: "mercedes",
    color: "czerwony",
    drive() {
        console.log(this); //car
        console.log(`${this.name}sobie jedzie`);
     },
     showText() {
        console.log(`${this.name}koloru ${this.color}`);

     }

}


car.drive(); //"mercedes sobie jedzie"
car.showText(); //"mercedes koloru czerwony"