interface Song  {
    id: number;
    name:string;
    year?: number
}

let oceanos:Song ={
    id: 0,
    name: 'seas',
    year: 1991
}

let rios:Song ={
    id: 2,
    name: "rivers",
    year: 2021
}
console.log(`${oceanos.name}\n ${rios.id}`);
