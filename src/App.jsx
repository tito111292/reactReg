import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {

    state = {
        mounted: true,
        hidden: false
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ hidden: true }, () => {
            let fp = document.getElementById("form-place");
            fp.classList.add("hidden-transit");
        });
        this.setState({ mounted: false }, () => {console.log(this.state)});
    };

    render() {
        return (
            <div className="app">
                <div className="header-h1">
                     <h1>Reactor</h1>
                </div>
                
                <div id = "form-place">
                    <Form onSubmit = {this.handleSubmit} />
                </div>
            </div>
        );
    }
}

export default App;