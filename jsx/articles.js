var Article = React.createClass({
    render: function() {
        var post = this.props.post;
        return (
            <a href={ post.url } className="article list-group-item">
                <h4>{ post.title }</h4>
                <p><span className="glyphicon glyphicon-time text-date"></span> { post.date }</p>
                <p>{ post.excerpt }</p>
            </a>
        );
    }
})

var ArticleList = React.createClass({
    render: function() {
        var articles = this.props.categories.map(function(cate) {
            postsDOM = [];
            cate.c_posts.map(function(post, id) {
                postsDOM.push(<Article key={post.id} post={post}/>);
            });
            return postsDOM;
        });

        return (
            <div className="articles list-group" cate="{{ category[0] }}">
                {articles}
            </div>
        );
    }
});

React.render(<ArticleList categories={data.categories}/>, document.getElementById("content"));