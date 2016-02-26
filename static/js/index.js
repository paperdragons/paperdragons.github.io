/**
 * 页面ready方法
 */
$(function () {
  categoryDisplay();
  generateContent();
});

/**
 * 分类展示
 * 点击右侧的分类展示时
 * 左侧的相关裂变展开或者收起
 * @return {[type]} [description]
 */
function categoryDisplay() {
  /*only show All*/
  $(".content>div[cate!=All]").hide();

  /*show category when click categories list*/
  $(".cate-choose").click(function () {
    var cate = $(this).attr("cate");
    $(".content>div[cate!=" + cate + "]").hide(250);
    $(".content>div[cate=" + cate + "]").show(400);
  });
}

/**
 * 侧边目录
 */
function generateContent() {
  if (typeof $("#markdown-toc").html() === "undefined") {
    $(".post-summary").hide();
    $(".post").removeClass("col-sm-9").addClass("col-sm-12");
  } else {
    $(".post-summary .summary").html("<ul>" + $("#markdown-toc").html() + "</ul>");
  }
}