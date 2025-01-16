class car {
    constructor(name, color) {
        this.name = name;
        this.color = color;

    }
    getName = () => this.name;
    getColor = () => this.color;

}


class SupperCar extends car {
    constructor(name, color, signature) {
        super(name, color);// super phai nam ngay ben duoi constructor
        this.signature = signature;
    }
}

const ferari = new SupperCar("Ferari", "Red", "Signature ne")
const bmw = new car("BMW", "Black");
console.log(bmw);
console.log(JSON.stringify(ferari));


