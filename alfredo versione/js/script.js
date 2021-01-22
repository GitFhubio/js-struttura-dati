$(document).ready(function(){

  // DATI
const fieldCodes = [
  'W', 'U', 'B', 'R', 'G'
]

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
]

// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

}


const cards = [{

  cardName: 'Grizzly Bears',

  cost: {
    genericCostNumber: 1,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],  // 'W',  - un suo riferimento
      fieldCodes[2]   // 'B'
    ],
  },

  picture: 'images/i.png',
  cardType: cardTypes[1],
  cardObject: 'Bear',

  editionType: editions['BL'],

  description: 'Lorem ipsum',
  story: 'Naltro Lorem Ipsum',

  score: {
    power: 2,  // filtrarlo per power
    toughness: 2
  }

  },
  {

    cardName: 'Sviluppatore guerriero',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 5,  // r
      toughness: 3
    }

    },
    {

      cardName: 'Grizzly Bears',

      cost: {
        genericCostNumber: 1,
        costFields: [ // colors array con riferimento a fieldCodes
          fieldCodes[0],  // 'W',  - un suo riferimento
          fieldCodes[2]   // 'B'
        ],
      },

      picture: 'images/i.png',
      cardType: cardTypes[1],
      cardObject: 'Bear',

      editionType: editions['BL'],

      description: 'Lorem ipsum',
      story: 'Naltro Lorem Ipsum',

      score: {
        power: 2,  // filtrarlo per power
        toughness: 2
      }

      },
      {

        cardName: 'Mewtwo',

        cost: {
          genericCostNumber: 5,
          costFields: [ // colors array con riferimento a fieldCodes
            fieldCodes[0],
            fieldCodes[0],
            fieldCodes[0]
          ],
        },

        picture: 'images/g.png',  // da inserire immagine
        cardType: cardTypes[1],
        cardObject: 'Bear',

        editionType: editions['BL'],

        description: 'Il potere della mente più forte del mondo!',
        story: 'Il pokemon clonato della leggenda di Mew.',

        score: {
          power: 5,  // r
          toughness: 3
        }

      },
      {

        cardName: 'Kelenvorita',

        cost: {
          genericCostNumber: 5,
          costFields: [ // colors array con riferimento a fieldCodes
            fieldCodes[0],
            fieldCodes[2],
          ],
        },

        picture: 'images/g.png',  // da inserire immagine
        cardType: cardTypes[1],
        cardObject: 'Mezzorco',

        editionType: editions['SP'],

        description: 'Quando arriva a 0 punti acquista un punto ferita',
        story: 'Kelemborg',

        score: {
          power: 5,  // r
          toughness: 3
        }

      },
      {

        cardName: 'Pardomecchia',

        cost: {
          genericCostNumber: 5,
          costFields: [ // colors array con riferimento a fieldCodes
            fieldCodes[0],
            fieldCodes[2],
          ],
        },

        picture: 'images/g.png',  // da inserire immagine
        cardType: cardTypes[3],
        cardObject: 'Mezzorco',

        editionType: editions['SP'],

        description: 'Quando arriva a 0 punti perde un punto ferita',
        story: 'Kelemborg delenda est',

        score: {
          power: 5,  // r
          toughness: 3
        }

        }
]

console.log(cards);
//METODI
function filterByPower(powerValue,array){

// si poteva fare const arrayfilter= e poi return prima chiusura funzione
return array.filter((element) => {

return element.score.power === powerValue;

});
}


console.log('carte filtrate per power 3',filterByPower(5,cards));

function filterByCardType(cardTypeValue,array){
  return array.filter((element)=>{
return element.cardType === cardTypeValue;}
)
}
function render(DOMElementId,array){
const cardListHTMLElement = document.getElementById(DOMElementId);
cardListHTMLElement.innerHTML='';

array.forEach((item) => {
cardListHTMLElement.innerHTML +=` <li>
<div><h2>Nome carta: ${element.cardName}</h2>
<h2>Tipo carta: ${element.cardType}</h2>
${element.cardName}</div>
</li>
`
});


}

// output HTML

function renderSelect(DOMElementId,array){

const select=document.getElementById(DOMElementId);
array.forEach((element) => {
  select.innerHTML+=`<option value="${element}">$element</option>`

});

}
//rendering iniziale
render('listaCarte',cards);
renderSelect('powerSelect',powerValues);
renderSelect('cardTypeSelect',cardTypes);
//Eventi da registrare
$('#powerSelect').change(function(){
  if(isNaN($(this).val())){
    alert('Scegli un valore numerico');
  }
  console.log('Power select change');
  const selectValue =parseInt($(this).val());
  const filteredArray= filterByPower(selectValue,cards);

  render('listaCarte',filteredArray);
});

$("#cardTypeSelect").change(function()

{
  const selectValue=$(this).val();
  const filteredArray=filterByCardType(selectValue,cards)
  render('listaCarte',filteredArray);
}
);

$('#button').click(function(){
render('listaCarte',cards)

});









}
);
