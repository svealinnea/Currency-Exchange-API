import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyAPI from './currency.js';

$(document).ready(function() {
  $('form#currency1').submit(function() {
    event.preventDefault();
    let dollars = $('#input').val();
    $('#input').val("");
    let promise = CurrencyAPI.getExchange(dollars);
    promise.then(function(response) {
      const main = JSON.parse(response);
      let value = $("select#currency").val();
      console.log(value);
        if (value == 1) {
          $("#spain").append(`Your conversion to the Euro is € ${main.conversion_rates.EUR * dollars}`);
        } else if (value == 2) {
          $('#australia').append(`Your conversion to the Australian dollar is $ ${main.conversion_rates.AUD * dollars}`);
        } else if (value == 3) {
          $("#china").append(`Your conversion to the Chinese yuan is ¥ ${main.conversion_rates.CNY * dollars}`);
        } else if (value == 4) {
          $("#uk").append(`Your conversion to the English pound is £ ${main.conversion_rates.GBP * dollars}`);
        } else if (value == 5) {
          $("#nz").append(`Your conversion to the New Zealand dollar is $ ${main.conversion_rates.NZD * dollars}`)
        } else if (value == 6) {
          $("#mexico").append(`Your conversion to the Mexican peso is $ ${main.conversion_rates.MXN * dollars}`)
        } else {
          $("#error").show();
        }
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error}`);
      });
    });
});