// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const input = document.querySelector('input');
const p = document.querySelector('p');
const button = document.querySelector('button');


button.addEventListener('click', () => {
    const inputValue = input.value;

    if (!input.value || isNaN(inputValue)) {
        p.textContent = 'Please enter a valid number';
        p.style.color = 'red';
    } else {
        const number = parseInt(inputValue);
        const range = Array.from( {length: number}, (_, i) => i + 1).join('-');

        p.textContent = range;
        p.style.color = 'green';

    }
})


    input.addEventListener('blur', (e) => {
        p.textContent = 'Field is required'
        p.style.color = 'red'

    })

