fe = (function () {
  'use strict'
  var fe = {
    order: ordenarArray,
    tam: tamanho,
    soma: somatorio,
    prod: produto,
    mediaA: mediaAritmetica,
    mediaG: mediaGeometrica,
    mediaH: mediaHarmonica,
    moda: moda,
    median: median,
    maior: maiorNumero,
    menor: menorNumero,
    amplT: amplitudeTotal,
    amplQ: amplitudeQuartilitica,
    amplP: amplitudePercentilica,
    sap: semiAmplitudePercentilica,
    quartil: quartil,
    decil: decil,
    percentil: percentil,
    rmq: raizMediaQuadratica,
    desvioQ: desvioQuartilico,
    dma: desvioMedioAbsoluto,
    mda: desvioMedianaAbsoluto,
    varian: variancia,
    dp: desvioPadrao,
    cv: coefiecienteVariacao,
    zscore: zscore,
    as1: assimetriaPearson1,
    as2: assimetriaPearson2,
    caq: coefiecienteAssimetriaQuartilico,
    cap: coefiecienteAssimetriaPercentilico,
    cpc: coefiecientePercentilicoCurtose,
    cma: coefiecienteMomentoAssimetria,
    cab: coefiecienteAssimetriaBowley,
    momentoUm,
    momentoDois,
    momentoTres,
    momentoQuatro

  }

  function ordenarArray (arr) {
    return (arr.sort((a, b) => {
      return a - b
    }))
  }

  function tamanho (arr) {
    return (arr.length)
  }

  function somatorio (arr) {
    return (arr.reduce((a, b) => {
      return a + b
    }))
  }

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
  arr.sort( function(a,b) {return a - b;} );
  var meio = Math.floor(arr.length/2);
    if(arr.length % 2)
        return arr[meio];
    else
        return (arr[meio-1] + arr[meio]) / 2.0;
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
       return (median(arr))
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
 function amplitudePercentilica(arr) {
  return (percentil(arr, 90) - percentil(arr, 10))
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
        return (median(arr))
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
        return (decil(arr, 1))
      }
    }
    if (typeof percentis[P] !== 'function') {
      throw new Error('Percentil invalido')
    }
    return percentis [P]()
  }
  function amplitudePercentilica (arr) {
    return (percentil(arr, 90) - percentil(arr, 10))
  }

  function raizMediaQuadratica (arr) {
    return (Math.sqrt(Math.pow(mediaAritmetica(arr), 2)))
  }
  function desvioMedioAbsoluto (arr, r) {
    var med = mediaAritmetica(arr);
    var tam = 1/tamanho(arr);
    var maparr = (arr.map((elemen) => { return (Math.pow(Math.abs(elemen - med ), (r)))}).reduce((a, b) => {return (a + b) }))
    return tam * maparr
  }

  function desvioMedianaAbsoluto (arr) {
    var me = median(arr);
    var tam = 1/tamanho(arr);
    var maparr = arr.map(function(elemen){
      return Math.abs(elemen - me)
    }).reduce((a,b)=>{
      return a+b
    });
    return tam * maparr
    }

  function semiAmplitudePercentilica (arr) {
    var p90 = percentil(arr,90);
    var p10 = percentil(arr,10);
    var meio = 1/2
    return (meio * (p90 - p10))
  }

  function variancia (arr) {
    return desvioMedioAbsoluto(arr, 2)
  }

  function desvioPadrao (arr) {
    return (Math.sqrt(variancia(arr)))
  }
  function coefiecienteVariacao (arr) {
    var desvp = desvioPadrao(arr);
    var med = mediaAritmetica(arr)
    return ((desvp / (med)) * 100 + "%")
  }
  function coefiecientePercentilicoCurtose(arr) {
    var q3 = quartil(arr,3)
    var q1 = quartil(arr,1)
    var p90 = percentil(arr,90)
    var p10 = percentil(arr,10)
    return ((q3-q1)/(2*(p90-p10)))
  }
  function coefiecienteMomentoAssimetria(arr) {
    return momentoTres(arr)/Math.sqrt(Math.pow((momentoDois(arr)),3))
  }
function coefiecienteAssimetriaBowley(arr) {
  var q3 = quartil(arr,3)
  var q1 = quartil(arr,1)
  var me = median(arr);
  return ((q1+q3)-(2 * me))/(q3-q1)
}
  function zscore (arr) {
    var med = mediaAritmetica(arr);
    var desvp = desvioPadrao(arr);
    var maparr = arr.map(function(elemen){
      return Math.abs(elemen - med)
    }).reduce((a,b)=>{
      return a+b
    });
    return (maparr / desvp)
  }

  function assimetriaPearson1 (arr) {
    var me = mediaAritmetica(arr);
    var mode = moda(arr);
    var desvp = desvioPadrao(arr)
    return (me - mode) / desvp
  }
  function assimetriaPearson2 (arr) {
    var me = mediaAritmetica(arr);
    var med = median(arr);
    var mode = moda(arr);
    var desvp = desvioPadrao(arr);
    return (3 * (me - med)) / desvp
  }
  function coefiecienteAssimetriaQuartilico (arr) {
    var q3 = quartil(arr,3)
    var q1 = quartil(arr,1)
    return (q3 - 2 * (q3 + q1)) / q3 - q1
  }
  function coefiecienteAssimetriaPercentilico (arr) {
    var p90 = percentil(arr,90);
    var p50 = percentil(arr,10);
    var p10 = percentil(arr,10);
    return (p90 - 2 * (p50) + p10) / p90 - p10
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
