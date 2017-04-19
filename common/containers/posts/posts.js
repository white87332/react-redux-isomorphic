import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import postsList from '../../actions/postsActions';

function mapStateToProps(state)
{
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        postsActions: bindActionCreators(postsList, dispatch)
    };
}

@translate(['common'], { wait: true })
class Posts extends React.Component
{
    static locales = ['common'];

    // server 端判斷 needs 觸發取得 initial data
    static needs = [
        postsList
    ];

    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    componentDidMount()
    {
        // const { dispatch, postsActions } = this.props;
        // console.log(typeof dispatch);
        // dispatch(postsActions.postsList());
    }

    render()
    {
        const { posts } = this.props;
        const items = posts.list.map((data) =>
        {
            const div = <div key={data.id}>{data.title}</div>;
            return div;
        });

        return (
            <div>
                {items}
            </div>
        );
    }
}

Posts.defaultProps = {
    posts: {}
};

Posts.propTypes = {
    posts: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
