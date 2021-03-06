import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import isNode from 'detect-node';
import PropTypes from 'prop-types';
import * as CounterActions from '../../actions/counter';

if (!isNode)
{
    require('./counter.scss');
}

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

@translate(['common'], { wait: true })
class Counter extends React.Component
{
    static locales = ['common', 'counter'];

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
                <span>Clicked: {numbers} times{' '}</span>
                <button onClick={increment}>+</button>{' '}
                <button onClick={decrement}>-</button>{' '}
            </div>
        );
    }
}

Counter.defaultProps = {
    t: () => {}
};

Counter.propTypes = {
    t: PropTypes.func,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    numbers: PropTypes.number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
