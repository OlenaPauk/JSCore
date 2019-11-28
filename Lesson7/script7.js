let countries = document.getElementById('country');
let cities = document.getElementById('city');
let cityGer = document.getElementById('cityGermany');
let cityUSA = document.getElementById('cityUSA');
let cityUrk = document.getElementById('cityUkraine');
let selVal = document.getElementById('selectValue');

countries.addEventListener('change', function () {
    let valueCountry = countries.value;
    console.log(valueCountry);
    if (valueCountry === 'Germany') {
        cityUSA.style.display = 'none';
        cityUrk.style.display = 'none';
        cityGer.style.display = 'block';
    }
    else if (valueCountry === 'USA') {
        cityUSA.style.display = 'block';
        cityUrk.style.display = 'none';
        cityGer.style.display = 'none';
    }
    else if (valueCountry === 'Ukraine') {
        cityUSA.style.display = 'none';
        cityUrk.style.display = 'block';
        cityGer.style.display = 'none';
    }
    selVal.innerHTML += `${valueCountry} ,`;

});
cities.addEventListener('change', function () {
    let valueCity = city.value;
    selVal.innerHTML += `${valueCity} <br>`;
});

