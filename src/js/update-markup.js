import oneCountry from '../templates/country-found.hbs'
import countryCard from '../templates/countries-list.hbs'
import {notice, error} from './notifications'

const outputRef = document.querySelector('.country-output');

function updateMarkup (data) {
    if (data.length > 1 && data.length < 11) {
    const markup = oneCountry(data);
    outputRef.insertAdjacentHTML('beforeend', markup);
    console.log(markup);
  
    }
    else if (data.length === 1) {
    const markup = countryCard(data);
    outputRef.insertAdjacentHTML('beforeend', markup);
    console.log(markup);
    }
    else if (data.length > 10) {
         notice ({
            text: "There are too many results, please specify your search",
            delay: 5000,
         })
     }
    else if (data.status === 404) {
        error({
        text: "Oups! It seems like the country you are looking for does not exist. Make sure you typed the name correctly and try again.",
        delay: 5000,
     })
}
};

export default updateMarkup;