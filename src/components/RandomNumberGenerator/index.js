// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  generateNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({number: newRandomNumber})
  }

  render() {
    const {number} = this.state

    return (
      <div className="app-container">
        <div className="number-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the <br />
            range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.generateNumber}
          >
            Generate
          </button>

          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
