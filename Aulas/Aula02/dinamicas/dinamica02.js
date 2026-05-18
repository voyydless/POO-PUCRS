/* ) Escreva uma classe JavaScript que modela um carro. Sobre o carro devemos armazenar 
a placa, a marca/modelo, o tamanho do tanque de combustível, a quantidade de 
litros no tanque e o consumo em Km/litro. A classe deve ter um método para 
calcular o total de combustível necessário para percorrer uma certa 
distância em quilômetros e outro que retorna true se tem combustível no 
tanque for suficiente para percorrer uma certa distância. Acrescente também um 
método que retorne uma string com o valor de todos as propriedades devidamente formatado. */

class Carro{
    placa;
    modelo;
    tamanhoDeTanque;
    qtdeLitros;
    consumoKmPorLitro;

    combustivelNecessario(distancia) { 
        let combustivelNecessario = distancia / this.consumoKmPorLitro;
        return combustivelNecessario;
    }

    podeViajar(distancia) {
        let combustivelNecessario = distancia / this.consumoKmPorLitro;
        if (combustivelNecessario <= this.qtdeLitros) {
            return true;
        } else {
            return false;
        }
    }

    toString() { 
        let str = `-----
modelo - ${this.modelo}
placa - ${this.placa}
tamanho do tanque - ${this.tamanhoDeTanque}L
quantidade de litros no tanque - ${this.qtdeLitros}L
consumo em km/litro - ${this.consumoKmPorLitro}
-----\n`;
        return str;
    }
}

let strada = new Carro();
strada.placa = 'h1g267';
strada.modelo = 'fiat strada';
strada.tamanhoDeTanque = 58;
strada.qtdeLitros = 10;
strada.consumoKmPorLitro = 7.2;

console.log(strada.toString());
console.log(strada.combustivelNecessario(100));
console.log(strada.podeViajar(100));