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
      let australia = main.conversion_rates.AUD * dollars
      let china = main.conversion_rates.CNY * dollars
      let england = main.conversion_rates.GBP * dollars
      let nz = main.conversion_rates.NZD * dollars
      console.log(nz)
      console.log(england);
      console.log(china);
      console.log(australia);
      console.log(spain);
    })
  });