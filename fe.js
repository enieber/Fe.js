var fe = (function() {
  var fe = {
    ordenar:ordenarArray,
    tamanho:tamanho,
    somatorio:somatorio,
    produto:produto,
    mediaA:mediaAritmetica,
    mediaG:mediaGeometrica,
    mediaH:mediaHarmonica,
    moda:moda,
    mediana:mediana,
    max:maiorNumero,
    min:menorNumero,
    amplitude:amplitudeTotal,
    quartilInf:quartilInferior,
    quartilMed:quartilMedio,
    quartilSup:quartilSuperior,
    desvioQ:desvioQuartilico,
    amplitudeQ:amplitudeQuartilitica,


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
  /*desvioQuartilico*/
  function desvioQuartilico (arr){
  	return (quartilSuperior(arr) - quartilInferior(arr))/2;
  }
  /*amplitudeQuartilitica*/
  function amplitudeQuartilitica (arr){
  	return (quartilSuperior(arr) - quartilInferior(arr));
  }
  return fe;
})();
