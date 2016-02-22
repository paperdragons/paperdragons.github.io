/**
 * 页面ready方法
 */
$(function(){
    generateContent();
});

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