var fe = (function() {
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
    dp:desvioPadrao


  };
  /*ordenarArray*/
  function ordenarArray (arr){
  return arr.sort(function(a, b) { return a - b; });
  }
  /*tamanhoArray*/
  function tamanho (arr){
  return arr.length;
  }
  /*somatorioArray*/
  function somatorio (arr) {
    return arr.reduce(function(a,b){
      return a + b});
    }
    /*produtoArray*/
    function produto (arr){
      return arr.reduce(function (a, b) { return a * b })
    }
    /*mediaAritmetica*/
    function mediaAritmetica (arr) {
            return (somatorio(arr)/tamanho(arr));
    }
    /*mediaGeometrica*/
    function mediaGeometrica (arr){
      return Math.pow(produto(arr), 1 / tamanho(arr));
    }
    /*mediaHarmonica*/
    function mediaHarmonica (arr) {
      return (tamanho(arr) / (arr .map(function (num) {return 1 / num}).reduce(function (a, b) { return a + b })))
    }
    /*moda*/
    function moda (arr){
      return arr.reduce(
        function(a, b) { a[b] = (a[b] || 0) + 1;
      return a;
    }, {});}
    /*mediana*/
    /*tenho que */
    function mediana (arr){
    	return (tamanho(arr)+1)/2;
    }
    /*maiorNumeroArray*/
  function maiorNumero (arr){
  return Math.max.apply(null, arr);
  }
  /*menorNumeroArray*/
  function menorNumero (arr){
  return Math.min.apply(null, arr);
  }
  /*amplitudeTotal*/
  function amplitudeTotal (arr) {
    return maiorNumero(arr) - menorNumero(arr);
  }
    /*quartilInferior*/
  function quartilInferior (arr){
  	return (tamanho(arr)+1)/4;
  }
  /*quartilMedio*/
  function quartilMedio (arr){
  	return 2*(tamanho(arr)+1)/4;
  }
  /*quartilSuperior*/
  function quartilSuperior (arr){
  	return 3*(tamanho(arr)+1)/4;
  }
  /*decilUm*/
  function decilUm (arr){
    return (tamanho(arr)+1)/10;
  }
  /*decilDois*/
  function decilDois (arr){
    return 2*(tamanho+1)/10;
  }
  /*decilCinco*/
  function decilCinco (arr){
    return 5*(tamanho(arr)+1)/10;
  }
  /*decilNove*/
  function decilNove (arr){
    return 9*(tamanho(arr)+1)/10;
  }
  /*percentilDez*/
  function percentilDez (tamanho){
    return 10*(tamanho+1)/100;
  }
  /*percentilDez*/
  function percentilDez (arr){
    return 10*(tamanho(arr)+1)/100;
  }
  /*percentilVinte*/
  function percentilVinte (arr){
    return 20*(tamanho(arr)+1)/100;
  }
  /*percentilCinquenta*/
  function percentilCinquenta (arr){
    return 50*(tamanho(arr)+1)/100;
  }
  /*percentilNoventa*/
  function percentilNoventa (arr){
    return 90*(tamanho(arr)+1)/100;
  }
/*raizMediaQuadratica*/
function raizMediaQuadratica (arr) {
    return Math.sqrt(Math.pow(mediaAritmetica(arr), 2));
  };
  /*desvioQuartilico*/
  function desvioQuartilico (arr){
  	return (quartilSuperior(arr) - quartilInferior(arr))/2;
  }
  /*desvioMedioAbsoluto*/
  function desvioMedioAbsoluto (arr) {
    return (1/tamanho(arr))*(arr.map(function(elemen) {
       return Math.abs(elemen - mediaAritmetica(arr));
       }).reduce(function (a,b){
      return (a + b)
      })
    )
  }
  /*desvioMedianaAbsoluto*/
  function desvioMedianaAbsoluto (arr) {
    /*return (1/tamanho(arr))*(arr.map(function(elemen) {
       return Math.abs(elemen - mediana(arr));
       }).reduce(function (a,b){
      return (a + b) ;
      })
    );*/
    return null;
  }
  /*amplitudeQuartilitica*/
  function amplitudeQuartilitica (arr){
  	return (quartilSuperior(arr) - quartilInferior(arr));
  }
  /*semiAmplitudeentrePercentis*/
  function semiAmplitudeentrePercentis (arr){
    return (1/2)*(percentilNoventa(arr) - percentilNoventa(arr));
  }
  /*amplitudeentrePercentis*/
  function amplitudeentrePercentis (arr){
    return (percentilNoventa(arr) - percentilDez(arr));
  }
  /*variancia*/
  function variancia(arr) {
    return (1/tamanho(arr))*(arr.map(function(elemen) {
       return Math.pow(Math.abs(elemen - mediaAritmetica(arr)),(2));
       }).reduce(function (a,b){
      return (a + b) ;
      })
    );
  }
  /*desvioPadrao*/
  function desvioPadrao(arr) {
    return Math.sqrt(variancia(arr));
  }

  return fe;
})();
