import {Component} from 'react'
import './index.css'

const backgroundColors = [
  'initial-bg-orange',
  'initial-bg-green',
  'initial-bg-brown',
  'initial-bg-blue',
  'initial-bg-cyan',
]

class PasswordItem extends Component {
  render() {
    const {
      passwordDetails,
      isShowPasswordsChecked,
      onDeletePassword,
    } = this.props
    const {id, website, username, password} = passwordDetails

    const initial = website ? website[0].toUpperCase() : ''
    const initialBgColorClass =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)]

    const onClickDelete = () => {
      onDeletePassword(id)
    }

    return (
      <li className="password-item">
        <div className={`initial-container ${initialBgColorClass}`}>
          <p className="initial-text">{initial}</p>
        </div>
        <div className="details-container">
          <p className="website-text">{website}</p>
          <p className="username-text">{username}</p>
          {isShowPasswordsChecked ? (
            <p className="password-text">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-img"
            />
          )}
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </li>
    )
  }
}

export default PasswordItem
