var option = {
  appid: "Maplat_test_core",
};

Maplat.createObject(option).then(function(app) {
  const viewpoint = {
    zoom: 3  //古地図倍率
  }
  const ratio = 20;  //透明度

  window.setTimeout(function(){
    app.setViewpoint(viewpoint);
    app.setTransparency(ratio);
  }, 1);

//ボタンで地図を切り替え
  document.getElementById("osm").addEventListener("click", function(e) {
    app.changeMap("osm");
  });
  document.getElementById("kochizu").addEventListener("click", function(e) {
    app.changeMap("goryokaku");
  });
});
