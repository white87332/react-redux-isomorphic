import React from 'react';
import PropTypes from 'prop-types';

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
    children: PropTypes.element.isRequired
};

export default Layout;
