fe = (function() {
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
    mediana: mediana,
    maior: maiorNumero,
    menor: menorNumero,
    amplT: amplitudeTotal,
    amplQ: amplitudeQuartilitica,
    amplP: amplitudeentrePercentis,
    sap: semiAmplitudeentrePercentis,
    q1: quartilInferior,
    q2: quartilMedio,
    q3: quartilSuperior,
    d1: decilUm,
    d2: decilDois,
    d5: decilCinco,
    d9: decilNove,
    p10: percentilDez,
    p20: percentilVinte,
    p50: percentilCinquenta,
    p90: percentilNoventa,
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
    cap: coefiecienteAssimetriaPercentilico
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

 function mediana(arr) {
  /* Object.values(obj)*/
  return ((tamanho(arr) + 1) / 2)
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

 function quartilInferior(arr) {
  return ((tamanho(arr) + 1) / 4)
 }

 function quartilMedio(arr) {
  return (2 * (tamanho(arr) + 1) / 4)
 }

 function quartilSuperior(arr) {
  return (3 * (tamanho(arr) + 1) / 4)
 }

 function decilUm(arr) {
  return (1 * (tamanho(arr) + 1) / 10)
 }

 function decilDois(arr) {
  return (2 * (tamanho + 1) / 10)
 }

 function decilCinco(arr) {
  return (5 * (tamanho(arr) + 1) / 10)
 }

 function decilNove(arr) {
  return (9 * (tamanho(arr) + 1) / 10)
 }

 function percentilDez(tamanho) {
  return (10 * (tamanho + 1) / 100)
 }

 function percentilDez(arr) {
  return (10 * (tamanho(arr) + 1) / 100)
 }

 function percentilVinte(arr) {
  return (20 * (tamanho(arr) + 1) / 100)
 }

 function percentilCinquenta(arr) {
  return (50 * (tamanho(arr) + 1) / 100)
 }

 function percentilNoventa(arr) {
  return (90 * (tamanho(arr) + 1) / 100)
 }

 function raizMediaQuadratica(arr) {
  return (Math.sqrt(Math.pow(mediaAritmetica(arr), 2)))
 }

 function desvioQuartilico(arr) {
  return ((quartilSuperior(arr) - quartilInferior(arr)) / 2)
 }

 function desvioMedioAbsoluto(arr) {
  return ((1 / tamanho(arr)) * (arr.map((elemen) => {
   return (Math.abs(elemen - mediaAritmetica(arr)))
  }).reduce((a, b) => {
   return (a + b)
  })))
 }

 function desvioMedianaAbsoluto(arr) {
  return (null)
 }

 function amplitudeQuartilitica(arr) {
  return (quartilSuperior(arr) - quartilInferior(arr))
 }

 function semiAmplitudeentrePercentis(arr) {
  return ((1 / 2) * (percentilNoventa(arr) - percentilNoventa(arr)))
 }

 function amplitudeentrePercentis(arr) {
  return (percentilNoventa(arr) - percentilDez(arr))
 }

 function variancia(arr) {
  return ((1 / tamanho(arr)) * (arr.map((elemen) => {
   return (Math.pow(Math.abs(elemen - mediaAritmetica(arr)), (2)))
  }).reduce((a, b) => {
   return (a + b)
  })))
 }

 function desvioPadrao(arr) {
  return (Math.sqrt(variancia(arr)))
 }

 function coefiecienteVariancao(arr) {
  return (desvioPadrao(arr) / (mediaAritmetica(arr)) * 100)
 }

 function zscore(arr) {
   return (mediaAritmetica(arr) - mediaAritmetica(arr)/desvioPadrao(arr))
 }

function assimetriaPearson1(arr) {
  return (mediaAritmetica(arr) - moda(arr)/desvioPadrao(arr))
}
function assimetriaPearson2(arr) {
  return 3*(mediaAritmetica(arr)-mediana(arr[key])/desvioPadrao(arr))
}
function coefiecienteAssimetriaQuartilico (arr) {
  return (quartilSuperior(arr) - 2 * (quartilMedio(arr) + quartilInferior(arr)) / quartilSuperior(arr) - quartilInferior(arr))
}
function coefiecienteAssimetriaPercentilico (arr) {
  return (percentilNoventa(arr) - 2 * (percentilCinquenta(arr) + percentilDez(arr)) /
   percentilNoventa(arr) - percentilDez(arr))
}

 return fe
})()
