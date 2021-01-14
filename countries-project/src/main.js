import fetchCountries from './js/fetch-countries'
import updateMarkup from './js/update-markup'


const inputRef = document.querySelector('.country-input');
const outputRef = document.querySelector('.country-output');
// const searchForm = document.querySelector('.form-wrapper');

const debounce = require('lodash.debounce');


// dont understand why Repeta was adding event listener on form instead of input inside the form)
// searchForm.addEventListener('input', debounce(searchHandle, 1000));
inputRef.addEventListener('input', debounce(searchHandle, 500));

function searchHandle (event) {
    
        const inputValue = event.target.value
        console.log(inputValue);

        if (inputValue === '') {
            return
        }
    
        outputRef.innerHTML = '';
        
        fetchCountries(inputValue).then(updateMarkup);      
};


