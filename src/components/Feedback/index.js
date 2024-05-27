// Write your React code here.

import React, {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSubmitted: false,
  }

  onEmojiClick = () => {
    this.setState({isFeedbackSubmitted: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="emoji-button"
                onClick={this.onEmojiClick}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <p className="emoji-name">{emoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-heading">Thank You!</h1>
        <p className="thank-you-text">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSubmitted} = this.state

    return (
      <div className="feedback-container">
        {isFeedbackSubmitted
          ? this.renderThankYouScreen()
          : this.renderFeedbackQuestion()}
      </div>
    )
  }
}

export default Feedback
