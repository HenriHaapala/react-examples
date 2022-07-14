import React, { Component } from 'react'
import '../css/cover.css';

class HeaderComponent extends Component{
  constructor(props) {
    super(props);
  
    this.addActiveClass= this.addActiveClass.bind(this);
    this.state = {
      isActive: false
    }
  }
  
  addActiveClass() {
    this.setState({
      isActive: true
    })
  }
  
  handleClickChange = event => {
    this.props.onColorChange(event.target.value)
  }

  render() {
    return(
        <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">Cover</h3>
          
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/contacts">contacts</a>
            <a className="nav-link" href="/lists">lists</a>
            <a className="nav-link" href="/checkout">checkout</a>
            <button className="nav-link btn" onClick={this.handleClickChange} value={this.props.isBackgroundGrey}>Change color</button>
          </nav>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;