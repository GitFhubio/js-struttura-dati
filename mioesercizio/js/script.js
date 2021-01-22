const fieldCodes =[
  'W','U','B','R','G'
]

const cardTypes=[
'terre','creature','incantesimi','artefatti','instantanei','stregonerie'
]

const editions={
  'BL':{
    edition:'boolean',
    rarity:'blue'
  },

  'SP':{edition:'Special',
rarity:'red'}
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
        cardName: 'Bastianich',
        cost:{
          genericCost:2,
            costFields:[
              fieldCodes[2],
            fieldCodes[2]
          ]
        },
        picture:'',
        cardType:cardTypes[1],
        cardObject:'Judge',
        editionType: editions['GG'],
        description:'Mangia scialatielli di pollo',
        story:'Vuoi che muoro',
        author:'Masterchef',
        score:{
          power:5,
          toughness:5
        }
      },
      {
          cardName: 'MedioOriente',
          cost:{
            genericCost:2,
              costFields:[
                fieldCodes[3],
              fieldCodes[3]
            ]
          },
          picture:'',
          cardType:cardTypes[0],
          cardObject:'land',
          editionType: editions['BL'],
          description:'La terra del sushi',
          story:'L\'urlo di Chang terrorizza l\'occidente',
          author:'Chang',
          score:{ power:1,
              toughness:2
            }
        },
        {
            cardName: 'Stasys',
            cost:{
              genericCost:1,
                costFields:[
                  fieldCodes[1],
                fieldCodes[3]
              ]
            },
            picture:'',
            cardType:cardTypes[2],
            cardObject:'strange',
            editionType: editions['GG'],
            description:'Blocca i nemici',
            story:'Zelda Breath of the Wild',
            author:'Nintendo',
            score:{
              power:1,
              toughness:2
            }
          },
          {
              cardName: 'Vaso di Pandora',
              cost:{
                genericCost:1,
                  costFields:[
                    fieldCodes[0],
                  fieldCodes[2]
                ]
              },
              picture:'',
              cardType:cardTypes[3],
              cardObject:'Vaso',
              editionType: editions['BL'],
              description:'Non aprirlo',
              story:'Se lo apri muori',
              author:'Artigiano sconosciuto',
              score:{
                power:2,
                toughness:2
              }
            },
            {
                cardName: 'Fulmine',
                cost:{
                  genericCost:1,
                    costFields:[
                      fieldCodes[2],
                    fieldCodes[4]
                  ]
                },
                picture:'',
                cardType:cardTypes[4],
                cardObject:'Out of nowhere',
                editionType: editions['BL'],
                description:'Non puoi sfuggire se hai metallo addosso',
                story:'A ciel sereno',
                author:'Dio',
                score:{
                  power:5,
                  toughness:2
                }
              },
              {
                  cardName: 'Ascia di lava',
                  cost:{
                    genericCost:1,
                      costFields:[
                        fieldCodes[0],
                      fieldCodes[2]
                    ]
                  },
                  picture:'',
                  cardType:cardTypes[5],
                  cardObject:'Ascia',
                  editionType: editions['BL'],
                  description:'Divide tutto a metà',
                  story:'Ha diviso originariamente buoni e cattivi',
                  author:'Freud',
                  score:{
                    power:3,
                    toughness:2
                  }
                },
                {
                    cardName: 'Invocazione a raccolta',
                    cost:{
                      genericCost:1,
                        costFields:[
                          fieldCodes[0],
                        fieldCodes[2]
                      ]
                    },
                    picture:'',
                    cardType:cardTypes[5],
                    cardObject:'Invocazione',
                    editionType: editions['BL'],
                    description:'Strimgiamci a coorte',
                    story:'Siam pronti alla morte',
                    author:'Carducci',
                    score:{
                      power:1,
                      toughness:3
                    }
                  },
                  ]

// MILESTONE 1

var lista=document.getElementById('lista');
cards.forEach((item) => {
  lista.innerHTML+=`<li>
  ${item.cardName}
  </li>`
});
const cardsContainer=document.getElementById('cards-container');
const myselect1 =document.getElementsByClassName('cards-filter1')[0];
const myselect2 =document.getElementsByClassName('cards-filter2')[0];



// MILESTONE 2
let power_list=[];
cards.forEach((item) => {
let score = item.score;
if (!power_list.includes(score.power))
{
 power_list.push(score.power);
}

})
 power_list=power_list.sort(function(a,b){return a - b});
power_list.forEach((element) => {
    myselect1.innerHTML += `
      <option value="${element}">${element}</option>
    `
  });

  myselect1.addEventListener('change',() => {
  let selected_power = myselect1.value;
  console.log(selected_power);
if (selected_power=='') {

console.log(cards);

}
else{
const selected_cards = cards.filter((item) => selected_power == item.score.power );
console.log(selected_cards);
}
}
);

// MILESTONE3


cardTypes.forEach((element) => {
   myselect2.innerHTML += `
     <option value="${element}">${element}</option>
   `
 });


 myselect2.addEventListener('change',() => {
 let selected_type = myselect2.value;
if (selected_type=='') {

console.log(cards);

}
else{
const selected_cards = cards.filter((item) => selected_type == item.cardType );
console.log(selected_cards);
}
}
);
