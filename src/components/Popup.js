import React from 'react'
import PropTypes from 'prop-types'

class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false
    }
  }

  show = () => {
    this.setState({isShow: true})
  }
  
  hide = () => {
    this.setState({isShow: false})
  }

  render() {
    const { closePopup, onConfirm } = this.props
    return this.state.isShow ? <div className='popup'>
    <div className='popup_inner'>
      <h1>PopUp</h1>
      <div className='button-wrapper'>
          <button className='closeButton' onClick={closePopup}>close me</button>
          <button className='confirmButton' onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  </div> : null
  }
}
Popup.protoType = {
  closePopup: PropTypes.func,
  onConfirm: PropTypes.func
}
export default Popup