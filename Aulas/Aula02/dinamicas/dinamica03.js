class Carta{
    naipe;
    valor;
    faceParaCima;

    verificaNaipe(naipe) {
        const naipes = ['ouros', 'paus', 'espadas', 'copas'];
        if (naipes.includes(naipe)) {
            return true;
        } else {
            return false;
        }
     }

    verificaValor(valor) {
        const valores = ['A','1','2','3','4','5','6','7','8','9','10','J','Q','K'];
        if (valores.includes(valor)) {
            return true;
        } else {
            return false;
        }
     }

    virada() {
        if (this.faceParaCima == true) {
            return true;
        } else {
            return false;
        }
    }

    vira() {
        if (this.faceParaCima == true) {
            this.faceParaCima = false;
        } else {
            this.faceParaCima = true;
        }
        return this.faceParaCima;
    }

    toString() {
        let str = `naipe - ${this.naipe} | valor - ${this.valor} | face para cima? ${this.faceParaCima}`;
        return str;
    }
}

let carta = new Carta();
carta.naipe = 'espadas';
carta.valor = 'J';
carta.faceParaCima = true;

console.log(carta.toString());
