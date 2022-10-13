
const getNum0a255 = ():number => Math.floor(Math.random() * 256)

class Color {
    num1: number;
    num2: number;
    num3: number;

    constructor(num1: number,num2: number,num3: number){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    }
    get(): string {
        let color: string = `rgb(${this.num1},${this.num2},${this.num3})`
        return color
    }
}

const nuevoColor: Color = new Color(getNum0a255(),getNum0a255(),getNum0a255());

console.log(nuevoColor.get())
