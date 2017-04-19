import React from 'react';
import { connect } from 'react-redux';

class NotFound extends React.Component
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
                404
            </div>
        );
    }
}

export default connect()(NotFound);
