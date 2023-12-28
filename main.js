let especias = ["magia","espada","artes marciais", "shuriken"];

class heroi{
  constructor(nome,idade,tipo){
    this.nome=nome
    this.idade=idade
    this.tipo=tipo
  }
  atacar(){
        if(this.tipo === "mago"){
        console.log(`o ${this.tipo} ${this.nome} atacou usando ${especias[0]}`)
        }
        else if(this.tipo === "guerreiro"){
          console.log(`o ${this.tipo} ${this.nome} atacou usando ${especias[1]}`)
        }
        else if(this.tipo === "monge"){
          console.log(`o ${this.tipo} ${this.nome} atacou usando ${especias[2]}`)
        }
        else if(this.tipo === "ninja"){
          console.log(`o ${this.tipo} ${this.nome} atacou usando ${especias[3]}`)
        }
        else{
          console.log("tipo invalido escolha um tipo valido!!")
        }
      }
}

let heroiOne = new heroi("juan",21,"mago")
let heroiTwo = new heroi("mendes", 20, "guerreiro")
let heroiThree = new heroi("pablo", 21, "monge")
let heroiFour = new heroi("paulo",18, "ninja")
let heroiFive = new heroi("jorge",20,"tanke")

 
function chamaHerois(){
  
heroiOne.atacar()
heroiTwo.atacar()
heroiThree.atacar()
heroiFour.atacar()
heroiFive.atacar()
}
chamaHerois()