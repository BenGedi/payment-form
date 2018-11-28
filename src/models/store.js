import { types, flow } from "mobx-state-tree";
import axios from 'axios';

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

const Country = types.model({
    areaInSqKm: types.string,
    capital: types.string,
    continent: types.string,
    continentName: types.string,
    countryCode: types.string,
    countryName: types.string,
    currencyCode: types.string,
    east: types.number,
    fipsCode: types.string,
    geonameId: types.number,
    isoAlpha3: types.string,
    isoNumeric: types.string,
    languages: types.string,
    north: types.number,
    population: types.string,
    south: types.number,
    west: types.number,
})

const Countries = types
    .model('Countries', {
        countries: types.array(Country, [])
    })
    .actions(self => ({
        getCounteries: flow(function*() {
            // const response = yield fetch('http://api.geonames.org/countryInfoJSON?username=dperic');
            // const data = yield response.json();
            const response = yield axios.get('http://api.geonames.org/countryInfoJSON?username=dperic');

            self.countries = response.data.geonames;
        })
    }))

const Months = types.model('Months',{
    months: types.array(types.string),
    currentMounth: types.optional(types.number, 1),
})



export const SelectModel = types
    .compose(
        Countries,
        Months
    )

export const store = SelectModel.create({
    months: monthNames
});

// store.getCounteries().then((res) => {
//     console.log("getCounteries done: ", res);
// })