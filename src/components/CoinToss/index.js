import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImg: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossBtn = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ' '
    let updatedHeadCount = headsCount
    let updatedTailCount = tailsCount

    if (tossResult === 0) {
      tossImage = HEADS_IMG_URL
      updatedHeadCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      updatedTailCount += 1
    }
    this.setState({
      tossResultImg: tossImage,
      headsCount: updatedHeadCount,
      tailsCount: updatedTailCount,
    })
  }

  render() {
    const {tossResultImg, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails </p>
          <img src={tossResultImg} alt="toss result" className="img" />
          <button type="button" className="btn" onClick={this.onClickTossBtn}>
            Toss Coin
          </button>

          <div className="count-container">
            <p className="count">Total {totalCount}</p>
            <p className="count">Heads {headsCount}</p>
            <p className="count">Tails {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
