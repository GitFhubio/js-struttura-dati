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

  picture: 'https://www.conservationnw.org/wp-content/uploads/2020/03/JSW_6993-scaled.jpg',
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

    picture: 'https://quifinanza.it/wp-content/uploads/sites/5/2019/10/sviluppatore-web-1-1.jpg',  // da inserire immagine
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
        picture:'https://images.lacucinaitaliana.it/wp-content/uploads/2017/02/joe_bastianich.jpg',
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
          cardName: 'Oriente',
          cost:{
            genericCost:2,
              costFields:[
                fieldCodes[3],
              fieldCodes[3]
            ]
          },
          picture:'https://www.open.online/wp-content/uploads/2020/04/MEDIO-ORIENTE-TAG.jpg',
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
            picture:'https://images.everyeye.it/img-articoli/the-legend-of-zelda-breath-of-the-wild-dungeon-abilita-crescita-dell-eroe-speciale-v4-32625-1280x16.jpg',
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
              picture:'https://cultura.biografieonline.it/wp-content/uploads/2019/12/mito-di-pandora-vaso-di-pandora.jpg',
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
                picture:'https://wfprwpnressa01.blob.core.windows.net/sicurauto/2019/10/10/14/00/Fulmine.jpg',
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
                  picture:'https://media.newyorker.com/photos/5f5908c225409f35fe11402e/1:1/w_1706,h_1706,c_limit/Clegg-OnLava.jpg',
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
                    picture:'https://www.guidaolistica.com/media/k2/items/cache/57df6a0f34180006582f429068c6ac21_L.jpg',
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
  cardsContainer.innerHTML='';
  console.log(selected_power);
if (selected_power=='') {

console.log(cards);

cards.forEach((item) => {
const {cardName,cost,picture,cardType,cardObject,editionType,description,story,score} = item;
cardsContainer.innerHTML+=`
<div style="background-image: url('${picture}');">
<div><h4>${cardName}</h4> <div><span>${cost}</span></div></div>


</div>

`
});

}
else{
const selected_cards = cards.filter((item) => selected_power == item.score.power );
console.log(selected_cards);
selected_cards.forEach((item) => {
const {cardName,cost,picture,cardType,cardObject,editionType,description,story,score} = item;

cardsContainer.innerHTML+=`
<div style="background-image: url('${picture}');">${cardName}</div>

`
})
}
});

// MILESTONE3

cardTypes.forEach((element) => {
   myselect2.innerHTML += `
     <option value="${element}">${element}</option>
   `
 });
 myselect2.addEventListener('change',() => {
 let selected_type = myselect2.value;
   cardsContainer.innerHTML='';
if (selected_type=='') {

  cards.forEach((item) => {
  const {cardName,cost,picture,cardType,cardObject,editionType,description,story,score} = item;
  cardsContainer.innerHTML+=`
<div style="background-image: url('${picture}');">${cardName}</div>
  `
  });
console.log(cards);
}
else{

const selected_cards = cards.filter((item) => selected_type == item.cardType );
console.log(selected_cards);
selected_cards.forEach((item) => {
const {cardName,cost,picture,cardType,cardObject,editionType,description,story,score} = item;
cardsContainer.innerHTML+=`
<div style="background-image: url('${picture}');">${cardName}</div>
`
});

}
}
);
