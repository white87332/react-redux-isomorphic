import './main.scss';
import React, { Component } from 'react';

class Main extends Component
{
    render()
    {
        return (
            <div className="main">
                {this.props.children}
            </div>
        );
    }
}

export default Main;
