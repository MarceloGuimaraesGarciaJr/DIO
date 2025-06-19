
class hero {
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    // método para atacar poderia usar um switch, mas como são poucos tipos, vamos usar if
    atacar() {
        //inicializa a variável ataque
        let ataque;

        if(this.tipo === 'guerreiro') {
            ataque = "espada";
        }else if(this.tipo === 'mago') {
            ataque = "magia";
        }else if(this.tipo === 'monge') {
            ataque = "artes marciais"
        }else if(this.tipo === 'ninja') {
            ataque = "shuriken";
        }else {
            ataque = "Punhos";
        }
        console.log(`O nosso ${this.tipo} ${this.nome} atacou usando ${ataque}\n`);
    }
}

let hero1 = new hero("Gandalf", 300, "mago");
let hero2 = new hero("Aragorn", 87, "guerreiro");
let hero3 = new hero("Jackie Chan", 200, "monge");
let hero4 = new hero("Naruto", 16, "ninja");
let hero5 = new hero("Bruce Lee", 32, "lutador");

// chama o método atacar de cada herói
console.log("Heróis atacando:\n");
hero1.atacar();
hero2.atacar();
hero3.atacar();
hero4.atacar();
hero5.atacar();