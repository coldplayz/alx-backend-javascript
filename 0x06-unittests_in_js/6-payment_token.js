function getPaymentTokenFromAPI(success) {
    if (success) {
      return Promise.resolve({ result: 'Amazing result!' });
    }
  }
  
  module.exports = getPaymentTokenFromAPI;

/*
function getPaymentTokenFromAPI(success) {
  if (success === true) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
}

module.exports = getPaymentTokenFromAPI;
*/
