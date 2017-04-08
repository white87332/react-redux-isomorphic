import React from 'react';
// import update from 'immutability-helper';

const waitCss = (milliseconds) =>
{
    return (WrapperComponent) =>
    {
        class Wait extends React.Component
        {
            constructor(props)
            {
                super(props);
                this.state = {
                    ready: false
                };
            }

            componentDidMount()
            {
                let start = new Date().getTime();
                for (let i = 0; i < 1e7; i += 1)
                {
                    if ((new Date().getTime() - start) > milliseconds)
                    {
                        break;
                    }
                }
                // this.setState(update(this.state, { $set: { ready: true } }));
            }

            render()
            {
                return <WrapperComponent {...this.props} />;
            }
        }

        return Wait;
    };
};

export default waitCss;
