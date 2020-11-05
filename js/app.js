'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var tbodyParent = document.getElementById('table');
var allCities = [];

function Cities(name, minCustomer, maxCustomer, avgCookies, cookiesDay, customersHourly, cookiesSoldHourly){
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.cookiesDay = cookiesDay;
    this.cookiesSoldHourly = randomNumberGenerator(minCustomer, maxCustomer, avgCookies);

    allCities.push(this);
}

var seattle = new Cities('Seattle', 23, 65, 6.3, 0, [])
var tokyo = new Cities('Tokyo', 3, 24, 1.2, 0, [])
var dubai = new Cities('Dubai', 11, 38, 3.7, 0, [])
var paris = new Cities('Paris', 20, 38, 2.3, 0, [])
var lima = new Cities('Lima', 2, 16, 4.6, 0, [])

Cities.prototype.render= function () {
    var insertTr = document.createElement('tr');
    var insertTh = document.createElement('th');
    insertTh.textContent = this.name;
    insertTr.appendChild(insertTh);
    for (var i = 0; i < hours.length; i++) {
        var insertTd = document.createElement('td');
        insertTd.textContent = this.cookiesSoldHourly[i];
        insertTr.appendChild(insertTd);
    }
    tbodyParent.appendChild(insertTr);
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

//Giving credit: Used code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNumberGenerator(min, max, avg) {
    var randomArray = [];
    for (var i = 0; i < 14; i++) {
        var customersPerHour = Math.floor(Math.random() * (max - min) + min);
        randomArray.push(Math.round(customersPerHour * avg));
    }
    return randomArray
}