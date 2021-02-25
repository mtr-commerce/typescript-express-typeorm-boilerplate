import { OptionsValue, ReceivedOptionsValues, OptionsValues } from '../types/prices';

export const MIN_PRICE = 5400;

export const priceList: OptionsValues = {
  otros: [
    {
      name: 'aceitunas',
      value: 2250,
      img: 'aceitunas.jpg'
    },
    {
      name: 'aguacate',
      value: 2150,
      img: 'aguacate.jpg'
    },
    {
      name: 'croutones',
      value: 0,
      img: 'croutones.jpg'
    },
    {
      name: 'maní',
      value: 1600,
      img: 'mani.jpg'
    },
    {
      name: 'manzana',
      value: 1600,
      img: 'manzana.jpg'
    },
    {
      name: 'naranja',
      value: 950,
      img: 'naranja.jpg'
    },
    {
      name: 'nueces caramelizadas',
      value: 3350,
      img: 'nueces-caramelizadas.jpg'
    },
    {
      name: 'risoni con tomates secos & queso feta',
      value: 2700,
      img: 'risoni-con-tomates-secos-queso-feta.jpg'
    },
    {
      name: 'semillas de girasol',
      value: 1950,
      img: 'semillas-de-girasol.jpg'
    },
    {
      name: 'taboulé',
      value: 2150,
      img: 'taboule.jpg'
    },
    {
      name: 'tornillos de pasta',
      value: 2250,
      img: 'tornillos-de-pasta.jpg'
    },
    {
      name: 'tzatziki',
      value: 2250,
      img: 'tzatziki.jpg'
    },
    {
      name: 'uva pasa',
      value: 1600,
      img: 'uva-pasa.jpg'
    }
  ],
  vegetales: [
    {
      name: 'arverja',
      value: 1700,
      img: 'arverja.jpg'
    },
    {
      name: 'apio',
      value: 1300,
      img: 'apio.jpg'
    },
    {
      name: 'arroz de coliflor',
      value: 2050,
      img: 'arroz-de-coliflor.jpg'
    },
    {
      name: 'brócoli',
      value: 1300,
      img: 'brocoli.jpg'
    },
    {
      name: 'cebolla roja encurtida',
      value: 1300,
      img: 'cebolla-roja-encurtida.jpg'
    },
    {
      name: 'champignones',
      value: 1800,
      img: 'champignones.jpg'
    },
    {
      name: 'espinaca',
      value: 1300,
      img: 'espinaca.jpg'
    },
    {
      name: 'palmitos',
      value: 2250,
      img: 'palmitos.jpg'
    },
    {
      name: 'pepino',
      value: 0,
      img: 'pepino.jpg'
    },
    {
      name: 'pimentón asado',
      value: 2250,
      img: 'pimenton-asado.jpg'
    },
    {
      name: 'raices chinas',
      value: 1300,
      img: 'raices-chinas.jpg'
    },
    {
      name: 'remolacha',
      value: 1300,
      img: 'remolacha.jpg'
    },
    {
      name: 'tomate',
      value: 1600,
      img: 'tomate.jpg'
    },
    {
      name: 'tomates secos',
      value: 3000,
      img: 'tomates-secos.jpg'
    },
    {
      name: 'zanahoria',
      value: 0,
      img: 'zanahoria.jpg'
    },
  ],
  granos: [
    {
      name: 'arroz integral',
      value: 2050,
      img: 'arroz-integral.jpg'
    },
    {
      name: 'arroz quinoa',
      value: 2250,
      img: 'arroz-quinoa.jpg'
    },
    {
      name: 'cuscús',
      value: 2700,
      img: 'cuscus.jpg'
    },
    {
      name: 'garbanzo',
      value: 1500,
      img: 'garbanzo.jpg'
    },
    {
      name: 'garbanzo crocante',
      value: 1900,
      img: 'garbanzo-crocante.jpg'
    },
    {
      name: 'lentejas crocantes',
      value: 1600,
      img: 'lentejas-crocantes.jpg'
    },
    {
      name: 'maíz',
      value: 1600,
      img: 'maiz.jpg'
    },
    {
      name: 'quinoa',
      value: 2350,
      img: 'quinoa.jpg'
    }
  ],
  proteina: [
    {
      name: 'atún',
      value: 4950,
      img: 'atun.jpg'
    },
    {
      name: 'bocconcini',
      value: 3900,
      img: 'bocconcini.jpg'
    },
    {
      name: 'camarones',
      value: 4000,
      img: 'camarones.jpg'
    },
    {
      name: 'huevo',
      value: 1600,
      img: 'huevo.jpg'
    },
    {
      name: 'parmesano',
      value: 2250,
      img: 'parmesano.jpg'
    },
    {
      name: 'pavo',
      value: 5300,
      img: 'pavo.jpg'
    },
    {
      name: 'pollo al limón',
      value: 4100,
      img: 'pollo-al-limon.jpg'
    },
    {
      name: 'queso campesino',
      value: 2800,
      img: 'queso-campesino.jpg'
    },
    {
      name: 'queso feta',
      value: 4100,
      img: 'queso-feta.jpg'
    },
    {
      name: 'tocineta',
      value: 2500,
      img: 'tocineta.jpg'
    },
    {
      name: 'tofu',
      value: 2250,
      img: 'tofu.jpg'
    }
  ],
  vinagretas: [
    {
      name: 'tahini',
      value: 0,
      img: 'tahini.jpg'
    },
    {
      name: 'vinagreta balsámica',
      value: 0,
      img: 'vinagreta-balsamica.jpg'
    },
    {
      name: 'vinagreta cilantro',
      value: 0,
      img: 'vinagreta-cilantro.jpg'
    },
    {
      name: 'vinagreta clásica',
      value: 0,
      img: 'vinagreta-clasica.jpg'
    },
    {
      name: 'vinagreta de jengibre & ajonjoli',
      value: 0,
      img: 'vinagreta-de-jengibre-ajonjoli.jpg'
    },
    {
      name: 'vinagreta de manzana',
      value: 0,
      img: 'vinagreta-de-manzana.jpg'
    },
    {
      name: 'vinagreta de naranja & mostaza',
      value: 0,
      img: 'vinagreta-de-naranja-mostaza.jpg'
    },
    {
      name: 'aceite de oliva',
      value: 2350,
      img: 'aceite-de-oliva.jpg'
    },
    {
      name: 'vinagreta de pepino & habanero',
      value: 0,
      img: 'vinagreta-de-pepino-habanero.jpg'
    },
    {
      name: 'vinagreta de pesto',
      value: 0,
      img: 'vinagreta-de-pesto.jpg'
    },
  ],
  base: [
    {
      name: 'lechuga romana',
      value: 0,
      img: 'lechuga-romana.jpg'
    },
    {
      name: 'lechuga mix',
      value: 0,
      img: 'lechuga-mix.jpg'
    },
    {
      name: 'rugula',
      value: 0,
      img: 'rugula.jpg'
    },
    {
      name: 'zanahoria',
      value: 0,
      img: 'zanahoria.jpg'
    },
    {
      name: 'porcion de pan',
      value: 0,
      img: 'porcion-de-pan.jpg'
    },
    {
      name: 'vinagreta',
      value: 0,
      img: 'vinagreta.jpg'
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
