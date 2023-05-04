// // aries 21/3 - 19/04
// // tauro 20/04 - 20/05
// // geminis 21/05 - 20/06
// // cancer 21-06 -22/07
// // leo 23/07 -22/08
// // virgo 23/08  -22/09
// // libra 23/09  -22/10
// // escorpio 23/10  -21/11
// // sagitario 22/11 -21/12 
// // capricornio 22/12 -20/01
// // acuario 21/01  -19/02
// // piscis 20/02  -20/03



// function horoscopo(dia, mes){
    
//     dia = prompt ('Por favor introduce dia');
//     mes = prompt ('Por favor introduce mes');
//     edad = Number(dia);
//     mes=Number(mes)

// if (dia =="" && mes=="") { 
//     alert ('No has introducido datos'); 
// }else{
    
// if(dia>=21 && mes==3 || dia<=19 && mes==4){
//     console.log("su signo es aries");
// }else if (dia>=20 && mes==4 || dia<=20 && mes==5){
//     console.log("su signo es tauro"); 
// }
// else if (dia>=21 && mes==5 || dia<=20 && mes==6){
//     console.log("su signo es geminis");   
// }
// else if (dia>=21 && mes==6 || dia<=22 && mes==7){
//     console.log("su signo es cancer");
// }
// else if (dia>=23 && mes==7 || dia<=22 && mes==8){
//     console.log("su signo es leo");
// }
// else if (dia>=23 && mes==8 || dia<=22 && mes==9){
//     console.log("su signo es virgo");
// }
// else if (dia>=23 && mes==9 || dia<=22 && mes==10){
//     console.log("su signo es libra");
// }
// else if (dia>=23 && mes==10 || dia<=21 && mes==11){
//     console.log("su signo es escorpio");
// }
// else if (dia>=22 && mes==11 || dia<=21 && mes==12){
//     console.log("su signo es sagitario");
// }
// else if (dia>=22 && mes==12 || dia<=20 && mes==01){
//     console.log("su signo es capricornio");
// }
// else if (dia>=21 && mes==1 || dia<=19 && mes==2){
//     console.log("su signo es acuario");
// }
// else if (dia>=20 && mes==02 || dia<=20 && mes==3){
//     console.log("su signo es piscis");
// }
//     }

// }
// horoscopo();

// creando 2 objetos con 5 propiedadas cada uno.y 
// 2 arreeglos que incluyan un arreglo de objetos y un arreglo de strings.


 let user={
    Id:001,
    Username: 'carlos',
    Password: "qweqwezdsawe",
    Codigo: 0012345,
    cargo:"Empleado"
 }
 let producto={
    Id:002,
    name:"hp",
    procesador:"i7-10400f",
    memory:"12gb",
    card:"nvidia geoforce"
 }
let docentes=[ { nombre:"juan",
                    lastname:"garcia",
                    especilidad:"informatica",
                    codigo:231123,
                }, 
                {   nombre:"alberto",
                    lastname:"perez",
                    especilidad:"diseño",
                    codigo:223123,

                } ,
                {
                    nombre:"juan",
                    lastname:"garcia",
                    especilidad:"informatica",
                    codigo:231123,

                },
                {
                    nombre:"javier",
                    lastname:"flores",
                    especialidad:"telecomunicaciones",
                    codigo:21321,

                 }];