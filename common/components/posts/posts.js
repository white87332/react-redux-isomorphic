import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as postsActions from '../../actions/postsActions';

function mapStateToProps(state)
{
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        postsActions: bindActionCreators(postsActions, dispatch)
    };
}

@translate(['common'], { wait: true })
class Posts extends React.Component
{
    static locales = ['common'];

    // server 端判斷 needs 觸發取得 initial data
    static needs = [
        postsActions.postsList
    ];

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        // let { dispatch, postsActions } = this.props;
        //
        // dispatch(postsActions.postsList());
    }

    render()
    {
        const { posts } = this.props;

        let items = posts.list.map((data, key) => {
            return <div key={key}>{data.title}</div>;
        });

        return (
            <div>
               {items}
             </div>
        );
    }
}

Posts.propTypes = {
    posts: React.PropTypes.object.isRequired,
    postsActions: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
