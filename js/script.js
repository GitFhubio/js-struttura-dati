// output HTML
$(document).ready(function () {
  // DATI
  const fieldCodes = ['W', 'U', 'B', 'R', 'G'];

  const cardTypes = [
    'terre',
    'creature',
    'incantesimi',
    'artefatti',
    'instantanei',
    'stregonerie',
  ];

  const powerValues = [1, 2, 3, 4, 5];

  // Abbiamo creato un oggetto di oggetti, come riferimento
  // di una edizione. Se ad esempio scrivo editions['SP']
  // allora otterrò tutto un oggetto che descrive
  // con più dettagli l'edizione.
  // come oggetto di oggetti, può essere navigato solo con il for-in
  const editions = {
    BL: {
      edition: 'Boolean',
      rarity: 'blue',
    },

    SP: {
      edition: 'Special',
      rarity: 'red',
    },
  };

  const cards = [
    // carta 1
    {
      cardName: 'Grizzly Bears',

      cost: {
        genericCostNumber: 1,
        costFields: [
          // colors array con riferimento a fieldCodes
          fieldCodes[0], // 'W',  - un suo riferimento
          fieldCodes[2], // 'B'
        ],
      },


      picture: 'https://www.conservationnw.org/wp-content/uploads/2020/03/JSW_6993-scaled.jpg',
      cardType: cardTypes[1],
      cardObject: 'Bear',

      editionType: editions['BL'],

      description: 'Orso mangia salmoni',
      story: 'Aspetta che risalgano le correnti e poi se li magna tutti',

      score: {
        power: 2, // filtrarlo per power
        toughness: 2,
      },
    },
    // carta 2
    {
      cardName: 'Sviluppatore guerriero',

      cost: {
        genericCostNumber: 3,
        costFields: [
          // colors array con riferimento a fieldCodes
          fieldCodes[2],
          fieldCodes[3],
        ],
      },
      picture: 'https://quifinanza.it/wp-content/uploads/sites/5/2019/10/sviluppatore-web-1-1.jpg',
      cardType: cardTypes[1],
      cardObject: 'Human',

      editionType: editions['BL'],

      description: 'Lo sviluppatore guerriero spezza i byte in bit!',
      story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

      score: {
        power: 2, // r
        toughness: 3,
      },
    },
    // carta 3
    {
      cardName: 'Mewtwo',

      cost: {
        genericCostNumber: 6,
        costFields: [
          // colors array con riferimento a fieldCodes
          fieldCodes[0],
          fieldCodes[0],
          fieldCodes[0],
        ],
      },

    picture: 'https://i.pinimg.com/originals/2c/dd/dd/2cdddd1f81c64cac5f4ff31e61fc1471.png',  // da inserire immagine
      cardType: cardTypes[1],
      cardObject: 'Pokemon',

      editionType: editions['BL'],

      description: 'Il potere della mente più forte del mondo',
      story: 'Il pokemon clonato dalla leggenda di Mew',

      score: {
        power: 5,
        toughness: 3,
      },
    },
    // carta 4
    {
      cardName: 'Fulmine',

      cost: {
        genericCostNumber: 2,
        costFields: [
          // colors array con riferimento a fieldCodes
          fieldCodes[0],
          fieldCodes[2],
        ],
      },

      picture:'https://wfprwpnressa01.blob.core.windows.net/sicurauto/2019/10/10/14/00/Fulmine.jpg',
      cardType: cardTypes[5],
      cardObject: "Meteo",

      editionType: editions['SP'],

      description:'Potere divino'
               ,
      story: 'Se indossi metallo sei spacciato',

      score: {
        power: 4,
        toughness: 3,
      },
    },
    // carta 5
    {
      cardName: 'Bastianich',
      cost: {
        genericCostNumber: 5,
        costFields: [
          // colors array con riferimento a fieldCodes
          fieldCodes[2], // 'B',  - un suo riferimento
        ],
      },
        picture:'https://images.lacucinaitaliana.it/wp-content/uploads/2017/02/joe_bastianich.jpg',
      cardType: cardTypes[4],
      cardObject: 'Masterchef',
      editionType: editions['SP'],
      description: 'Giudice lanciapiatti',
      story: 'Sai cosa sono le scialatelle di pollo?',
      cardColor: fieldCodes[2],
      score: {
        power: 3, // filtrarlo per power
        toughness: 0,
      }
    },
      {
          cardName: 'Oriente',
          cost:{
            genericCostNumber:2,
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
          score:{ power:1,
              toughness:2
            }
        },
        {
            cardName: 'Stasys',
            cost:{
              genericCostNumber:1,
                costFields:[
                  fieldCodes[1],
                fieldCodes[3]
              ]
            },
            picture:'https://i.ytimg.com/vi/m1dv5SdiB8I/maxresdefault.jpg',
            cardType:cardTypes[2],
            cardObject:'strumento',
            editionType: editions['SP'],
            description:'Blocca i nemici',
            story:'Zelda Breath of the Wild',
            score:{
              power:1,
              toughness:2
            }
          },
          {
              cardName: 'Vaso di Pandora',
              cost:{
                genericCostNumber:1,
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
    // carta 6
    {
      cardName: 'Spada leggendaria',

      cost: {
        genericCostNumber: 4,
        costFields: [0],
      },

      picture:'https://i.ytimg.com/vi/8NiCRYZVscc/maxresdefault.jpg',
      cardType: cardTypes[3],
      cardObject: 'Sword',

      editionType: editions['BL'],

      description:
        'Con questa infliggi il 150% in più di danno ai tuoi nemici.Sempre che riesci ad estrarla',
      story:
        "Una spada che non ha mai conosciuto il fodero, un'impugnatura che non ha mai conosciuto mano",

      score: {
        power: 1,
        toughness: 5,
      }
    },
    {
        cardName: 'Ascia di lava',
        cost:{
          genericCostNumber:1,
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
        score:{
          power:3,
          toughness:2
        }
      },
      {
          cardName: 'Invocazione a raccolta',
          cost:{
            genericCostNumber:1,
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
          score:{
            power:1,
            toughness:3
          }
        }
  ];

console.log(cards);
  //METODI (LOGICA)
  function filterByPower(powerValue, array) {
    return array.filter((element) => {
      return element.score.power === powerValue;
    });
  }

  function filterByCardType(cardTypeValue, array) {
    return array.filter((element) => {
      return element.cardType == cardTypeValue;
    });
  }

  function render(DOMElementId, array) {
    const cardListHTMLElement = document.getElementById(DOMElementId);
    cardListHTMLElement.innerHTML = '';

    array.forEach((element) => {
      cardListHTMLElement.innerHTML += `<li>
      <div class="card flex" style="background-image: url('${element.picture}');">
      <div class="head flex"><h4>${element.cardName}</h4> <div><span>${element.cost.genericCostNumber}</span></div></div>
      <div class="descrizione">
      <div class="center flex"><h3>${element.cardType} - ${element.cardObject}</h3><span class="rarity" style="background-color:${element.editionType.rarity};">${element.editionType.edition}</span></div>
      <div class="bottom"><h5>${element.description}</h5><p>${element.story}</p></div>
      </div>
      <span class="powers"> ${element.score.power} / ${element.score.toughness} </span>
      </div>
      </li>`;
    });
  }

  function renderSelect(DOMElementId, array) {
    const select = document.getElementById(DOMElementId);

    array.forEach((element) => {
      select.innerHTML += `<option value="${element}"> ${element} </option>`;
    });
  }

  // OUTPUT
  render('listaCarte', cards);
  renderSelect('powerSelect', powerValues);
  renderSelect('cardTypeSelect', cardTypes);

  //eventi da registrare
  $('#powerSelect').change(function () {
    if (isNaN($(this).val())) {
      alert('Scegli un valore numerico');
    } else {
      const selectValue = parseInt($(this).val());
      const filteredArray = filterByPower(selectValue, cards);

      render('listaCarte', filteredArray);
    }
  });

  $('#cardTypeSelect').change(function () {
    const selectValue = $(this).val();
    const filteredArray = filterByCardType(selectValue, cards);

    render('listaCarte', filteredArray);
  });

  $('#resetButton').click(function () {
    render('listaCarte', cards);
  });
});
