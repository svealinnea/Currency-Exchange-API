import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyAPI from './currency.js';

  $('#currency').click(function() {
    event.preventDefault();
    let dollars = $('#input').val();
    $('#input').val("");
    console.log(dollars)
    let promise = CurrencyAPI.getExchange(dollars);
    promise.then(function(response) {
      const main = JSON.parse(response);
      console.log(main);
      let spain = main.conversion_rates.EUR * dollars
      console.log(spain);
    })
  });