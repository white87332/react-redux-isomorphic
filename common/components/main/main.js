import React from 'react';
import isNode from 'detect-node';
import PropTypes from 'prop-types';
// import waitCss from '../../components//wait/wait';

if (!isNode)
{
    require('./main.scss');
}

// @waitCss(1000)
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
    children: PropTypes.element.isRequired
};

export default Main;
