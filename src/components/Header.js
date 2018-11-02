import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component {

  state = {
    keywords:''
  }

  handleChange = (e) => {
    
    var searchTerm = e.target.value 

    this.setState({
      keywords:searchTerm}, function () {
        console.log(this.state.keywords);
    })
   console.log("Search Term:"+searchTerm)
   
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value > prevState.value) {
      this.setState({
        keywords:this.searchTerm
      })
      
    }
    console.log("State:"+this.state.keywords)
  }

  render() {
  


    return (
      <header className={this.state.active}>
        <h1 className="logo">Hello</h1>
        <input placeholder="Search Here" type="text" className="searchInput" onChange={this.handleChange}/>
      </header>
    );
  }
}

export default Header;
