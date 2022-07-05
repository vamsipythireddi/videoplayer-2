import {Component} from 'react'

import ReactPlayer from 'react-player/'

import './index.css'

class VideoPlayer extends Component {
  state = {
    isA: false,
    isB: false,
    isC: false,
    isD: false,
    isE: false,
    isF: false,
    isG: false,
    isH: false,
    isI: false,
  }

  onClickInputA = () => {
    this.setState(prevState => ({isA: !prevState.isA}))
  }

  onClickInputB = () => {
    this.setState(prevState => ({isB: !prevState.isB}))
  }

  onClickInputC = () => {
    this.setState(prevState => ({isC: !prevState.isC}))
  }

  onClickInputD = () => {
    this.setState(prevState => ({isD: !prevState.isD}))
  }

  onClickInputE = () => {
    this.setState(prevState => ({isE: !prevState.isE}))
  }

  onClickInputF = () => {
    this.setState(prevState => ({isF: !prevState.isF}))
  }

  onClickInputG = () => {
    this.setState(prevState => ({isG: !prevState.isG}))
  }

  onClickInputH = () => {
    this.setState(prevState => ({isH: !prevState.isH}))
  }

  onClickInputI = () => {
    this.setState(prevState => ({isI: !prevState.isI}))
  }

  render() {
    const {isA, isB, isC, isD, isE, isF, isG, isH, isI} = this.state
    return (
      <div className="main-container">
        <div className="video-container">
          <button type="button" className="button" onClick={this.onClickInputA}>
            Campfire Embers
          </button>
          <button type="button" className="button" onClick={this.onClickInputB}>
            Shuttle Launch
          </button>
          <button type="button" className="button" onClick={this.onClickInputC}>
            Smoke in the forest
          </button>
          <button type="button" className="button" onClick={this.onClickInputD}>
            Cars Drifting
          </button>
          <button type="button" className="button" onClick={this.onClickInputE}>
            Home Streight
          </button>
          <button type="button" className="button" onClick={this.onClickInputF}>
            Cycle Race
          </button>
          <button type="button" className="button" onClick={this.onClickInputG}>
            Ice on the tree
          </button>
          <button type="button" className="button" onClick={this.onClickInputH}>
            Ice on the river
          </button>
          <button type="button" className="button" onClick={this.onClickInputI}>
            Glacier Melting
          </button>
        </div>

        <div>
          {isA && (
            <div>
              <ReactPlayer
                className="video-bg"
                url="https://www.youtube.com/watch?v=Yf1-CEibJo8"
              />
              <h1>Campfire Embers</h1>
              <p>tags: [Ember,Fire,Log]</p>
            </div>
          )}
          {isB && (
            <div>
              <ReactPlayer
                className="video-bg"
                url="https://www.youtube.com/watch?v=0QI0llEailg"
              />
              <h1>Shuttle Launch</h1>
              <p>tags: [Space,Fire,Spark]</p>
            </div>
          )}
          {isC && (
            <div>
              <ReactPlayer
                className="video-bg"
                url="https://www.youtube.com/watch?v=tJ87nDYRUUw"
              />
              <h1>Smoke in the forest</h1>
              <p>tags: [Smoke,Tree</p>
            </div>
          )}
          {isD && (
            <div>
              <ReactPlayer
                className="video-bg"
                url="https://www.youtube.com/watch?v=KGUNXQgjlDE"
              />
              <h1>Cars Drifting</h1>
              <p>tags: [Car,Track,Drifting]</p>
            </div>
          )}
          {isE && (
            <div>
              <ReactPlayer
                className="video-bg"
                url="https://www.youtube.com/watch?v=omaxt2sPgvY"
              />
              <h1>Home Streight</h1>
              <p>tags: [Car,Racing,Track]</p>
            </div>
          )}
          {isF && (
            <div>
              <ReactPlayer
                className="video-bg"
                url="https://www.youtube.com/watch?v=euxjbSA_ND4"
              />
              <h1>Cycle Race</h1>
              <p> tags: [Bike,Racing,Road]</p>
            </div>
          )}
          {isG && (
            <div>
              <ReactPlayer
                className="video-bg"
                url="https://www.youtube.com/watch?v=2uT2OOuRq0o"
              />
              <h1>Ice on the tree</h1>
              <p>tags: [Tree,Ice,Snow]</p>
            </div>
          )}
          {isH && (
            <div>
              <ReactPlayer
                className="video-bg"
                url="https://www.youtube.com/watch?v=Clyb8ATVb3c"
              />
              <h1>Ice on the river</h1>
              <p>tags: [Ice,River,Snow]</p>
            </div>
          )}
          {isI && (
            <div>
              <ReactPlayer
                className="video-bg"
                url="https://www.youtube.com/watch?v=uR-vV02nZHI"
              />
              <h1>Glacier melting</h1>
              <p>tags: [Ice,River]</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default VideoPlayer
