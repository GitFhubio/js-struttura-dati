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

      description: 'Lorem ipsum',
      story: 'Naltro Lorem Ipsum',

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
      cardObject: 'Bear',

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
        genericCostNumber: '',
        costFields: [
          // colors array con riferimento a fieldCodes
          fieldCodes[2], // 'B',  - un suo riferimento
        ],
      },
        picture:'https://images.lacucinaitaliana.it/wp-content/uploads/2017/02/joe_bastianich.jpg',
      cardType: cardTypes[2],
      cardObject: 'Enchant',
      editionType: editions['SP'],
      description: 'When paralyze ecc..',
      story: '',
      authorString: 'autore copyright autore',
      cardColor: fieldCodes[2],
      score: {
        power: 3, // filtrarlo per power
        toughness: 0,
      },
    },
    // carta 6
    {
      cardName: 'Link',

      cost: {
        genericCostNumber: 4,
        costFields: [],
      },

      picture:'https://images.everyeye.it/img-articoli/the-legend-of-zelda-breath-of-the-wild-dungeon-abilita-crescita-dell-eroe-speciale-v4-32625-1280x16.jpg',
      cardType: cardTypes[3],
      cardObject: 'Spirit',

      editionType: editions['BL'],

      description:
        'Questo guerriero non può essere fermato',
      story:
        "Una spada che non ha mai conosciuto il fodero, un'impugnatura che non ha mai conosciuto mano",

      score: {
        power: 1,
        toughness: 5,
      },
    },
  ];


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
      <div class="card" style="background-image: url('${element.picture}');">
      <div class="head flex"><h4>${element.cardName}</h4> <div><span>${element.cost.genericCostNumber}</span></div></div>
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
