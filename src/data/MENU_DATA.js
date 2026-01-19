export const MENU_DATA = {
  categories: [
    {
      id: 'antipasti',
      name: 'Antipasti / Przystawki',
      items: [
        {
          id: 'bruschetta-pomodoro',
          name: 'Bruschetta Pomodoro',
          description: 'Pomidory, bazylia, czosnek, oliwa E.V.O., 4 szt.',
          price: '21 zł',
          isVegetarian: true
        },
        {
          id: 'bruschetta-gamberi',
          name: 'Bruschetta Gamberi',
          description: 'Krewetki, grzyby nameko, kiełki groszku, czosnek',
          price: '36 zł'
        },
        {
          id: 'tagliere-italiano',
          name: 'Tagliere Italiano',
          description: 'Talerz włoskich wędlin i serów podawany z naszym domowym pieczywem. Prosciutto di Parma, Spianata Calabrese D.O.P., Prosciutto Cotto, Taleggio, Gorgonzola D.O.P., Grana Padano D.O.P., grillowane warzywa, pesto z suszonych pomidorów',
          price: '55 zł / 95 zł'
        },
        {
          id: 'focaccia',
          name: 'Focaccia',
          description: 'Oliwa E.V.O., rozmaryn, sól',
          price: '14 zł',
          isVegetarian: true
        },
        {
          id: 'focaccia-pomodori',
          name: 'Focaccia z suszonymi pomidorami',
          description: 'Oliwa E.V.O., sól, suszone pomidory',
          price: '18 zł',
          isVegetarian: true
        },
        {
          id: 'krewetki-maslano-winne',
          name: 'Krewetki w sosie maślano-winnym',
          description: 'Krewetki 16/20 7 szt. podawane w sosie maślano-winnym, cukinia, pomidorki koktajlowe, z wypiekanym przez nas pieczywem',
          price: '41 zł'
        }
      ]
    },
    {
      id: 'insalate',
      name: 'Insalate / Sałatki',
      items: [
        {
          id: 'salatka-krewetki',
          name: 'Sałatka z krewetkami',
          description: 'Mix sałat, kozi ser zapiekany z miodem, pomidorki koktajlowe, marynowane krewetki 5 szt., vinegret mango, prażone pestki dyni, owoce sezonowe, podawane z naszym pieczywem',
          price: '47 zł'
        },
        {
          id: 'italiana',
          name: 'Italiana',
          description: 'Mix sałat, rukola, pomidorki koktajlowe, Prosciutto di Parma, Grana Padano D.O.P., oliwa, podawana z domowym pieczywem, mozzarella fior di latte',
          price: '38 zł'
        },
        {
          id: 'pere',
          name: 'Pere',
          description: 'Mix sałat, rukola, karmelizowana gruszka, gorgonzola D.O.P., pomidorki koktajlowe, krem balsamiczny, podawana z domowym pieczywem',
          price: '36 zł',
          isVegetarian: true
        },
        {
          id: 'tomino',
          name: 'Tomino',
          description: 'Grillowany ser Tomino z kremowym wnętrzem, sałata, rukola, pomidorki cherry, owoce sezonowe, pestki dyni, oliwa E.V.O., balsamico, nasze pieczywo',
          price: '41 zł',
          isVegetarian: true
        }
      ]
    },
    {
      id: 'ravioli-gnocchi',
      name: 'Ravioli & Gnocchi',
      items: [
        {
          id: 'ravioli-kaczka',
          name: 'Ravioli z kaczką',
          description: 'Domowe włoskie pierożki z mięsem, podawane z kremowym pomidorowym sosem lub żurawiną',
          price: '34 zł'
        },
        {
          id: 'ravioli-ricotta',
          name: 'Ravioli con ricotta e spinaci',
          description: 'Domowe włoskie pierożki ze szpinakiem i ricottą podawane w sosie maślanym z szałwią',
          price: '32 zł',
          isVegetarian: true
        },
        {
          id: 'gnocchi-sorrentina',
          name: 'Gnocchi Sorrentina',
          description: 'Włoskie kluseczki z sosem pomidorowym, mozzarella fior di latte, Grana Padano D.O.P., bazylia',
          price: '33 zł',
          isVegetarian: true
        },
        {
          id: 'gnocchi-quattro-formaggi',
          name: 'Gnocchi di patate ai quattro formaggi',
          description: 'Domowe włoskie kluseczki z sosem z 4 serów, orzechy włoskie (Gorgonzola, Taleggio, Grana Padano D.O.P., Mozzarella)',
          price: '35 zł',
          isVegetarian: true
        }
      ]
    },
    {
      id: 'pasta',
      name: 'Makaron (Tagliatelle / Penne / Spaghetti)',
      items: [
        {
          id: 'pasta-salumi',
          name: 'Salumi',
          description: 'Włoskie wędliny, pomidory, cebula czerwona, Grana Padano D.O.P.',
          price: '39 zł',
          isSpicy: true
        },
        {
          id: 'pasta-zucca',
          name: 'Zucca',
          description: 'Pikantny mus dyniowy, guanciale, policzki wieprzowe, pomidorki koktajlowe, dymka, Grana Padano D.O.P.',
          price: '39 zł',
          isSpicy: true
        },
        {
          id: 'funghi-salsiccia',
          name: 'Funghi e Salsiccia',
          description: 'Kremowy sos, pieczarki, czosnek, Salsiccia - włoska kiełbaska wieprzowa, pomidorki koktajlowe, Grana Padano D.O.P.',
          price: '41 zł'
        },
        {
          id: 'gamberi-zucchine',
          name: 'Gamberi e Zucchine',
          description: 'Krewetki, pomidorki koktajlowe, cukinia, czosnek, pietruszka',
          price: '47 zł'
        },
        {
          id: 'gamberi-chorizo',
          name: 'Gamberi e Chorizo',
          description: 'Sos śmietanowy, nduja, chorizo, krewetki, wino, pomidorki koktajlowe, Grana Padano D.O.P.',
          price: '48 zł',
          isSpicy: true
        },
        {
          id: 'pasta-bufala',
          name: 'Bufala',
          description: 'Smażone pomidorki koktajlowe, czosnek, sos pomidorowy, bufala, pesto bazyliowe',
          price: '42 zł',
          isVegetarian: true
        }
      ]
    },
    {
      id: 'pizza',
      name: 'Pizza 32cm',
      items: [
        {
          id: 'pizza-margherita',
          name: 'Margherita',
          description: 'Sos z włoskich pomidorów, mozzarella fior di latte, bazylia, oliwa EVO',
          price: '23 zł',
          isVegetarian: true
        },
        {
          id: 'pizza-massimo',
          name: 'Massimo',
          description: 'Mozzarella fior di latte, sos śmietanowy, speck, grzyby nameko, gorgonzola D.O.P., dymka',
          price: '44 zł'
        },
        {
          id: 'pizza-bufala',
          name: 'Bufala',
          description: 'Sos pomidorowy, mozzarella di Bufala Campana D.O.P., oliwa EVO, po wypieku: pesto bazyliowe, świeża bazylia',
          price: '38 zł',
          isVegetarian: true
        },
        {
          id: 'pizza-pere',
          name: 'Pere',
          description: 'Sos śmietanowy, gruszka marynowana, gorgonzola D.O.P., orzechy włoskie, miód, mozzarella fior di latte',
          price: '38 zł',
          isVegetarian: true
        },
        {
          id: 'pizza-regina',
          name: 'Regina',
          description: 'Sos z włoskich pomidorów, mozzarella fior di latte, Prosciutto Cotto, pieczarki',
          price: '32 zł'
        },
        {
          id: 'pizza-capricciosa',
          name: 'Capricciosa',
          description: 'Sos z włoskich pomidorów, mozzarella fior di latte, Prosciutto Cotto, karczochy, pieczarki, oliwki riviera',
          price: '37 zł'
        },
        {
          id: 'pizza-diavola',
          name: 'Diavola',
          description: 'Sos z włoskich pomidorów, mozzarella fior di latte, czosnek, Spianata Calabrese D.O.P., N\'duja',
          price: '38 zł',
          isSpicy: true
        },
        {
          id: 'pizza-parma',
          name: 'Parma',
          description: 'Sos z włoskich pomidorów, mozzarella fior di latte, Prosciutto di Parma, rukola, pomidorki koktajlowe, Grana Padano D.O.P.',
          price: '42 zł'
        },
        {
          id: 'pizza-italia',
          name: 'Italia',
          description: 'Domowe pesto z bazylii, mozzarella fior di latte, ricotta, pomidory koktajlowe, bazylia',
          price: '37 zł',
          isVegetarian: true
        },
        {
          id: 'pizza-4-formaggi',
          name: '4 Formaggi',
          description: 'Mozzarella fior di latte, gorgonzola D.O.P., taleggio, Grana Padano D.O.P.',
          price: '38 zł',
          isVegetarian: true
        },
        {
          id: 'pizza-carbonara',
          name: 'Carbonara',
          description: 'Żółtko, mozzarella fior di latte, Grana Padano D.O.P., guanciale - policzek wieprzowy, pieprz czarny',
          price: '38 zł'
        },
        {
          id: 'pizza-inferno',
          name: 'Inferno',
          description: 'Sos z włoskich pomidorów, mozzarella fior di latte, Spianata Calabrese, jalapeno, N\'duja, oliwki Riviera, czerwona cebula',
          price: '42 zł',
          isSpicy: true
        },
        {
          id: 'pizza-salame-napoli',
          name: 'Salame Napoli',
          description: 'Sos z włoskich pomidorów, mozzarella fior di latte, Salame Nostrano',
          price: '33 zł'
        },
        {
          id: 'pizza-zucca',
          name: 'Zucca',
          description: 'Pikantny mus dyniowy, mozzarella fior di latte, Salame Nostrano lub Spianata Calabrese, pomidorki koktajlowe, gorgonzola D.O.P., świeża dymka',
          price: '39 zł',
          isSpicy: true
        },
        {
          id: 'pizza-salsiccia',
          name: 'Salsiccia',
          description: 'Oliwa E.V.O., mozzarella fior di latte, scamorza wędzona, salsiccia, friarielli - neapolitański brokuł',
          price: '40 zł'
        },
        {
          id: 'pizza-chorizo',
          name: 'Chorizo',
          description: 'Ciasto paszykowe (?), mozzarella fior di latte, ser cheddar, chorizo, czerwona cebula, dymka',
          price: '41 zł',
          isSpicy: true
        },
        {
          id: 'pizza-burrata',
          name: 'Burrata',
          description: 'Sos pomidorowy, Spianata Calabrese, Burrata, miód pepperoncino, bazylia',
          price: '49 zł',
          isSpicy: true
        },
        {
          id: 'pizza-gamberi',
          name: 'Gamberi',
          description: 'Mozzarella fior di latte, cukinia, krewetki w sosie maślano-winnym, pomidorki koktajlowe, purée czosnkowe',
          price: '49 zł'
        }
      ]
    },
    {
      id: 'dolci',
      name: 'Dolci / Desery',
      items: [
        {
          id: 'canolli',
          name: 'Canolli',
          description: 'Tradycyjny włoski deser rurka z kremem',
          price: '15 zł',
          isVegetarian: true
        },
        {
          id: 'tiramisu',
          name: 'Tiramisu / Tiramisu Pistacjowe',
          description: 'Klasyczny włoski deser kawowy lub w wersji z pistacją',
          price: '24 / 29 zł',
          isVegetarian: true
        },
        {
          id: 'panna-cotta',
          name: 'Panna Cotta',
          description: 'Gotowana śmietanka z dodatkami',
          price: '19 zł',
          isVegetarian: true
        }
      ]
    }
  ]
};