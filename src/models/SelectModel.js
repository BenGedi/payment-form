import { types, flow } from "mobx-state-tree";
import axios from 'axios';

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
    .model({
        countries: types.array(Country)
    })
    .actions(self => ({
        getCounteries: flow(function*() {
            const response = yield axios.get('http://api.geonames.org/countryInfoJSON?username=dperic');

            self.countries = response.data.geonames;
        }),
    }))

export const SelectModel = types
    .compose(
        Countries,
    )

    export const store = SelectModel.create({
        countries: []
    })

    // store.getCounteries().then((res) => {
    //     console.log("getCounteries done: ", res);
    // })