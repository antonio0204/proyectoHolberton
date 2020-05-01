document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("smart_thumbnail");

  var thumbnailElement = document.getElementById("smart_thumbnail");

  thumbnailElement.addEventListener("click", function () {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.className;

    if (thumbnailElement.className === "small") {
      thumbnailElement.className = "big";
    } else {
      thumbnailElement.className = "small";
    }
  });
});

var disqus_config = function () {
  this.page.url = "http://127.0.0.1:5500/index.html"; // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function () {
  // DON'T EDIT BELOW THIS LINE
  var d = document,
    s = d.createElement("script");
  s.src = "https://ronaldantonioaguirrevillalobos.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();
