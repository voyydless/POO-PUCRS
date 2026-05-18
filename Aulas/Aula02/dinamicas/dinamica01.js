/* Escreva uma classe JavaScript que modela um 
retângulo. Sobre o retângulo devemos armazenar o tamanho 
do lado1 e o tamanho do lado2. A classe deve ter métodos para 
calcular a área e o perímetro do retângulo. Escreva a classe e um exemplo de uso. */

class Retangulo {
    lado1;
    lado2;

    perimetro() {
        let perimetroRet = (this.lado1 * 2) + (this.lado2 * 2);
        return perimetroRet;
    }

    area() {
        let areaRet = this.lado1 * this.lado2;
        return areaRet;
    }

    toString() {
        let str = `lado 1 - ${this.lado1}, lado 2 - ${this.lado20}\n`;
        str += `área - ${this.area()} | perimetro - ${this.perimetro()}`;
        return str;
    }
}

let r1 = new Retangulo();
r1.lado1 = 10;
r1.lado2 = 20;

console.log(r1.toString());
