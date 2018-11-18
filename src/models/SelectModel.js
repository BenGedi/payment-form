import { types, flow } from "mobx-state-tree"

const Country = types.model({
    value: types.string,
    name: types.string
})

const Countries = types
    .model({
        countries: types.array(Country)
    })
    .actions(self => ({
        getCounteries: flow(function* getSuggestions() {
            const response = yield window.fetch(
                `http://api.geonames.org/countryInfoJSON?username=dperic'`
            )
            self.countries.push(...(yield response.json()))
        })
    }))

export const SelectModel = types
    .compose(
        Countries,
    )
    // ..and give it a nice name


    export const store = SelectModel.create({
        countries: []
    })