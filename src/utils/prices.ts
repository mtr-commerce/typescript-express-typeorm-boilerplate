import { OptionsValue, ReceivedOptionsValues, OptionsValues } from '../types/prices';

export const MIN_PRICE = 5400;

export const priceList: OptionsValues = {
  otros: [
    {
      name: 'aceitunas',
      value: 2250
    },
    {
      name: 'aguacate',
      value: 2150
    },
    {
      name: 'croutones',
      value: 0
    },
    {
      name: 'maní',
      value: 1600
    },
    {
      name: 'manzana',
      value: 1600
    },
    {
      name: 'naranja',
      value: 950
    },
    {
      name: 'nueces caramelizadas',
      value: 3350
    },
    {
      name: 'risoni con tomates secos & queso feta',
      value: 2700
    },
    {
      name: 'semillas de girasol',
      value: 1950
    },
    {
      name: 'taboulé',
      value: 2150
    },
    {
      name: 'tornillos de pasta',
      value: 2250
    },
    {
      name: 'tzatziki',
      value: 2250
    },
    {
      name: 'uva pasa',
      value: 1600
    }
  ],
  vegetales: [
    {
      name: 'arverja',
      value: 1700
    },
    {
      name: 'apio',
      value: 1300
    },
    {
      name: 'arroz de coliflor',
      value: 2050
    },
    {
      name: 'brócoli',
      value: 1300
    },
    {
      name: 'cebolla roja encurtida',
      value: 1300
    },
    {
      name: 'champignones',
      value: 1800
    },
    {
      name: 'espinaca',
      value: 1300
    },
    {
      name: 'palmitos',
      value: 2250
    },
    {
      name: 'pepino',
      value: 0
    },
    {
      name: 'pimentón asado',
      value: 2250
    },
    {
      name: 'raices chinas',
      value: 1300
    },
    {
      name: 'remolacha',
      value: 1300
    },
    {
      name: 'tomate',
      value: 1600
    },
    {
      name: 'tomates secos',
      value: 3000
    },
    {
      name: 'zanahoria',
      value: 0
    },
  ],
  granos: [
    {
      name: 'arroz integral',
      value: 2050
    },
    {
      name: 'arroz quinoa',
      value: 2250
    },
    {
      name: 'cuscús',
      value: 2700
    },
    {
      name: 'garbanzo',
      value: 1500
    },
    {
      name: 'garbanzo crocante',
      value: 1900
    },
    {
      name: 'lentejas crocantes',
      value: 1600
    },
    {
      name: 'maíz',
      value: 1600
    },
    {
      name: 'quinoa',
      value: 2350
    }
  ],
  proteina: [
    {
      name: 'atún',
      value: 4950
    },
    {
      name: 'bocconcini',
      value: 3900
    },
    {
      name: 'camarones',
      value: 4000
    },
    {
      name: 'huevo',
      value: 1600
    },
    {
      name: 'parmesano',
      value: 2250
    },
    {
      name: 'pavo',
      value: 5300
    },
    {
      name: 'pollo al limón',
      value: 4100
    },
    {
      name: 'queso campesino',
      value: 2800
    },
    {
      name: 'queso feta',
      value: 4100
    },
    {
      name: 'tocineta',
      value: 2500
    },
    {
      name: 'tofu',
      value: 2250
    }
  ],
  vinagretas: [
    {
      name: 'tahini',
      value: 0
    },
    {
      name: 'vinagreta balsámica',
      value: 0
    },
    {
      name: 'vinagreta cilantro',
      value: 0
    },
    {
      name: 'vinagreta clásica',
      value: 0
    },
    {
      name: 'vinagreta de jengibre & ajonjoli',
      value: 0
    },
    {
      name: 'vinagreta de manzana',
      value: 0
    },
    {
      name: 'vinagreta de naranja & mostaza',
      value: 0
    },
    {
      name: 'aceite de oliva',
      value: 2350
    },
    {
      name: 'vinagreta de pepino & habanero',
      value: 0
    },
    {
      name: 'vinagreta de pesto',
      value: 0
    },
  ],
  base: [
    {
      name: 'lechuga romana',
      value: 0
    },
    {
      name: 'lechuga mix',
      value: 0
    },
    {
      name: 'rugula',
      value: 0
    },
    {
      name: 'zanahoria',
      value: 0
    },
    {
      name: 'porcion de pan',
      value: 0
    },
    {
      name: 'vinagreta',
      value: 0
    }
  ]
};

export const priceListRaw = [
  ...priceList.base,
  ...priceList.otros,
  ...priceList.vegetales,
  ...priceList.granos,
  ...priceList.proteina,
  ...priceList.vinagretas,
];

export const priceBuilder = (options: ReceivedOptionsValues): number => {
  const optionsKeys = Object.keys(options);
  const accumulator: OptionsValue[] = [];
  optionsKeys.map(key => {
    const toppings = options[key];
    const test = toppings.forEach(t => {
      return priceList[key].forEach(o => {
        if (t === o.name) {
          accumulator.push(o);
        }
      });
    });
  });

  const total = accumulator.reduce((t, { value }) => t + value, 0);

  return total + MIN_PRICE;
};
