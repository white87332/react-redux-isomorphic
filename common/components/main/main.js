import React from 'react';
import isNode from 'detect-node';

if (!isNode)
{
    require('./main.scss');
}

class Main extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    render()
    {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

Main.defaultProps = {
    children: {}
};

Main.propTypes = {
    children: React.PropTypes.element.isRequired
};

export default Main;
