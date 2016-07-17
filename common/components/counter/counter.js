import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../../actions/counter.js';
import { translate } from 'react-i18next';

function mapStateToProps(state)
{
    return {
        numbers: state.counter.numbers
    };
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators(CounterActions, dispatch);
}

@translate(['common'])
class Counter extends Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    // shouldComponentUpdate(nextProps, nextState)
    // {
    //      console.log(is(this.props, nextProps));
    //      return true;
    // }

    render()
    {
        const { increment, decrement, numbers } = this.props;
        const { t } = this.props;

        return (
            <div className="counter">
                <h1>{t('content.text')}</h1>
                Clicked: {numbers} times
                {' '}
                <button onClick={increment}>+</button>
                {' '}
                <button onClick={decrement}>-</button>
                {' '}
            </div>
        );
    }
}

Counter.propTypes = {
    increment      : PropTypes.func.isRequired,
    decrement      : PropTypes.func.isRequired,
    numbers        : PropTypes.number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
