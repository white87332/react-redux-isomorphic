import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';

class NotFound extends Component
{
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
