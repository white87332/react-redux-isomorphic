import React from 'react';

const waitCss = (WrapperComponent) =>
{
    class Wait extends React.Component
    {
        constructor(props)
        {
            super(props);
            this.state = {};
        }

        render()
        {
            return <WrapperComponent {...this.props} />;
        }
    }

    return Wait;
};

export default waitCss;
