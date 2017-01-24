import React from 'react';

class Layout extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    render()
    {
        return (
            <div className="layout">
                {this.props.children}
            </div>
        );
    }
}

Layout.defaultProps = {
    children: {}
};

Layout.propTypes = {
    children: React.PropTypes.element.isRequired
};

export default Layout;
