const SWAPI_ROOT = 'http://swapi.dev/api/'
const SWAPI_PEOPLE = 'people'

export const getApiResource = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)