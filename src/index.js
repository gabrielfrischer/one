import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import NewsList from './components/NewsList';
import JSON from './db.json'


let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


class App extends Component {
    
    state = {
        news:JSON
    }
    
    render() {


    return(
        <div id="body">
        <Header/>
        <NewsList news={this.state.news}/>
    </div>
    )
    }

  

}



ReactDOM.render(<App />, document.getElementById('root'));
