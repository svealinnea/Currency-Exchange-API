import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyAPI from './currency.js';

$('form#currency').submit(function() {
  event.preventDefault();
  let dollars = $('#input').val();
  $('#input').val("");
  let promise = CurrencyAPI.getExchange(dollars);
  promise.then(function(response) {
    const main = JSON.parse(response);
    let value = $("select#currency").val();
    console.log(value);
    let spain = main.conversion_rates.EUR * dollars;
    let australia = main.conversion_rates.AUD * dollars;
    let china = main.conversion_rates.CNY * dollars;
    let england = main.conversion_rates.GBP * dollars;
    let nz = main.conversion_rates.NZD * dollars;
    let mexico = main.conversion_rates.MXN * dollars;
      if (value == 1) {
        $("#spain").append("Your conversion is " + "€" + spain);
      } else if (value == 2) {
        $('#australia').append("Your conversion is " + "$" + australia );
      } else if (value == 3) {
        $("#china").append("Your conversion is " + "¥" + china);
      } else if (value == 4) {
        $("#uk").append("Your conversion is " + "£" + england);
      } else if (value == 5) {
        $("#nz").append("Your conversion is " + "$" + nz)
      } else if (value == 6) {
        $("#mexico").append("Your conversion is " + "$" + mexico)
      } else {
        $("#error").show();
      }
      });
  });