import React, { Component } from 'react';
import Reactivity from '../components/reactivityBar';
import '../css/cover.css';
import Tooltip from "../components/tooltip";

class MainPage extends Component{

    render(){
        return(
        <main role="main" className="inner cover">
            <h1 className="cover-heading">Cover your page.</h1>
            <div className="example-wrapper">
                <Tooltip content="Yee-haw!" direction="right">
                <span className="example-emoji" role="img" aria-label="cowboy emoji">
                    Hover me im reusable 🤠!
                </span>
                </Tooltip>
            </div>
            <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <Reactivity></Reactivity>
        </main>
        );
    }
};

export default MainPage;