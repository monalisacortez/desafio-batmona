function subtracao(numeroVitorias, numeroDerrotas){
    return numeroVitorias - numeroDerrotas
    
}
let resultado = subtracao(200, 50);
let nomeHeroi = "Batmona"

console.log("O herói " + nomeHeroi + " tem um saldo de vitórias de: " + resultado)

switch (true) {
  case (resultado < 10):
    console.log(", e seu nível é Ferro");
    break;
   case (resultado > 11 && resultado < 20):
    console.log(", e seu nível é Bronze");
    break;
   case (resultado > 21 && resultado < 50):
    console.log(", e seu nível é Prata");
    break;
    case (resultado > 51 && resultado < 80):
    console.log(", e seu nível é Ouro");
    break;
   case (resultado > 81 && resultado < 90):
    console.log(", e seu nível é Diamante");
    break;
   case (resultado > 91 && resultado < 100):
    console.log(", e seu nível é Lendário");
    break;
   case (resultado > 101):
    console.log("E seu nível é Imortal");
    break;
   default:
    console.log("ok");
}
