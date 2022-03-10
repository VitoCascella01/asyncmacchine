type Car = {
    id: number;
    marca: string;
    modello: string;
}


var allCars: Car[];
allCars = [
    {id: 1, marca: "ford", modello: "kuga"},
    {id: 2, marca: "suzuki", modello: "swift"},
    {id: 3, marca: "fiat", modello: "panda"},
    {id: 4, marca: "citroen", modello: "c3"},
    {id: 5, marca: "renault", modello: "clio"}
];

// console.log(allCars[0])

function delay(ms:number){
    return new Promise(resolve => setTimeout(resolve,ms));
}


function inizio (){
    console.log("Preparo la lista")
}
function fine (){
    console.log("Fine lista")
}

async function renderCar(){
    inizio()
    for (let i = 0; i < allCars.length; i++) {
        await delay (5000)
        console.log("id " + allCars[i].id);
        console.log("marca " + allCars[i].marca);
        console.log("modello " + allCars[i].modello);
    }
    fine()
}

renderCar()