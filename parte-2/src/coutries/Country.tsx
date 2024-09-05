import React from 'react'
import List from '../phoneBook/components/List'
import Button from '../shared/Button'

const fetchCountries = async (name: string) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const data = await response.json()
    return data
}
interface Country {
    name: {
        common: string
    },
    capital: string
    flags: {
        png: string
    },
    area: number
    languages: {
        [key: string]: string
    }
}

const Country = () => {
    const [countries, setCountries] = React.useState<Country[] | null>(null)
    const [state, setState] = React.useState({})
    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const country = form.get('country')
        const data = await fetchCountries(country as string)
        if (data.length > 10) return setState('TOO_MANY_RESULTS')
        if (data.length > 1) {
            setCountries(data)
            return setState('MULTIPLE_RESULTS')
        }
        if (data.length === 1) {
            setCountries(data)
            return setState('ONE_RESULT')
        }
        return setState('NOT_FOUND')
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input name='country' type="text" placeholder='Inserta el nombre de un país' />
            <input type="submit" value="Submit" />
        </form>
        {state === 'TOO_MANY_RESULTS' && <p>Too many results</p>}
        {state === 'MULTIPLE_RESULTS' && <ListOfCountries countries={countries as Country[]}/>}
        {state === 'ONE_RESULT' && <CountryCard country={(countries as Country[])[0]} />}
        {state === 'NOT_FOUND' && <p>No results</p>}
    </div>
  )
}

export const ListOfCountries = ({countries}: {countries: Country[]}) => {
    const [selectedCountry, setSelectedCountry] = React.useState<Country | null>(null)
    return (
        <>
            <List elementKey={(item) => item.name.common} 
            items={countries as Country[]} 
            render={(item) => <p>{item.name.common} <Button onClick={() => setSelectedCountry(item)}>show</Button></p>} />
            {selectedCountry && <CountryCard country={selectedCountry} />}
        </>
    )
}

export const CountryCard = ({country}: {country: Country}) => {
    
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h3>Languages</h3>
            <ul>
                {Object.values(country.languages).map((language) => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={country.name.common} />
        </div>
    )
}

export default Country
