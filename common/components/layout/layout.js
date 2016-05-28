import React, { Component } from 'react';

class Layout extends Component
{
    render()
    {
        return (
            <div className="layout">
                123
                {this.props.children}
                456
            </div>
        );
    }
}

export default Layout;
