import React from 'react';
import isNode from 'detect-node';

if(!isNode){require('./main.scss');}

class Main extends React.Component
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
