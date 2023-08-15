//object (arrays)

let goleadores:string[] = ['Jisas', 'Amed', 'Yedher'];

let goles:number[] = [0, 5, -2]

let tirosEsquina:number[] = []

console.log(`goleadores: ${goleadores}`);
console.log(`goles: ${goles}`);

//Metodo alternativo (definir arrays en ts)

let wereTherePenalties: Array<boolean> = [false]
console.log(`There were penalties? \t ${wereTherePenalties}`);

console.log(goles.map(ele => ele.toString()));


//objects

let goleadoresId = [10, 7, 9, 11];
goleadoresId.push(1)


goleadoresId.push(+'13');

console.log(typeof goleadoresId);



let songs={
    id: 1,
    name: 'Exceding Joy'
}

console.log(songs);

let objeto:{
    readonly id:number,
    nombre: string,
    edad: number,
    sueldo?: number
} = {
    id:8,
    nombre:'jisas',
    edad : 10
}

objeto.edad = 11
//objeto.id = 9
console.log(objeto.id);
