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
});
