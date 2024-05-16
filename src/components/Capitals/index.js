import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    capital: countryAndCapitalsList[0].country,
  }

  optionSelect = e => {
    const countryresult = countryAndCapitalsList.map(eachCountry => {
      if (eachCountry.id === e.target.value) {
        return eachCountry.country
      }
    })
    this.setState({capital: countryresult})
  }

  render() {
    const {capital} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1>Countries And Capitals</h1>
          <div>
            <select name="capitals" onChange={this.optionSelect}>
              {countryAndCapitalsList.map(eachCapital => {
                return (
                  <option value={eachCapital.id} key={eachCapital.id}>
                    {eachCapital.capitalDisplayText}
                  </option>
                )
              })}
            </select>
            <p>Is Capital of which country?</p>
          </div>
          <h1>{capital}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
// Write your code here
