$(document).ready(function() {
  var post = {
    "list": [ {
      "title": "关于Github Pages 视频教程",
      "url": "http://yanping.me/cn/blog/2013/08/12/about-github-pages-step-by-step-video/",
      "date": "12 Aug 2013"
    } ,  {
      "title": "Github Pages 视频教程（1）",
      "url": "http://yanping.me/cn/blog/2013/08/11/github-pages-step-by-step-video/",
      "date": "11 Aug 2013"
    } ,  {
      "title": "【广告】上海北京两地的R语言培训",
      "url": "http://yanping.me/cn/blog/2013/06/30/xccds-r-training/",
      "date": "30 Jun 2013"
    } ,  {
      "title": "【译文】软件工程师如何修炼数据科学",
      "url": "http://yanping.me/cn/blog/2013/05/25/software-engineers-guide-to-getting/",
      "date": "25 May 2013"
    } ,  {
      "title": "《R语言编程艺术》即将上市",
      "url": "http://yanping.me/cn/blog/2013/05/15/the-art-of-r-programming-published/",
      "date": "15 May 2013"
    }  ]
  };

  var content = "<ul class=\"compact recent\">";
  $.each(post.list,
  function(i, item) {

    content += "<li><span class=\"date\">" + item.date + "</span><a href=\"" + item.url + "\">" + item.title + "</a></li>";

  });

  content += "</ul>";
  $("#blog1-posts-list .loading").remove();
  $("#blog1-posts-list").append(content);
});
