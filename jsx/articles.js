var Article = React.createClass({
  render: function () {
    var post = this.props.post;
    return (
        <a href={ post.url } className="article list-group-item">
          <h4>{ post.title }</h4>
          <p><span className="glyphicon glyphicon-time text-date"></span> { post.date }</p>
          <p>{ post.excerpt }</p>
        </a>
    );
  }
});

var ArticleList = React.createClass({
  render: function () {
    var selected = this.props.selected;
    var articles = this.props.categories.map(function (cate) {
      var postsDOM = [];
      if (cate.c_name == selected) {
        cate.c_posts.map(function (post, id) {
          postsDOM.push(<Article key={id} post={post}/>);
        });
      }
      return postsDOM;
    });
    return (
        <div className="articles list-group" cate="{{ category[0] }}">
          {articles}
        </div>
    );
  }
});

var Category = React.createClass({
  selectCategory: function () {
    var selected = this.props.cate.c_name;
    React.render(<ArticleList categories={data.categories} selected={selected}/>, document.getElementById("content"))
  },
  render: function () {
    var cate = this.props.cate;
    var cateCss = "badge action ";
    var cateUrl = "#";
    if (cate.c_name == "ALL") {
      cateCss += "badge-danger";
      cateUrl = "/";
    }
    else if (cate.size > 1 && cate.size <= 2)
      cateCss += "badge-default";
    else if (cate.size > 2 && cate.size <= 3)
      cateCss += "badge-success";
    else if (cate.size > 3 && cate.size <= 4)
      cateCss += "badge-primary";
    else if (cate.size > 4)
      cateCss += "badge-warning";
    return (
        <a href={cateUrl} className="list-group-item" onClick={this.selectCategory.bind(this)}>
          <span className={cateCss}>{ cate.size }</span>{ cate.c_name }
        </a>
    )
  }
});

var CategoryList = React.createClass({
  getInitialState: function () {
    return {selected: ""};
  },
  render: function () {
    var catesdom = [];
    this.props.categories.map(function (cate) {
      catesdom.push(<Category cate={cate}/>);
    });
    return (
        <div className="list-group">
          <div className="text-title">Categories</div>
          {catesdom}
        </div>
    );
  }
});

React.render(<CategoryList categories={ data.categories }/>, document.getElementById("sidebar"));