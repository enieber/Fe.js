module.exports = (function () {
  'use strict'
  var fe = {
    // order: ordenarArray,
    order: require('./functions/order'),
    tam: require('./functions/tam'),
    soma: require('./functions/soma'),
    prod: produto,
    mediaA: mediaAritmetica,
    mediaG: mediaGeometrica,
    mediaH: mediaHarmonica,
    moda: moda,
    mediana: mediana,
    maior: maiorNumero,
    menor: menorNumero,
    amplT: amplitudeTotal,
    amplQ: amplitudeQuartilitica,
    amplP: amplitudeentrePercentis,
    sap: semiAmplitudeentrePercentis,
    quartil: quartil,
    decil: decil,
    percentil: percentil,
    rmq: raizMediaQuadratica,
    desvioQ: desvioQuartilico,
    dma: desvioMedioAbsoluto,
    mda: desvioMedianaAbsoluto,
    varian: variancia,
    dp: desvioPadrao,
    cv: coefiecienteVariancao,
    zscore: zscore,
    as1: assimetriaPearson1,
    as2: assimetriaPearson2,
    caq: coefiecienteAssimetriaQuartilico,
    cap: coefiecienteAssimetriaPercentilico,
    momentoUm: momentoUm,
    momentoDois: momentoDois,
    momentoTres: momentoTres,
    momentoQuatro: momentoQuatro

  }

  // function ordenarArray (arr) {
  //   return (arr.sort((a, b) => {
  //     return a - b
  //   }))
  // }

  // function tamanho (arr) {
  //   return (arr.length)
  // }

  // function somatorio (arr) {
  //   return (arr.reduce((a, b) => {
  //     return a + b
  //   }))
  // }

  function produto (arr) {
    return arr.reduce((a, b) => {
      return a * b
    })
  }

  function mediaAritmetica (arr) {
    return (somatorio(arr) / tamanho(arr))
  }

  function mediaGeometrica (arr) {
    return Math.pow(produto(arr), 1 / tamanho(arr))
  }

  function mediaHarmonica (arr) {
    return (tamanho(arr) / (arr.map((num) => {
      return 1 / num
    }).reduce((a, b) => {
      return a + b
    })))
  }

  function moda (arr) {
    return ((arr.sort((a, b) =>
    (arr.filter(v => v === a).length) - (arr.filter(v => v === b).length))
  ).pop())
  }

  function mediana (arr) {
  /* Object.values(obj)*/
    return ((tamanho(arr) + 1) / 2)
  }

 function ordenarArray(arr) {
  return (arr.sort((a, b) => {
   return a - b
  }))
 }

 function tamanho(arr) {
  return (arr.length)
 }

 function somatorio(arr) {
  return (arr.reduce((a, b) => {
   return a + b
  }))
 }

 function produto(arr) {
  return arr.reduce((a, b) => {
   return a * b
  })
 }

 function mediaAritmetica(arr) {
  return (somatorio(arr) / tamanho(arr))
 }

 function mediaGeometrica(arr) {
  return Math.pow(produto(arr), 1 / tamanho(arr))
 }

 function mediaHarmonica(arr) {
  return (tamanho(arr) / (arr.map((num) => {
   return 1 / num
  }).reduce((a, b) => {
   return a + b
  })))
 }

 function moda(arr) {
  return ((arr.sort((a, b) =>
          (arr.filter(v => v === a).length) - (arr.filter(v => v === b).length))
    ).pop())
 }

 function median(arr) {
  ordenarArray(arr)
  var meio = Math.floor(values.length/2);
    if(values.length % 2)
        return values[meio];
    else
        return (values[meio-1] + values[meio]) / 2.0;
}

 function maiorNumero(arr) {
  return (Math.max.apply(null, arr))
 }

 function menorNumero(arr) {
  return (Math.min.apply(null, arr))
 }

 function amplitudeTotal(arr) {
  return (maiorNumero(arr) - menorNumero(arr))
 }
 /* Quartis*/

 function quartil(arr,Q) {
   var B = (tamanho(arr) + 1) / 4;
   var quartis = {
     '3': function () {
       return (3 * B)
     },
     '2': function () {
       return (mediana(arr))
     },
     '1': function () {
       return (1 * B)
     },
   };
   if (typeof quartis[Q] !== 'function') {
      throw new Error('Quartil invalido');
    }
   return quartis [Q]();
 }

 function amplitudeQuartilitica(arr) {
  return (quartil(arr, 3) - quartil(arr, 1))
 }

 function desvioQuartilico(arr) {
  return (amplitudeQuartilitica(arr) / 2)
 }

 function decil(arr,D) {
   var B = (tamanho(arr) + 1) / 10;
   var decis = {
     '9': function () {
       return (9 * B)
     },
     '5': function () {
       return (quartil(arr, 2))
     },
     '2': function () {
       return (2 * B)
     },
     '1': function () {
       return (1 * B)
     },
   };
   if (typeof decis[D] !== 'function') {
      throw new Error('Decil invalido');
    }
   return decis [D]();
 }

/* inserir um validador de P onde permita o usuario calcular qualquer valor*/
 function percentil(arr,P) {
   var arr = ordenarArray(arr)
   var B = (tamanho(arr) + 1) / 100;
   var percentis = {
     '90': function () {
       return (90 * B)
     },
     '50': function () {
       return (decil(arr, 5))
     },
     '20': function () {
       return (20 * B)
     },
     '10': function () {
       return (decil(arr, 10))
     },
   };
   if (typeof percentis[P] !== 'function') {
      throw new Error('Percentil invalido');
    }
   return percentis [P]();
 }
 function amplitudeentrePercentis(arr) {
  return (percentil(arr, 9) - percentil(arr, 1))
 }


  function maiorNumero (arr) {
    return (Math.max.apply(null, arr))
  }

  function menorNumero (arr) {
    return (Math.min.apply(null, arr))
  }

  function amplitudeTotal (arr) {
    return (maiorNumero(arr) - menorNumero(arr))
  }
  /* Quartis*/

  function quartil (arr, Q) {
    var B = (tamanho(arr) + 1) / 4
    var quartis = {
      '3': function () {
        return (3 * B)
      },
      '2': function () {
        return (mediana(arr))
      },
      '1': function () {
        return (1 * B)
      }
    }
    if (typeof quartis[Q] !== 'function') {
      throw new Error('Quartil invalido')
    }
    return quartis [Q]()
  }

  function amplitudeQuartilitica (arr) {
    return (quartil(arr, 3) - quartil(arr, 1))
  }

  function desvioQuartilico (arr) {
    return (amplitudeQuartilitica(arr) / 2)
  }

  function decil (arr, D) {
    var B = (tamanho(arr) + 1) / 10
    var decis = {
      '9': function () {
        return (9 * B)
      },
      '5': function () {
        return (quartil(arr, 2))
      },
      '2': function () {
        return (2 * B)
      },
      '1': function () {
        return (1 * B)
      }
    }
    if (typeof decis[D] !== 'function') {
      throw new Error('Decil invalido')
    }
    return decis [D]()
  }

  /* inserir um validador de P onde permita o usuario calcular qualquer valor*/
  function percentil (arr, P) {
    var arr = ordenarArray(arr)
    var B = (tamanho(arr) + 1) / 100
    var percentis = {
      '90': function () {
        return (90 * B)
      },
      '50': function () {
        return (decil(arr, 5))
      },
      '20': function () {
        return (20 * B)
      },
      '10': function () {
        return (decil(arr, 10))
      }
    }
    if (typeof percentis[P] !== 'function') {
      throw new Error('Percentil invalido')
    }
    return percentis [P]()
  }
  function amplitudeentrePercentis (arr) {
    return (percentil(arr, 9) - percentil(arr, 1))
  }

  function raizMediaQuadratica (arr) {
    return (Math.sqrt(Math.pow(mediaAritmetica(arr), 2)))
  }
  function desvioMedioAbsoluto (arr, x) {
    var r = x
    return ((1 / tamanho(arr)) * (arr.map((elemen) => {
      return (Math.pow(Math.abs(elemen - mediaAritmetica(arr)), (r)))
    }).reduce((a, b) => {
      return (a + b)
    })))
  }

  function desvioMedianaAbsoluto (arr) {
    return (null)
  }

  function semiAmplitudeentrePercentis (arr) {
    return ((1 / 2) * (percentil(arr, 90) - percentil(arr, 10)))
  }

  function variancia (arr) {
    return desvioMedioAbsoluto(arr, 2)
  }

  function desvioPadrao (arr) {
    return (Math.sqrt(variancia(arr)))
  }
  function coefiecienteVariancao (arr) {
    return (desvioPadrao(arr) / (mediaAritmetica(arr)) * 100)
  }

  function zscore (arr) {
    return (mediaAritmetica(arr) - mediaAritmetica(arr) / desvioPadrao(arr))
  }

  function assimetriaPearson1 (arr) {
    return (mediaAritmetica(arr) - moda(arr) / desvioPadrao(arr))
  }
  function assimetriaPearson2 (arr) {
    return 3 * (mediaAritmetica(arr) - mediana(arr) / desvioPadrao(arr))
  }
  function coefiecienteAssimetriaQuartilico (arr) {
    return (quartil(arr, 3) - 2 * (quartil(arr, 3) + quartil(arr, 1)) / quartil(arr, 3) - quartil(arr, 1))
  }
  function coefiecienteAssimetriaPercentilico (arr) {
    return (percentil(arr, 90) - 2 * (percentil(arr, 50) + percentil(arr, 10)) /
    percentil(arr, 90) - percentil(arr, 10))
  }
  function momentoUm (arr) {
    return mediaAritmetica(arr)
  }
  function momentoDois (arr) {
    return variancia(arr)
  }
  function momentoTres (arr) {
    return desvioMedioAbsoluto(arr, 3)
  }

  function momentoQuatro (arr) {
    return desvioMedioAbsoluto(arr, 4)
  }
  return fe
})()
