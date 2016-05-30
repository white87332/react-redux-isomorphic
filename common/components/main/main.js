import React, { Component } from 'react';
import isNode from 'detect-node';

if(!isNode){require('./main.scss');}

class Main extends Component
{
    render()
    {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Main;
