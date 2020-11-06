'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allCities = [];

function Cities(name, minCustomer, maxCustomer, avgCookies){
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.cookiesDay = 0;

    this.customersHourly = []
    this.cookiesSoldHourly = []

    allCities.push(this);
}

Cities.prototype.generateCustomersHourly = function(){
    for(var i=0; i<hours.length; i++){
        var randomCustomer = generateRandomNumber(this.minCustomer, this.maxCustomer);
        this.customersHourly.push(randomCustomer);
    }
}

Cities.prototype.generateCookiesHourly = function(){
    for(var i=0; i<this.customersHourly.length; i++){
        var cookieTotalHourly = Math.ceil(this.customersHourly[i] * this.avgCookies);
        this.cookiesSoldHourly.push(cookieTotalHourly);

        console.log('Cookies Today', this.cookiesDay)
        this.cookiesDay = this.cookiesDay + cookieTotalHourly;
    }
}

Cities.prototype.render = function (){
    var tbodyParent = document.getElementById('table');
    var trElement = document.createElement('tr');
    tbodyParent.appendChild(trElement);

    var tdElement = document.createElement('td');
    tdElement.textContent = this.name;
    trElement.appendChild(tdElement);

    for(var i=0; i<this.cookiesSoldHourly.length; i++){
        tdElement = document.createElement('td');
        tdElement.textContent = this.cookiesSoldHourly[i];
        trElement.appendChild(tdElement);
    }

    tdElement = document.createElement('td');
    tdElement.textContent = this.cookiesDay;
    trElement.appendChild(tdElement);
}

new Cities('Seattle', 23, 65, 6.3)
new Cities('Tokyo', 3, 24, 1.2)
new Cities('Dubai', 11, 38, 3.7)
new Cities('Paris', 20, 38, 2.3)
new Cities('Lima', 2, 16, 4.6)


///////////////Giving credit: Used code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function generateHeaderRow(){
    var tbodyParent = document.getElementById('table');
    var trElement = document.createElement('tr');
    tbodyParent.appendChild(trElement);

    var thElement = document.createElement('th');
    thElement.textContent = 'Location';
    trElement.appendChild(thElement);

    for(var i=0; i<hours.length; i++){
        thElement = document.createElement('th');
        thElement.textContent = hours[i]
        trElement.appendChild(thElement);
    }
}

function generateFooterRow(){
    var allTotals = 0;

    var tbodyParent = document.getElementById('table');
    var trElement = document.createElement('tr');
    tbodyParent.appendChild(trElement);

    var tdElement = document.createElement('td');
    tdElement.textContent = 'Totals';
    trElement.appendChild(tdElement);

    for(var i=0; i<hours.length; i++){
        var hourlyTotal = 0;

        for(var j=0; j<allCities.length; j++){
            hourlyTotal += allCities[j].cookiesSoldHourly[i];
            allTotals += allCities[j].cookiesSoldHourly[i];
        }

        var tdElement = document.createElement('td');
        tdElement.textContent = hourlyTotal;
        trElement.appendChild(tdElement);
    }

    var tdElement = document.createElement('td');
    tdElement.textContent = allTotals;
    trElement.appendChild(tdElement)
}


generateHeaderRow();
for(var i=0; i<allCities.length; i++){
    allCities[i].generateCustomersHourly();
    allCities[i].generateCookiesHourly();
    allCities[i].render();
}

generateFooterRow();
