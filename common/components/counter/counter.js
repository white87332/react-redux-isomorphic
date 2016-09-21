import React, { Component } from 'react';
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

@translate(['common', 'counter'], { wait: true })
class Counter extends React.Component
{
    static translate = ['common', 'counter'];

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
                <h1>{t('content.text2')}</h1>
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
    increment      : React.PropTypes.func.isRequired,
    decrement      : React.PropTypes.func.isRequired,
    numbers        : React.PropTypes.number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
