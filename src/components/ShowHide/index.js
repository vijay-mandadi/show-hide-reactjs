import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {display1: false, display2: false}

  show1 = () => {
    this.setState(prev => ({display1: !prev.display1}))
  }

  show2 = () => {
    this.setState(prev => ({display2: !prev.display2}))
  }

  render() {
    const {display1, display2} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div className="card-container">
            <button className="button" type="button" onClick={this.show1}>
              Show/Hide Firstname
            </button>
            {display1 ? <p className="paragraph">Joe</p> : null}
          </div>
          <div className="card-container">
            <button className="button" type="button" onClick={this.show2}>
              Show/Hide Lastname
            </button>
            {display2 ? <p className="paragraph">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
