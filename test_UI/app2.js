var option = {
  appid: "Maplat_test_UI",
  enableHideMarker: true,   //マーカー非表示
  enableBorder: true,       //地図境界表示
  enableShare: true,        //共有
};

Maplat.createObject(option).then(function(app) {
  const viewpoint = {
    zoom: 3  //古地図倍率
  }
  const ratio = 20;  //透明度(うっすらベース地図が透けるくらい)

  window.setTimeout(function(){
    app.core.setViewpoint(viewpoint);   //app→app.core
    app.core.setTransparency(ratio);    //app→app.core
  }, 1);

//ボタンで表示するマーカーをレイヤー毎に切り替え
  document.getElementById("LayerALL").addEventListener("click", function(e) {
    app.core.showPoiLayer("観光");
    app.core.showPoiLayer("史跡");
  });
  document.getElementById("Layer1").addEventListener("click", function(e) {
    app.core.showPoiLayer("観光");
    app.core.hidePoiLayer("史跡");
  });
  document.getElementById("Layer2").addEventListener("click", function(e) {
    app.core.showPoiLayer("史跡");
    app.core.hidePoiLayer("観光");
  });
  document.getElementById("LayerHide").addEventListener("click", function(e) {
    app.core.hidePoiLayer("観光");
    app.core.hidePoiLayer("史跡");
  });

//全マーカー表示、非表示
  document.getElementById("PoiALL").addEventListener("click", function(e) {
    app.core.showAllMarkers();
  });
  document.getElementById("hideALL").addEventListener("click", function(e) {
    app.core.hideAllMarkers();
  });

//マーカー選択、解除
  document.getElementById("select").addEventListener("click", function(e) {
    app.core.selectMarker("タワー");
  });
  document.getElementById("unSelect").addEventListener("click", function(e) {
    app.core.unselectMarker();
  });

//マーカークリア、リムーブ
  document.getElementById("clear").addEventListener("click", function(e) {
    app.core.clearMarker("史跡");
  });
  document.getElementById("remove").addEventListener("click", function (e) {
    app.core.removeMarker("タワー");
  });

//マーカー追加、レイヤー追加
  document.getElementById("add").addEventListener("click", function (e) {
    app.core.addMarker({
        "id": "タワー",
        "lnglat":[140.75395646590007,41.79463859482169],
        "name": "五稜郭タワー",
        "url": "https://www.goryokaku-tower.co.jp/"
    },"観光");
  });
  document.getElementById("addLayer").addEventListener("click", function (e) {
    app.core.addPoiLayer("goryokaku2#新規",{
        "icon": "pois/img/blue_marker.png",
        "selectedIcon": "pois/img/red_marker.png"
    });
    app.core.addMarker({
        "id": "二ノ橋",
        "lnglat":[140.75575537303416,41.79561542967801],
        "name": "二ノ橋",
        "html": "鯉がいっぱいいます！",
        "icon":"pois/img/red_marker.png"
    },"goryokaku2#新規");
  });

//線引く
  document.getElementById("line").addEventListener("click", function (e) {
    app.core.addLine({
      lnglats: [
        [140.75509899875652,41.79486069621012],
        [140.7560612947552,41.79512929859726],
        [140.75563781096838,41.795486705576906],
        [140.75505015022142,41.79561680945611],
        [140.75509899875652,41.79486069621012]
      ],
      stroke: {
        color: "#FF0000",
        width: 5
      }
    });
  });

//マーカーの移動
  document.getElementById("move").addEventListener("click", function (e) {
    var poiData = {
      "lnglat":[140.75553148088343,41.79538581110293],
      "icon":"pois/img/red_marker.png"
      }
    app.core.updateMarker("箱館奉行所", poiData);
  });
});
