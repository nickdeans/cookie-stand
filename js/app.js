'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
    city: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookies: 6.3,
    cookiesDay: 0,
    
    customersHourly: [],
    cookiesSoldHourly: [],
    
    generateCustomersHourly: function(){
        for(var i=0; i<hours.length; i++){
            var randomCustomerNumber = generateRandomNumber(this.minCustomer, this.maxCustomer);
            this.customersHourly.push(randomCustomerNumber)
        }
    },

    generateCookiesSoldHourly: function(){
        for(var i=0; i<hours.length; i++){
            var cookies =this.customersHourly[i] * this.avgCookies;
            this.cookiesSoldHourly.push(Math.round(cookies));
            this.cookiesDay = this.cookiesDay + Math.round (cookies);
        }
    },
    
    render: function() {
        var seattleParent = document.getElementById('seattle');
        var seattleSection = document.getElementById('seattle-section');
        var h2Element = document.createElement('h2');
        h2Element.textContent = this.city;
        seattleSection.appendChild(h2Element);
    
        for(var i=0; i<this.cookiesSoldHourly.length; i++){
            var insertLi = document.createElement('li');
            insertLi.textContent = `${hours[i]}: ${this.cookiesSoldHourly[i]} cookies`;
            seattleParent.appendChild(insertLi);
        }
    }
}

var tokyo = {
    city: 'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookies: 1.2,
    cookiesDay: 0,

    customersHourly: [],
    cookiesSoldHourly: [],
}

var dubai = {
    city: 'Dubai',
    minCustomer: 11,
    maxCustomer: 38,
    avgCookies: 3.7,
    cookiesDay: 0,

    customersHourly: [],
    cookiesSoldHourly: [],
}

var paris = {
    city: 'Paris',
    minCustomer: 20,
    maxCustomer: 38,
    avgCookies: 2.3,
    cookiesDay: 0,

    customersHourly: [],
    cookiesSoldHourly: [],
}

var lima = {
    city: 'Lima',
    minCustomer: 2,
    maxCustomer: 16,
    avgCookies: 4.6,
    cookiesDay: 0,

    customersHourly: [],
    cookiesSoldHourly: [],
}

//Giving credit: Used code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }


seattle.generateCustomersHourly();
seattle.generateCookiesSoldHourly();
seattle.render();