var Article = React.createClass({
  displayName: "Article",

  render: function () {
    var post = this.props.post;
    return React.createElement(
      "a",
      { href: post.url, className: "article list-group-item" },
      React.createElement(
        "h4",
        null,
        post.title
      ),
      React.createElement(
        "p",
        null,
        React.createElement("span", { className: "glyphicon glyphicon-time text-date" }),
        " ",
        post.date
      ),
      React.createElement("p", { dangerouslySetInnerHTML: { __html: post.excerpt } })
    );
  }
});

var ArticleList = React.createClass({
  displayName: "ArticleList",

  render: function () {
    var selected = this.props.selected;
    var articles = this.props.categories.map(function (cate) {
      var postsDOM = [];
      if (cate.c_name == selected) {
        cate.c_posts.map(function (post, id) {
          postsDOM.push(React.createElement(Article, { key: id, post: post }));
        });
      }
      return postsDOM;
    });
    return React.createElement(
      "div",
      { className: "articles list-group", cate: "{{ category[0] }}" },
      articles
    );
  }
});

var Category = React.createClass({
  displayName: "Category",

  selectCategory: function () {
    var selected = this.props.cate.c_name;
    React.render(React.createElement(ArticleList, { categories: data.categories, selected: selected }), document.getElementById("content"));
  },
  render: function () {
    var cate = this.props.cate;
    var cateCss = "badge action ";
    var cateUrl = "#";
    if (cate.c_name == "ALL") {
      cateCss += "badge-danger";
      cateUrl = "/";
    } else if (cate.size > 1 && cate.size <= 2) cateCss += "badge-default";else if (cate.size > 2 && cate.size <= 3) cateCss += "badge-success";else if (cate.size > 3 && cate.size <= 4) cateCss += "badge-primary";else if (cate.size > 4) cateCss += "badge-warning";
    return React.createElement(
      "a",
      { href: cateUrl, className: "list-group-item", onClick: this.selectCategory.bind(this) },
      React.createElement(
        "span",
        { className: cateCss },
        cate.size
      ),
      cate.c_name
    );
  }
});

var CategoryList = React.createClass({
  displayName: "CategoryList",

  getInitialState: function () {
    return { selected: "" };
  },
  render: function () {
    var catesdom = [];
    this.props.categories.map(function (cate) {
      catesdom.push(React.createElement(Category, { cate: cate }));
    });
    return React.createElement(
      "div",
      { className: "list-group" },
      React.createElement(
        "div",
        { className: "text-title" },
        "Categories"
      ),
      catesdom
    );
  }
});

React.render(React.createElement(CategoryList, { categories: data.categories }), document.getElementById("sidebar"));