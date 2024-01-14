class Heroi {
    constructor(nome, idade, classe) {
      this.nome = nome;
      this.idade = idade;
      this.classe = classe;
    }
  
  
    ataque() {
      let ataque = "";
      switch (this.classe) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        
      }
       console.log(`O ${this.classe} atacou usando ${ataque}`);
    }
  }

  let ninja = new Heroi("Henrique",19,"ninja")
  ninja.ataque();