import React from 'react';

class Layout extends React.Component
{
    render()
    {
        return (
            <div className="layout">
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
