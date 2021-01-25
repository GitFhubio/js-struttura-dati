const students=[
  {
    nome:"Fabio",
    cognome:"Petrone",
    eta:30,
    promosso:true,
    classe:1
  },
  {
    nome:"Enrico",
    cognome:"Ruggeri",
    eta:30,
    promosso:true,
    classe:1
  },
  {
    nome:"Rosa",
    cognome:"Carpentieri",
    eta:30,
    promosso:false,
    classe:3
  },
  {
    nome:"Alessio",
    cognome:"Scarabei",
    eta:34,
    promosso:false,
    classe:4
  },  {
    nome:"Michele",
    cognome:"Bonfiglio",
    eta:29,
    promosso:true,
    classe:5
  },
]
// cicla array di oggetti e ogni volta ha un oggetto in canna
const filteredArray= students.filter((element) => {
  return element.promosso == false;
})

console.log(filteredArray);

// il return vuole che ritorni sempre qualcosa senno mette undefined
let mappedArray=students.map((element)=>{
  let{nome,cognome,classe,eta,promosso}=element;
  if (promosso==true)
  {
    classe+=1;
  }

  return {
    nome,
    cognome,
    eta,
    promosso,
    classe
  };
})
console.log(students)
console.log(mappedArray);


const finalArray= mappedArray.filter((element) => {
  return element.classe <= 5 ;
})

console.log(finalArray);



// oppure


let mappedArray2=students.map((element)=>{
  let {nome,cognome,eta,promosso,classe} = element;
  if (promosso==true)
  {
    classe+=1;
  }
  if(classe<6){
    return element;
  }
  // non mettendo return qui come dovrei mi da undefined per il sesto
})
console.log(students);
console.log(mappedArray2);

// filter solo per togliere gli undefined
const finalArray2= mappedArray2.filter((element) => {
  return typeof element!='undefined' ;
})

console.log(finalArray2);




const promossi= students.filter((element) => {
  return element.promosso == true;
})

console.log(promossi);

const capitano=promossi[Math.floor(Math.random()*promossi.length)];

console.log(capitano);



// versione alternativa
// let Random=Math.floor(Math.random()*promossi.length);
// const capitano2= promossi.filter((element,index)=>{
// return index==Random})
// console.log(capitano2);



// avremmo dovuto generare piu numeri randomici

console.log(students);
var RandomNumbers=[];
var i = 0;
var Random;
while (RandomNumbers.length<students.length) {
  Random=Math.floor(Math.random()*students.length);
  if(!RandomNumbers.includes(Random)){
    RandomNumbers.push(Random);}
    i++;
  }
  console.log(RandomNumbers);
  // ciclavi in questi numeri randomici e poi facevi la verifica per
  // studente promosso
  var capitano3;
  for (var i = 0; i < RandomNumbers.length; i++) {
    if(RandomNumbers[i] <promossi.length)
    { capitano3=promossi[RandomNumbers[i]];
      break;
    } else {
      continue;
    }
  }

  console.log(capitano3);
