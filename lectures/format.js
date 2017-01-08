$(document).ready(function() {
  $(".markdown").toArray().forEach(function(elem){
    elem.innerHTML = marked(elem.textContent, { sanitize: false, gfm: false });
  });
  $(".video").toArray().forEach(function(elem){
    var video = $(elem).find("video")[0];
    var buttons = [
      $("<button/>").addClass("btn btn-primary").text("0.7"),
      $("<button/>").addClass("btn btn-primary active").text("1.0"),
      $("<button/>").addClass("btn btn-primary").text("1.3"),
      $("<button/>").addClass("btn btn-primary").text("1.8")
    ];
    buttons.forEach(function(b){
      b.click(function(){
        buttons.forEach(function(bb){bb.removeClass("active")});
        video.playbackRate = b[0].textContent;
        b.addClass("active");
      });
    });
    var buttonGroup = $("<div/>").addClass("btn-group btn-group-sm").append(buttons);
    var p = $("<p/>").addClass("text-center").text("Playback speed: ").append(buttonGroup);
    $(elem).append(p);
  });
  $.getJSON("toc.json", function(toc){
    var elem = $("#video-toc");
    var nav = $("<ul/>").addClass("nav nav-pills nav-stacked");
    toc.lectures.forEach(function(l){
      var item = $("<li/>");
      if (l.uri == window.location.pathname.split("/").pop()) {
        item.addClass("active");
      }
      item.append("<a href='"+l.uri+"'>"+l.title+"</a>");
      nav.append(item);
    });
    elem.append(nav);
  });
});
