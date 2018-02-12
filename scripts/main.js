
    
    var requestURL = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var coins = request.response;
        showCoins(coins);
    }
    function showCoins(jsonObj) {
      var coinNames = jsonObj;
      for (var i = 0; i < 10; i++) {
      console.log(coinNames[i].name);
    }
}