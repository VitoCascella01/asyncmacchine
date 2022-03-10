type Forma = {
    nome: string;
    lato1: number;
    lato2: number;
}

var triangolo: Forma;
var quadrato: Forma;
var rettangolo: Forma;
var cerchio: Forma;

triangolo = {nome: "triangolo", lato1: 20, lato2: 30}
quadrato = {nome: "quadrato", lato1: 20, lato2: 30}
rettangolo = {nome: "rettangolo", lato1: 20, lato2: 10}
cerchio = {nome: "cerchio", lato1: 20, lato2: 10}



function calcoloArea(forma:Forma) {
    switch (forma.nome) {
        case "triangolo":
           console.log(forma.lato1 * forma.lato2/2) 
            break;
        case "quadrato":
           console.log(forma.lato1 * forma.lato1) 
            
            break;
        case "rettangolo":
           console.log(forma.lato1 * forma.lato2) 
            
            break;
        case "cerchio":
           console.log(forma.lato1 * forma.lato1 * 3.14) 
            
            break;
    
        default:
            break;
    }
}

calcoloArea(triangolo)
calcoloArea(quadrato)
calcoloArea(rettangolo)
calcoloArea(cerchio)