// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    
    data.forEach(country => {
      console.log('Country:', country.name);
      console.log('Capital:', country.capital);
      console.log('Languages:', country.languages.map(lang => lang.name).join(', '));
      console.log('Population:', country.population);
      console.log('Area:', country.area);
      console.log('---------------------');
    });
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

// Exercise Level 2

const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Extract cat names and store them in the catNames array
    const catNames = data.map(cat => cat.name);
    console.log('Cat Names:', catNames);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });


// Exercise Level 3

// Oboy this one tough oh




