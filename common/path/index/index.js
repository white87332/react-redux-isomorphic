import React from 'react';
import { connect } from 'react-redux';
import isNode from 'detect-node';
import waitCss from '../../components//wait/wait';

if (!isNode)
{
    require('./index.scss');
}

function mapStateToProps()
{
    return {};
}

function mapDispatchToProps()
{
    return {};
}

@waitCss(1000)
class Index extends React.Component
{
    static locales = [];

    static needs = [];

    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return (
            <div className="p_index">
                index
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
