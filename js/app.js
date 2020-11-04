'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var tbodyParent = document.getElementById('table');
var allCities = [];

function Cities(city, minCustomer, maxCustomer, avgCookies, cookiesDay, customersHourly, cookiesSoldHourly){
    this.city = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.cookiesDay = cookiesDay;
    this.customersHourly = customersHourly;
    this.cookiesSoldHourly = cookiesSoldHourly;

    allCities.push(this);
}

var seattle = new Cities('Seattle', 23, 65, 6.3, 0, [], [])
var tokyo = new Cities('Tokyo', 3, 24, 1.2, 0, [], [])
var dubai = new Cities('Dubai', 11, 38, 3.7, 0, [], [])
var paris = new Cities('Paris', 20, 38, 2.3, 0, [], [])
var lima = new Cities('Lima', 2, 16, 4.6, 0, [], [])

// function generateHeader(){
//     var trElement = document.createElement('tr');
//     var thElement = document.createElement('th');
//     thElement.textContent = 'City';
//     tbodyParent.appendChild(trElement);
//     trElement.appendChild(thElement);

//     thElement = document.createElement('th');
//     thElement.textContent = 'Minimum Customers';
//     trElement.appendChild(thElement);

//     thElement = document.createElement('th');
//     thElement.textContent = 'Maximum Customers';
//     trElement.appendChild(thElement);

//     thElement = document.createElement('th');
//     thElement.textContent = 'Average Cookies';
//     trElement.appendChild(thElement);
//     for(var i=0; i<allCities.length; i++){
//         allCities[i].render();
//     }
// }

// generateHeader();


Cities.prototype.generateCustomersHourly = function(){
    for(var i=0; i<hours.length; i++){
        var randomCustomerNumber = generateRandomNumber(this.minCustomer, this.maxCustomer);
        this.customersHourly.push(randomCustomerNumber)
    }
}

Cities.prototype.generateCookiesSoldHourly = function(){
    for(var i=0; i<hours.length; i++){
        var cookies =this.customersHourly[i] * this.avgCookies;
        this.cookiesSoldHourly.push(Math.round(cookies));
        this.cookiesDay = this.cookiesDay + Math.round (cookies);
    }
}

Cities.prototype.render = function(){
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



////////////////////// Old Way of doing it without using a constructor function ///////////////////////
// var seattle = {
//     city: 'Seattle',
//     minCustomer: 23,
//     maxCustomer: 65,
//     avgCookies: 6.3,
//     cookiesDay: 0,
    
//     customersHourly: [],
//     cookiesSoldHourly: [],
    
//     generateCustomersHourly: function(){
//         for(var i=0; i<hours.length; i++){
//             var randomCustomerNumber = generateRandomNumber(this.minCustomer, this.maxCustomer);
//             this.customersHourly.push(randomCustomerNumber)
//         }
//     },

//     generateCookiesSoldHourly: function(){
//         for(var i=0; i<hours.length; i++){
//             var cookies =this.customersHourly[i] * this.avgCookies;
//             this.cookiesSoldHourly.push(Math.round(cookies));
//             this.cookiesDay = this.cookiesDay + Math.round (cookies);
//         }
//     },
    
//     render: function() {
//         var seattleParent = document.getElementById('seattle');
//         var seattleSection = document.getElementById('seattle-section');
//         var h2Element = document.createElement('h2');
//         h2Element.textContent = this.city;
//         seattleSection.appendChild(h2Element);
    
//         for(var i=0; i<this.cookiesSoldHourly.length; i++){
//             var insertLi = document.createElement('li');
//             insertLi.textContent = `${hours[i]}: ${this.cookiesSoldHourly[i]} cookies`;
//             seattleParent.appendChild(insertLi);
//         }
//     }
// }

// var tokyo = {
//     city: 'Tokyo',
//     minCustomer: 3,
//     maxCustomer: 24,
//     avgCookies: 1.2,
//     cookiesDay: 0,

//     customersHourly: [],
//     cookiesSoldHourly: [],
// }

// var dubai = {
//     city: 'Dubai',
//     minCustomer: 11,
//     maxCustomer: 38,
//     avgCookies: 3.7,
//     cookiesDay: 0,

//     customersHourly: [],
//     cookiesSoldHourly: [],
// }

// var paris = {
//     city: 'Paris',
//     minCustomer: 20,
//     maxCustomer: 38,
//     avgCookies: 2.3,
//     cookiesDay: 0,

//     customersHourly: [],
//     cookiesSoldHourly: [],
// }

// var lima = {
//     city: 'Lima',
//     minCustomer: 2,
//     maxCustomer: 16,
//     avgCookies: 4.6,
//     cookiesDay: 0,

//     customersHourly: [],
//     cookiesSoldHourly: [],
// }

//Giving credit: Used code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }


seattle.generateCustomersHourly();
seattle.generateCookiesSoldHourly();
seattle.render();