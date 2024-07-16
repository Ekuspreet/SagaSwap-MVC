function generateRandomAlphanumeric() {
    var alphanumericChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
  
    for (var i = 0; i < 32; i++) {
      var randomIndex = Math.floor(Math.random() * alphanumericChars.length);
      result += alphanumericChars[randomIndex];
    }
  
    return result;
  }
  
module.exports =  generateRandomAlphanumeric;  