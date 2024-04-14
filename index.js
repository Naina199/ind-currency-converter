import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_0GUUivSXu0yzEklUvKEUG82FmkbDCFDVdW8Obiwt');

export async function convertCurrency(fromCurrency,toCurrency,units){
    const res=await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })
    const multiplier=res.data[toCurrency];
    return multiplier*units;
}

