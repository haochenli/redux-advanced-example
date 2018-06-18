import React from 'react'
import PropTypes from 'prop-types'

class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.state({
      isShow: false
    })
  }

  componentDidMount() {
    this.setState({isShow: this.props.isShow})
  }

  _show = () => {
    this.setState({isShow: true})
  }
  
  _hide = () => {
    this.setState({isShow: false})
  }

  render() {
    return this.state.isShow ? <div className='popup'>
    <div className='popup_inner'>
      <h1>{this.props.text}</h1>
    <button onClick={this.props.closePopup}>close me</button>
    </div>
  </div> : null
  }
}
export default Popup